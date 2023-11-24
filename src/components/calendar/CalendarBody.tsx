import styled from "styled-components";
import { useAppSelector } from "@/global/redux/reduxHooks";
import CalendardayNumberCell from "@/components/calendar/CalendarDayNumberCell";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, max-content);
  grid-template-rows: auto;
  justify-items: stretch;
`;

const StyledWeekDayCell = styled("div")`
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1.6rem;
  height: 2.4rem;
  width: 2.4rem;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px 18px;
  color: rgb(161, 161, 161);
`;

export default function CalendarBody() {
  const { weekDaysStrings, daysInMonth } = useAppSelector((state) => state.calendar);

  return (
    <StyledWrapper>
      {weekDaysStrings.map((dayString) => (
        <StyledWeekDayCell key={`${dayString}-${Math.random() * 100}`}>
          {dayString}
        </StyledWeekDayCell>
      ))}
      {daysInMonth.map(({ yearNumber, monthNumber, dayNumberInMonth, isWeekendDay }) => (
        <CalendardayNumberCell
          key={`${monthNumber}-${Math.random() * 200}-${dayNumberInMonth || Math.random() * 200}`}
          dayNumberInMonth={dayNumberInMonth}
          isWeekendDay={isWeekendDay}
          monthNumber={monthNumber}
          yearNumber={yearNumber}
        />
      ))}
    </StyledWrapper>
  );
}
