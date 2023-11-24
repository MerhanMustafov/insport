import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { setSelectedYear, updateCalendarData } from "@/global/redux/slices/calendar.slice";

const StyledCalendarHeadRight = styled.div`
  grid-area: CALENDAR_HEAD_RIGHT;
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
  font-size: 1.2rem;
`;

const StyledEmpty = styled.div`
  width: 1.5rem;
`;

const StyledYear = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  font-size: 1.2rem;
  color: white;
`;

export default function CalendarHeadYear() {
  const dispatch = useAppDispatch();
  const { selectedYear, currentYear } = useAppSelector((state) => state.calendar);

  const onPreviouseYearClick = () => {
    dispatch(setSelectedYear(selectedYear - 1));
    dispatch(updateCalendarData());
  };
  const onNextYearClick = () => {
    dispatch(setSelectedYear(selectedYear + 1));
    dispatch(updateCalendarData());
  };

  return (
    <StyledCalendarHeadRight>
      {selectedYear > 2022 ? (
        <StyledArrowButton onClick={onPreviouseYearClick}>&lt;</StyledArrowButton>
      ) : (
        <StyledEmpty></StyledEmpty>
      )}
      <StyledYear>{selectedYear}</StyledYear>
      {selectedYear === currentYear + 1 ? (
        <StyledEmpty></StyledEmpty>
      ) : (
        <StyledArrowButton onClick={onNextYearClick}>&gt;</StyledArrowButton>
      )}
    </StyledCalendarHeadRight>
  );
}
