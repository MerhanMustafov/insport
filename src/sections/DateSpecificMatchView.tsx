import { useState } from "react";
import styled from "styled-components";

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
  /* &.calendar___head_days {
    color: #ffffff;
    color: #000000;
    border: none;
  } */
  &.selected-date {
    color: #ffffff;
    background: #000000;
  }
  &.empty-day {
    color: #ffffff;
    pointer-events: none;
    background: #f3f3f3;
  }
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

const daysLookUp = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  0: 7
};

const monthsLookUp = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  11: 10,
  12: 11
};
export default function DateSpecificMatchView() {
  const [selectedYear, setSelectedYear] = useState(2010);
  const [selectedMonth, setSelectedMonth] = useState<keyof typeof monthsLookUp>(6);
  const [selectedDay, setSelectedDay] = useState<number | null>(-1);

  function getFirstWeekEmptyDays(year: number, month: number) {
    const _date = new Date(year, month, 1);
    const day = _date.getDay() as keyof typeof daysLookUp;
    return Array.from(Array(daysLookUp[day] - 1).keys());
  }

  function getLastWeekEmptyDays(year: number, month: number, days: number) {
    const _date = new Date(year, month, days);
    const day = _date.getDay() as keyof typeof daysLookUp;
    return Array.from(Array(7 - daysLookUp[day]).keys());
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

  const arrayOfDaysInMonth = getDaysInMonth(selectedYear, monthsLookUp[selectedMonth]);

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
            <StyledCalendarCell className="calendar___head_days" key={d}>
              {d}
            </StyledCalendarCell>
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
