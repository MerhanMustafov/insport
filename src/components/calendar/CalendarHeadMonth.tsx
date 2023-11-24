import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { setSelectedMonth, updateCalendarData } from "@/global/redux/slices/calendar.slice";
import { MonthNumbersNormalType } from "@/lib/calendar/calendar.types";
import { monthsLong } from "@/lib/calendar/month/month.constants";

const StyledCalendarHeadLeft = styled.div`
  grid-area: CALENDAR_HEAD_LEFT;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: transparent;
  &:hover {
    color: white;
  }
`;

const StyledArrowButton = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  font-size: 1.5rem;
  /* color: transparent; */
`;

const StyledEmpty = styled.div`
  width: 1.5rem;
`;

const StyledMonthName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  font-size: 1.5rem;
  color: white;
`;

export default function CalendarHeadMonth() {
  const dispatch = useAppDispatch();
  const { selectedMonth } = useAppSelector((state) => state.calendar);

  const onNextMonthClick = () => {
    if (selectedMonth + 1 > 12) return;
    dispatch(setSelectedMonth((selectedMonth + 1) as MonthNumbersNormalType));
    dispatch(updateCalendarData());
  };
  const onPreviouseMonthClick = () => {
    if (selectedMonth - 1 < 1) return;
    dispatch(setSelectedMonth((selectedMonth - 1) as MonthNumbersNormalType));
    dispatch(updateCalendarData());
  };
  return (
    <StyledCalendarHeadLeft>
      {selectedMonth > 1 ? (
        <StyledArrowButton onClick={onPreviouseMonthClick}>&lt;</StyledArrowButton>
      ) : (
        <StyledEmpty></StyledEmpty>
      )}
      <StyledMonthName>{monthsLong[selectedMonth]}</StyledMonthName>
      {selectedMonth < 12 ? (
        <StyledArrowButton onClick={onNextMonthClick}>&gt;</StyledArrowButton>
      ) : (
        <StyledEmpty></StyledEmpty>
      )}
    </StyledCalendarHeadLeft>
  );
}
