import { RxCalendar } from "react-icons/rx";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { toggleCalendar } from "@/global/redux/slices/toggle.slice";
import ClickAwayBackGroundContainer from "@/components/ClickAwayBackGroundContainer";
import Calendar from "@/components/calendar/Calendar";

const StyledNav = styled.nav`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 10px 5px;
  position: relative;
  width: 100%;
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
  const { activeDate } = useAppSelector((state) => state.calendar);
  const { activeDay, activeMonth, activeYear } = activeDate;

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
        <StyledNavText>
          {activeDay < 10 ? `0${activeDay}` : activeDay}/
          {activeMonth < 10 ? `0${activeMonth}` : activeMonth}/{activeYear}
        </StyledNavText>
        <StyledNavText>Yesterday</StyledNavText>
        <StyledNavText>Today</StyledNavText>
        <StyledNavText>Tomorrow</StyledNavText>
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
