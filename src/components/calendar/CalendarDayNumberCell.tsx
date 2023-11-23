import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { setSelectedDayOfTheMonth } from "@/global/redux/slices/calendar.slice";
import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from "@/lib/calendar/calendar.types";

const StyledCalendarCell = styled("div")`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  line-height: 1.9rem;
  height: 2.4rem;
  width: 2.4rem;
  border: none;
  color: #000000;
  padding: 10px 18px;
  &.selected-day {
    background: #003854;
    color: #ffffff;
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
      className={` ${
        dayNumberInMonth === selectedDayOfTheMonth && selectedMonth === monthNumber
          ? "selected-day"
          : ""
      } ${dayNumberInMonth === null ? "empty-day" : ""} ${isWeekendDay ? "weekend" : ""}`}
      key={`${monthNumber}-${dayNumberInMonth ? dayNumberInMonth : ""}-${Math.random() * 100}`}
    >
      {dayNumberInMonth}
    </StyledCalendarCell>
  );
}
