import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { setSelectedYear, updateCalendarData } from "@/global/redux/slices/calendar.slice";

const StyledCalendarHeadRight = styled.div`
  grid-area: CALENDAR_HEAD_RIGHT;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
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
  width: 1.5rem;
  font-size: 2rem;
  height: 100%;
`;

const StyledEmpty = styled.div`
  width: 1.5rem;
  height: 100%;
`;

const StyledYear = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  font-size: 1.2rem;
  color: white;
  height: 100%;
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
        <StyledArrowLeft onClick={onPreviouseYearClick}>&lt;</StyledArrowLeft>
      ) : (
        <StyledEmpty></StyledEmpty>
      )}
      <StyledYear>{selectedYear}</StyledYear>
      {selectedYear === currentYear + 1 ? (
        <StyledEmpty></StyledEmpty>
      ) : (
        <StyledArrowRight onClick={onNextYearClick}>&gt;</StyledArrowRight>
      )}
    </StyledCalendarHeadRight>
  );
}
