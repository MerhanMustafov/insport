import { useState } from "react";
import styled from "styled-components";
import { getDaysInMonth } from "@/lib/calendar/calendar.utils";
import { months, monthsLookUp } from "@/lib/calendar/month/month.constants";

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

const StyledCalendarHeader = styled.div``;

const StyledCalendarContent = styled.div`
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
  &.selected-date {
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

export default function DateSpecificMatchView() {
  const [selectedYear] = useState(2013);
  const [selectedMonth] = useState<keyof typeof monthsLookUp>(7);
  const [selectedDay, setSelectedDay] = useState<number>(-1);

  const { weekDayStrings, daysInMonth } = getDaysInMonth(selectedYear, selectedMonth - 1, 1);

  const onDateClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const day = Number((e.target as HTMLDivElement).id);
    if (day) {
      setSelectedDay(day);
      return;
    }
    setSelectedDay(-1);
  };

  return (
    <StyledAllCalendarsWrapper>
      <StyledCalendarWrapper>
        <StyledCalendarHeader>
          <div>
            {selectedYear} {months[selectedMonth]}
          </div>
        </StyledCalendarHeader>

        <StyledCalendarContent>
          {weekDayStrings.map((dayString) => (
            <StyledCalendarCell
              key={`${dayString}-${Math.random() * 90}`}
              className="calendar___head_days"
            >
              {dayString}
            </StyledCalendarCell>
          ))}
          {daysInMonth.map(({ month, date, isWeekend }) => (
            <StyledCalendarCell
              onClick={(e) => onDateClick(e)}
              id={`${date}`}
              className={`${
                date === selectedDay && month === selectedMonth ? "selected-date" : ""
              } ${date === null ? "empty-day" : ""} ${isWeekend ? "weekend" : ""}`}
              key={`${month}-${date}-${Math.random() * 100}`}
            >
              {date}
            </StyledCalendarCell>
          ))}
        </StyledCalendarContent>
      </StyledCalendarWrapper>
    </StyledAllCalendarsWrapper>
  );
}
