import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";
import styled from "styled-components";
import withScreenSize from "@/global/hoc/withScreenSize";
import { useNavigationDayActiveLink } from "@/global/hooks/useNavigationDayActiveLink";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { toggleCalendar } from "@/global/redux/slices/toggle.slice";
import Calendar from "@/components/calendar/Calendar";
import ClickAwayBackGroundContainer from "@/components/shared/ClickAwayBackGroundContainer";
import { getFormatedDateYYYYMMDD } from "@/lib/calendar/calendar.utils";
import { SOCCER } from "@/router/pathConsts";

const StyledNav = styled.nav`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
  padding: 1rem 0.5rem;
  width: 100%;
  border-radius: 1rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 1.4rem;
`;

const StyledNavText = styled.span<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? 1 : 1.4)}rem;
  &.other {
    border-bottom: 2px solid #ff0040;
  }
`;
const StyledNavLink = styled(Link)<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? 1 : 1.4)}rem;
  color: black;
  text-decoration: none;
  &.today {
    border-bottom: 2px solid #ff0040;
  }
  &.yesterday {
    border-bottom: 2px solid #ff0040;
  }
  &.tomorrow {
    border-bottom: 2px solid #ff0040;
  }
`;
const StyledCalendarContainer = styled.div`
  position: relative;
`;

const StyledCalendarIcon = styled(RxCalendar)<{ $isMobile?: boolean }>`
  cursor: pointer;
  font-size: ${(props) => (props.$isMobile ? 1.4 : 1.6)}rem;
  color: #001e28;
`;

const StyledCalendarWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(100% + 1rem);
  left: 0px;
  border-radius: 1rem;
`;

function DateSpecificViewNavigation({ isMobile }: { isMobile?: boolean }) {
  const dispatch = useAppDispatch();
  const selectedDayStatus = useNavigationDayActiveLink();
  const { isCalendarOpen } = useAppSelector((state) => state.toggle.calendar);
  const { activeDate, today, tomorrow, yesterday } = useAppSelector((state) => state.calendar);

  const { activeDay, activeMonth, activeYear } = activeDate;
  const { todayDay, todayMonth, todayYear } = today;
  const { tomorrowDay, tomorrowMonth, tomorrowYear } = tomorrow;
  const { yesterdayDay, yesterdayMonth, yesterdayYear } = yesterday;

  const _currentlySelectedDate = getFormatedDateYYYYMMDD(activeYear, activeMonth, activeDay);
  const _todayDate = getFormatedDateYYYYMMDD(todayYear, todayMonth, todayDay, "-");
  const _tomorrowDate = getFormatedDateYYYYMMDD(tomorrowYear, tomorrowMonth, tomorrowDay, "-");
  const _yesterdayDate = getFormatedDateYYYYMMDD(yesterdayYear, yesterdayMonth, yesterdayDay, "-");

  const handleCalendarToggle = () => {
    dispatch(toggleCalendar());
  };

  const clickAwayHandler = () => {
    dispatch(toggleCalendar());
  };
  return (
    <StyledNav>
      <StyledUl>
        <StyledCalendarContainer>
          <StyledCalendarIcon $isMobile={isMobile} onClick={handleCalendarToggle} />
          {isCalendarOpen && (
            <>
              <ClickAwayBackGroundContainer
                onClick={clickAwayHandler}
              ></ClickAwayBackGroundContainer>
              <StyledCalendarWrapper>
                <Calendar />
              </StyledCalendarWrapper>
            </>
          )}
        </StyledCalendarContainer>
        <StyledNavText $isMobile={isMobile} className={selectedDayStatus.other.cl}>
          {_currentlySelectedDate}
        </StyledNavText>
        <StyledNavLink
          $isMobile={isMobile}
          className={selectedDayStatus.yesterday.cl}
          to={`${SOCCER}/${_yesterdayDate}`}
        >
          Yesterday
        </StyledNavLink>
        <StyledNavLink
          $isMobile={isMobile}
          className={selectedDayStatus.today.cl}
          to={`${SOCCER}/${_todayDate}`}
        >
          Today
        </StyledNavLink>
        <StyledNavLink
          $isMobile={isMobile}
          className={selectedDayStatus.tomorrow.cl}
          to={`${SOCCER}/${_tomorrowDate}`}
        >
          Tomorrow
        </StyledNavLink>
      </StyledUl>
    </StyledNav>
  );
}

export default withScreenSize(DateSpecificViewNavigation);
