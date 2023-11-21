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

const StyledCalendarCell = styled.div`
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
  const arrayOfMonths = getMonthsInYear(1998);

  function getMonthsInYear(year: number) {
    const _date = new Date(year, 0, 1);
    const monthsInYear = [];
    while (_date.getFullYear() === year) {
      const arrayOfDayInMonth = getDaysInMonth(year, _date.getMonth());
      monthsInYear.push({
        year,
        monthLong: months[(_date.getMonth() + 1) as keyof typeof months],
        monthNumber: _date.getMonth() + 1,
        monthIndex: _date.getMonth(),
        days: arrayOfDayInMonth,
        lastDay: arrayOfDayInMonth[arrayOfDayInMonth.length - 1],
        firstDay: arrayOfDayInMonth[0]
      });
      _date.setMonth(_date.getMonth() + 1);
    }
    return monthsInYear;
  }

  function getDaysInMonth(year: number, month: number) {
    const _date = new Date(year, month, 1);

    const daysInMonth = [];
    while (_date.getMonth() === month) {
      daysInMonth.push(_date.getDate());
      _date.setDate(_date.getDate() + 1);
    }
    return daysInMonth;
  }

  const getFirstWeekEmptyDays = (year: number, month: number) => {
    const _date = new Date(year, month, 1);
    if (_date.getDay() === 0) {
      return Array.from(Array(6).keys());
    }
    return Array.from(Array(_date.getDay() - 1).keys());
  };

  const getLastWeekEmptyDays = (year: number, month: number, days: number) => {
    const _date = new Date(year, month, days);
    console.log(Array.from(Array(_date.getDay()).keys()));
    if (_date.getDay() === 0) {
      return [];
    }
    return Array.from(Array(7 - _date.getDay()).keys());
  };

  return (
    <StyledAllCalendarsWrapper>
      {arrayOfMonths.map((data) => (
        <StyledCalendarWrapper key={`#${Math.random() * 100 * Math.random()}`}>
          <StyledCalendarHeader>
            <div>
              {data.year} {data.monthLong}
            </div>
          </StyledCalendarHeader>

          <StyledCalendarContent>
            {Object.values(weekDays).map((d) => (
              <StyledCalendarCell key={d}>{d}</StyledCalendarCell>
            ))}
            {data.days.map((day) => (
              <>
                {day === data.firstDay &&
                  getFirstWeekEmptyDays(data.year, data.monthIndex).map((i) => (
                    <StyledCalendarCell key={i}></StyledCalendarCell>
                  ))}
                <StyledCalendarCell key={day}>{day}</StyledCalendarCell>

                {day === data.lastDay &&
                  getLastWeekEmptyDays(data.year, data.monthIndex, data.lastDay).map((i) => (
                    <StyledCalendarCell key={i}></StyledCalendarCell>
                  ))}
              </>
            ))}
          </StyledCalendarContent>
        </StyledCalendarWrapper>
      ))}
    </StyledAllCalendarsWrapper>
  );
}
