import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import {
  setSelectedMonth,
  setSelectedYear,
  updateCalendarData
} from "@/global/redux/slices/calendar.slice";
import { MonthNumbersNormalType } from "@/lib/calendar/calendar.types";
import { monthsLong } from "@/lib/calendar/month/month.constants";

const StyledWrapper = styled.div`
  background: #001e28;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: auto;
  grid-template-areas: "CALENDAR_HEAD_LEFT . CALENDAR_HEAD_RIGHT";
  color: white;
`;

const StyledCalendarHeadLeft = styled.div`
  grid-area: CALENDAR_HEAD_LEFT;
  font-size: 1.6rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 5px 0px;
`;

const StyledCalendarHeadRight = styled.div`
  grid-area: CALENDAR_HEAD_RIGHT;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;

const StyledArrowButton = styled.span`
  cursor: pointer;
  text-align: center;
  width: 20px;
`;

const StyledEmpty = styled.div`
  width: 20px;
`;

const StyledMonthName = styled.span`
  text-align: center;
  width: 85px;
`;
const StyledYear = styled.span`
  text-align: center;
  width: 40px;
`;

export default function CalendarHead() {
  const dispatch = useAppDispatch();
  const { selectedYear, selectedMonth } = useAppSelector((state) => state.calendar);

  const onPreviouseYearClick = () => {
    dispatch(setSelectedYear(selectedYear - 1));
    dispatch(updateCalendarData());
  };
  const onNextYearClick = () => {
    dispatch(setSelectedYear(selectedYear + 1));
    dispatch(updateCalendarData());
  };

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
    <StyledWrapper>
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
      <StyledCalendarHeadRight>
        <StyledArrowButton onClick={onPreviouseYearClick}>&lt;</StyledArrowButton>
        <StyledYear>{selectedYear}</StyledYear>
        <StyledArrowButton onClick={onNextYearClick}>&gt;</StyledArrowButton>
      </StyledCalendarHeadRight>
    </StyledWrapper>
  );
}
