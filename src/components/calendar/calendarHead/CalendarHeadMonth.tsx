import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
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
  color: white;
  align-items: stretch;
`;

const StyledArrowLeft = styled(TfiAngleLeft)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  font-size: 2rem;
  height: 100%;
`;

const StyledArrowRight = styled(TfiAngleRight)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 1.5rem;
  font-size: 2rem;
`;

const StyledEmpty = styled.div`
  width: 1.5rem;
  height: 100%;
`;

const StyledMonthName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  font-size: 1.5rem;
  color: white;
  height: 100%;
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
        <StyledArrowLeft onClick={onPreviouseMonthClick}>&lt;</StyledArrowLeft>
      ) : (
        <StyledEmpty></StyledEmpty>
      )}
      <StyledMonthName>{monthsLong[selectedMonth]}</StyledMonthName>
      {selectedMonth < 12 ? (
        <StyledArrowRight onClick={onNextMonthClick}>&gt;</StyledArrowRight>
      ) : (
        <StyledEmpty></StyledEmpty>
      )}
    </StyledCalendarHeadLeft>
  );
}
