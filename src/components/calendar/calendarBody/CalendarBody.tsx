import styled from "styled-components";
import CalendarWeekDaysNumberCells from "@/components/calendar/calendarBody/CalendarWeekDaysNumberCells";
import CalendarWeekDaysStringCells from "@/components/calendar/calendarBody/CalendarWeekDaysStringCells";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, max-content);
  grid-template-rows: auto;
  justify-items: stretch;
`;

export default function CalendarBody() {
  return (
    <StyledWrapper>
      <CalendarWeekDaysStringCells />
      <CalendarWeekDaysNumberCells />
    </StyledWrapper>
  );
}
