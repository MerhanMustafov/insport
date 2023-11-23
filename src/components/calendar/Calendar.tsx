import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/global/redux/reduxHooks";
import { setInitialCalendarData } from "@/global/redux/slices/calendar.slice";
import CalendarBody from "@/components/calendar/CalendarBody";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 30px max-content;
  font-family: sans-serif;
  width: max-content;
`;

export default function Calendar() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInitialCalendarData({ date: new Date() }));
  }, []);

  return (
    <StyledWrapper>
      <div>
        <span>2023</span>
        <span>April</span>
      </div>
      <CalendarBody />
    </StyledWrapper>
  );
}
