import styled from "styled-components";
import CalendatHeadMonth from "@/components/calendar/CalendarHeadMonth";
import CalendarHeadYear from "@/components/calendar/CalendarHeadYear";

const StyledWrapper = styled.div`
  background: #001e28;
  padding: 20px 5px 5px 5px;
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: auto;
  grid-template-areas: "CALENDAR_HEAD_LEFT . CALENDAR_HEAD_RIGHT";
`;

export default function CalendarHead() {
  return (
    <StyledWrapper>
      <CalendatHeadMonth />
      <CalendarHeadYear />
    </StyledWrapper>
  );
}
