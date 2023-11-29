import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { toggleCalendar } from "@/global/redux/slices/toggle.slice";
import ClickAwayBackGroundContainer from "@/components/ClickAwayBackGroundContainer";
import Calendar from "@/components/calendar/Calendar";
import { getFormatedDateYYYYMMDD } from "@/lib/calendar/calendar.utils";
import { SOCCER } from "@/router/pathConsts";

const StyledNav = styled.nav`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
  padding: 10px 5px;
  position: relative;
  width: 100%;
  border-radius: 10px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 2rem;
`;

const StyledNavText = styled.span`
  font-size: 1.4rem;
`;
const StyledNavLink = styled(Link)`
  font-size: 1.4rem;
  color: black;
  text-decoration: none;
`;

const StyledCalendarIcon = styled(RxCalendar)`
  cursor: pointer;
  font-size: 2.5rem;
  color: #001e28;
`;

const StyledCalendarWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 100%;
  left: 0px;
`;

export default function DateSpecificViewNavigation() {
  const dispatch = useAppDispatch();
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
        <StyledCalendarIcon onClick={handleCalendarToggle} />
        {/* TODO: add replace with Live if live set/exists */}
        <StyledNavText>{_currentlySelectedDate}</StyledNavText>
        <StyledNavLink to={`${SOCCER}/${_yesterdayDate}`}>Yesterday</StyledNavLink>
        <StyledNavLink to={`${SOCCER}/${_todayDate}`}>Today</StyledNavLink>
        <StyledNavLink to={`${SOCCER}/${_tomorrowDate}`}>Tomorrow</StyledNavLink>
      </StyledUl>
      {isCalendarOpen && (
        <>
          <ClickAwayBackGroundContainer onClick={clickAwayHandler}></ClickAwayBackGroundContainer>
          <StyledCalendarWrapper>
            <Calendar />
          </StyledCalendarWrapper>
        </>
      )}
    </StyledNav>
  );
}
