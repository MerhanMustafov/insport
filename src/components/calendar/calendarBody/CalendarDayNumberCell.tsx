import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { setSelectedDayOfTheMonth } from "@/global/redux/slices/calendar.slice";
import { toggleCalendar } from "@/global/redux/slices/toggle.slice";
import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from "@/lib/calendar/calendar.types";

const StyledCalendarCell = styled("div")`
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #000000;
  padding: 10px 0px;
  &.selected-day {
    background: #d2d2d2;
  }
  &.empty-day {
    border: none;
  }
  &.weekend {
    color: #fe0101;
  }
`;
interface CalendarDayNumberCellProps {
  monthNumber: MonthNumbersNormalType;
  dayNumberInMonth: NumberOfDaysInAMonthType | null;
  yearNumber: number;
  isWeekendDay: boolean;
}

export default function CalendarDayNumberCell({
  dayNumberInMonth,
  isWeekendDay,
  monthNumber,
  yearNumber
}: CalendarDayNumberCellProps) {
  const dispatch = useAppDispatch();
  const { activeDate } = useAppSelector((state) => state.calendar);
  const { activeYear, activeMonth, activeDay } = activeDate;

  const isCurrentlySelectedDay =
    activeYear === yearNumber && activeMonth === monthNumber && activeDay === dayNumberInMonth;

  const handleDateClick = () => {
    if (dayNumberInMonth) {
      dispatch(setSelectedDayOfTheMonth(dayNumberInMonth));
      dispatch(toggleCalendar());
    }
  };

  return (
    <StyledCalendarCell
      onClick={handleDateClick}
      id={`${dayNumberInMonth === null ? Math.random() * 150 : dayNumberInMonth}`}
      className={` ${isCurrentlySelectedDay ? "selected-day" : ""} ${
        dayNumberInMonth === null ? "empty-day" : ""
      } ${isWeekendDay ? "weekend" : ""}`}
      key={`${monthNumber}-${dayNumberInMonth ? dayNumberInMonth : ""}-${Math.random() * 100}`}
    >
      {dayNumberInMonth}
    </StyledCalendarCell>
  );
}
