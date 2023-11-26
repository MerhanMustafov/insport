import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/global/redux/reduxHooks";
import { setInitialCalendarData } from "@/global/redux/slices/calendar.slice";
import CalendarBody from "@/components/calendar/calendarBody/CalendarBody";
import CalendarHead from "@/components/calendar/calendarHead/CalendarHead";

const StyledWrapper = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  font-family: sans-serif;
  width: max-content;
  background-color: #ffffff;
`;

export default function Calendar() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInitialCalendarData());
  }, []);

  return (
    <StyledWrapper>
      <CalendarHead />
      <CalendarBody />
    </StyledWrapper>
  );
}
