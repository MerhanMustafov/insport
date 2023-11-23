import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/global/redux/reduxHooks";
import { setInitialCalendarData } from "@/global/redux/slices/calendar.slice";
import CalendarBody from "@/components/calendar/CalendarBody";

const StyledAllCalendarsWrapper = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 100px;
  font-family: "Courier New", Courier, monospace;
`;
const StyledCalendarWrapper = styled.div`
  font-size: 2rem;
`;

export default function Calendar() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInitialCalendarData({ date: new Date() }));
  }, []);

  return (
    <StyledAllCalendarsWrapper>
      <StyledCalendarWrapper>
        <CalendarBody />
      </StyledCalendarWrapper>
    </StyledAllCalendarsWrapper>
  );
}
