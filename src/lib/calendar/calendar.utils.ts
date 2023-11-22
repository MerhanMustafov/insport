import { DayIndiceType } from "@/lib/calendar/week/week.constants";
import {
  getArrayOfWeekDaysString,
  getFirstWeekEmptyDays,
  getLastWeekEmptyDays
} from "@/lib/calendar/week/week.utils";

/**
 * @Description  Returns and object with
 * @key daysInMonth - e.g. [{month: 1, date: 1, isWeekend: false}, {month: 1, date: 2, isWeekend: false}, ...]
 * @key weekDayStrings - e.g. ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] || ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon']
 *
 * @param {number} year - in format YYYY (e.g. 2021 || 2000 || 1990 || 1095)
 * @param {number} month - the 0 is January and 11 is December
 * @param {DayIndiceType} firstDayOfWeek - 0 | 1 | 2 | 3 | 4 | 5 | 6 - where 0 is Sunday and 6 is Saturday (default is 1 - Monday)
 * @returns - e.g. {daysInMonth: [{month: 1, date: 1, isWeekend: false}, {month: 1, date: 2, isWeekend: false}, ...], weekDayStrings: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
 */
export function getDaysInMonth(year: number, month: number, firstDayOfWeek: DayIndiceType = 1) {
  const _date = new Date(year, month, 1);

  const daysInMonth = [];
  let totalDay = 0;

  while (_date.getMonth() === month) {
    const isWeekend = _date.getDay() === 0 || _date.getDay() === 6;
    daysInMonth.push({ month: month + 1, date: _date.getDate(), isWeekend });
    totalDay += 1;
    _date.setDate(_date.getDate() + 1);
  }
  const weekDayStrings = getArrayOfWeekDaysString(firstDayOfWeek);

  getFirstWeekEmptyDays(year, month, firstDayOfWeek).forEach(() =>
    daysInMonth.unshift({ month: month + 1, date: null, isWeekend: false })
  );
  getLastWeekEmptyDays(year, month, totalDay, firstDayOfWeek).forEach(() =>
    daysInMonth.push({ month: month + 1, date: null, isWeekend: false })
  );

  return { daysInMonth, weekDayStrings };
}
