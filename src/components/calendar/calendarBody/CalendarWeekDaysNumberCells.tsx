import { useAppSelector } from "@/global/redux/reduxHooks";
import CalendarDayNumberCell from "@/components/calendar/calendarBody/CalendarDayNumberCell";

export default function CalendarWeekDaysNumberCells() {
  const { daysInMonth } = useAppSelector((state) => state.calendar);
  return (
    <>
      {daysInMonth.map(({ yearNumber, monthNumber, dayNumberInMonth, isWeekendDay }) => (
        <CalendarDayNumberCell
          key={`${monthNumber}-${Math.random() * 200}-${dayNumberInMonth || Math.random() * 200}`}
          dayNumberInMonth={dayNumberInMonth}
          isWeekendDay={isWeekendDay}
          monthNumber={monthNumber}
          yearNumber={yearNumber}
        />
      ))}
    </>
  );
}
