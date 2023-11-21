import { useState } from "react";
import styled from "styled-components";

const StyledAllCalendarsWrapper = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 100px;
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
  &.selected-date {
    color: #ffffff;
    background: #000000;
  }
  &.empty-day {
    color: #ffffff;
    pointer-events: none;
    background: #f3f3f3;
  }
  cursor: pointer;
  border: 1px solid #000000;
  display: flex;
  justify-content: center;
  padding: 5px 15px;
`;

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

const weekDays = {
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
  7: "Sun"
};

export default function DateSpecificMatchView() {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedMonth, setSelectedMonth] = useState<keyof typeof months>(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(-1);
  // const arrayOfMonths = getMonthsInYear(2023);

  function getFirstWeekEmptyDays(year: number, month: number) {
    const _date = new Date(year, month, 1);
    if (_date.getDay() === 0) {
      return Array.from(Array(7 - 1).keys());
    }
    return Array.from(Array(_date.getDay() - 1).keys());
  }

  function getLastWeekEmptyDays(year: number, month: number, days: number) {
    const _date = new Date(year, month, days);
    if (_date.getDay() === 0) {
      return [];
    }
    return Array.from(Array(7 - _date.getDay()).keys());
  }

  function getDaysInMonth(year: number, month: number) {
    const _date = new Date(year, month, 1);

    const daysInMonth = [];
    let totalDay = 0;

    while (_date.getMonth() === month) {
      daysInMonth.push(_date.getDate());
      totalDay += 1;
      _date.setDate(_date.getDate() + 1);
    }
    getFirstWeekEmptyDays(year, month).forEach(() => daysInMonth.unshift(null));
    getLastWeekEmptyDays(year, month, totalDay).forEach(() => daysInMonth.push(null));

    return daysInMonth;
  }

  const arrayOfDaysInMonth = getDaysInMonth(selectedYear, selectedMonth - 1);

  const onDateClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const day = Number((e.target as HTMLDivElement).id);
    console.log(day);
    if (day) {
      setSelectedDay(day);
      return;
    }
    setSelectedDay(-1);
  };

  return (
    <StyledAllCalendarsWrapper>
      <StyledCalendarWrapper key={`#${Math.random() * 100 * Math.random()}`}>
        <StyledCalendarHeader>
          <div>
            {selectedYear} {months[selectedMonth]}
          </div>
        </StyledCalendarHeader>

        <StyledCalendarContent>
          {Object.values(weekDays).map((d) => (
            <StyledCalendarCell key={d}>{d}</StyledCalendarCell>
          ))}
          {arrayOfDaysInMonth.map((day) => (
            <StyledCalendarCell
              onClick={(e) => onDateClick(e)}
              id={`${day}`}
              className={`${day === selectedDay ? "selected-date" : ""} ${
                day === null ? "empty-day" : ""
              }`}
              key={day}
            >
              {day}
            </StyledCalendarCell>
          ))}
        </StyledCalendarContent>
      </StyledCalendarWrapper>
    </StyledAllCalendarsWrapper>
  );
}
