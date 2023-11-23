import styled from "styled-components";
import { useAppSelector } from "@/global/redux/reduxHooks";
import CalendardayNumberCell from "@/components/calendar/CalendarDayNumberCell";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, max-content);
  grid-template-rows: auto;
  justify-items: stretch;
`;

const StyledCalendarCell = styled("div")`
  cursor: pointer;
  border: 1px solid #000000;
  display: flex;
  justify-content: center;
  border: none;
  padding: 5px 15px;
  &.selected-day {
    color: #ffffff;
    background: #000000;
  }
  &.empty-day {
    color: #ffffff;
    pointer-events: none;
    background: #f3f3f3;
  }
  &.weekend {
    color: red;
  }
`;

export default function CalendarBody() {
  const { weekDaysStrings, daysInMonth } = useAppSelector((state) => state.calendar);

  return (
    <StyledWrapper>
      {weekDaysStrings.map((dayString) => (
        <StyledCalendarCell
          key={`${dayString}-${Math.random() * 100}`}
          className="calendar___head_days"
        >
          {dayString}
        </StyledCalendarCell>
      ))}
      {daysInMonth.map(({ monthNumber, dayNumberInMonth, isWeekendDay }) => (
        <CalendardayNumberCell
          key={`${monthNumber}-${Math.random() * 200}-${dayNumberInMonth || Math.random() * 200}`}
          dayNumberInMonth={dayNumberInMonth}
          isWeekendDay={isWeekendDay}
          monthNumber={monthNumber}
        />
      ))}
    </StyledWrapper>
  );
}
