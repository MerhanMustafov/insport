import { useState } from "react";
import styled from "styled-components";
import { DayIndiceType, weekDaysLookUpFactory } from "@/global/utils/weekDaysLookUpFactory";

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
  const [selectedYear] = useState(2013);
  const [selectedMonth] = useState<keyof typeof monthsLookUp>(7);
  const [selectedDay, setSelectedDay] = useState<number | null>(-1);

  function getFirstWeekEmptyDays(year: number, month: number, firstDayOfWeek: DayIndiceType = 1) {
    const _date = new Date(year, month, 1);
    const day = _date.getDay();
    return Array.from(Array(weekDaysLookUpFactory(firstDayOfWeek)[day] - 1).keys());
  }

  function getLastWeekEmptyDays(
    year: number,
    month: number,
    lastDay: number,
    firstDayOfWeek: DayIndiceType = 1
  ) {
    const _date = new Date(year, month, lastDay);
    const day = _date.getDay();
    return Array.from(Array(7 - weekDaysLookUpFactory(firstDayOfWeek)[day]).keys());
  }

  function getDaysInMonth(year: number, month: number, firstDayOfWeek: DayIndiceType = 1) {
    const _date = new Date(year, month, 1);

    const daysInMonth = [];
    let totalDay = 0;

    while (_date.getMonth() === month) {
      const isWeekend = _date.getDay() === 0 || _date.getDay() === 6;
      daysInMonth.push({ month, date: _date.getDate(), isWeekend });
      totalDay += 1;
      _date.setDate(_date.getDate() + 1);
    }
    getFirstWeekEmptyDays(year, month, firstDayOfWeek).forEach(() =>
      daysInMonth.unshift({ month, date: null, isWeekend: false })
    );
    getLastWeekEmptyDays(year, month, totalDay, firstDayOfWeek).forEach(() =>
      daysInMonth.push({ month, date: null, isWeekend: false })
    );

    return daysInMonth;
  }

  const arrayOfDaysInMonth = getDaysInMonth(selectedYear, monthsLookUp[selectedMonth]);
  console.log(arrayOfDaysInMonth);

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
      <StyledCalendarWrapper>
        <StyledCalendarHeader>
          <div>
            {selectedYear} {months[selectedMonth]}
          </div>
        </StyledCalendarHeader>

        <StyledCalendarContent>
          {Object.values(weekDays).map((dayString) => (
            <StyledCalendarCell
              key={`${dayString}-${Math.random() * 90}`}
              className="calendar___head_days"
            >
              {dayString}
            </StyledCalendarCell>
          ))}
          {arrayOfDaysInMonth.map(({ month, date, isWeekend }) => (
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
