import { useState } from "react";
import styled from "styled-components";
import CalendarBody from "@/components/calendar/CalendarBody";
import {
  MonthNumbersNormalType,
  NumberOfDaysInAMonthType,
  WeekDaysZeroBasedType
} from "@/lib/calendar/calendar.types";
import { getDaysInMonth } from "@/lib/calendar/calendar.utils";

interface CalendarPropTypes {
  date?: Date;
  firstDayOfWeek?: WeekDaysZeroBasedType;
}

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

/**
 *
 * @props date - Date object
 * @props firstDayOfWeek - 0 for Sunday, 1 for Monday, etc.
 */
export default function Calendar({ date = new Date(), firstDayOfWeek }: CalendarPropTypes) {
  const [selectedYear] = useState(date.getFullYear());
  const [selectedMonth] = useState((date.getMonth() + 1) as MonthNumbersNormalType);
  const [selectedDayOftheMonth, setSelectedDayOfTheMonth] = useState(
    date.getDate() as NumberOfDaysInAMonthType | -1
  );
  const [today] = useState(date.getDate() as NumberOfDaysInAMonthType);

  const { weekDayStrings, daysInMonth } = getDaysInMonth(
    selectedYear,
    selectedMonth,
    firstDayOfWeek
  );

  const onDateClick = (dayNumber: NumberOfDaysInAMonthType | -1) => {
    setSelectedDayOfTheMonth(dayNumber);
  };

  return (
    <StyledAllCalendarsWrapper>
      <StyledCalendarWrapper>
        <CalendarBody
          weekDayStrings={weekDayStrings}
          daysInMonth={daysInMonth}
          selectedMonth={selectedMonth}
          selectedDayOfTheMonth={selectedDayOftheMonth}
          setSelectedDayOfTheMonth={onDateClick}
          today={today}
        />
      </StyledCalendarWrapper>
    </StyledAllCalendarsWrapper>
  );
}
