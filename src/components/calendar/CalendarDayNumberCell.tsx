import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { setSelectedDayOfTheMonth } from "@/global/redux/slices/calendar.slice";
import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from "@/lib/calendar/calendar.types";

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

interface CalendarDayNumberCellProps {
  monthNumber: MonthNumbersNormalType;
  dayNumberInMonth: NumberOfDaysInAMonthType | null;
  isWeekendDay: boolean;
}

export default function CalendarDayNumberCell({
  dayNumberInMonth,
  isWeekendDay,
  monthNumber
}: CalendarDayNumberCellProps) {
  const dispatch = useAppDispatch();
  const { selectedMonth, selectedDayOfTheMonth } = useAppSelector((state) => state.calendar);

  const handleDateClick = () => {
    if (dayNumberInMonth) {
      dispatch(setSelectedDayOfTheMonth(dayNumberInMonth));
    }
  };

  return (
    <StyledCalendarCell
      onClick={handleDateClick}
      id={`${dayNumberInMonth === null ? Math.random() * 150 : dayNumberInMonth}`}
      className={`${
        dayNumberInMonth === selectedDayOfTheMonth && monthNumber === selectedMonth
          ? "selected-day"
          : ""
      } ${dayNumberInMonth === null ? "empty-day" : ""} ${isWeekendDay ? "weekend" : ""}`}
      key={`${monthNumber}-${dayNumberInMonth ? dayNumberInMonth : ""}-${Math.random() * 100}`}
    >
      {dayNumberInMonth}
    </StyledCalendarCell>
  );
}
