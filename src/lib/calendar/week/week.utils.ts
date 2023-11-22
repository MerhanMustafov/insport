import { DayIndiceType, weekDaysLookUp } from "@/lib/calendar/week/week.constants";

/**
 * @Description
 * Returns an object of week days indice taken from Date object (new Date().getDay())
 * where 0 is Sunday and 6 is Saturday
 *
 * @param {DayIndiceType} dayIndice 0 | 1 | 2 | 3 | 4 | 5 | 6
 * @returns - e.g. {0: 7, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6} || {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 1}
 *
 * @example - weekDaysLookUpFactory(0) => {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 1} - Week starts on Sunday
 * @example - weekDaysLookUpFactory(1) => {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 0: 7} - Week starts on Monday
 * @example - weekDaysLookUpFactory(2) => {2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6, 1: 7} - Week starts on Tuesday
 */
function weekDaysLookUpFactory(dayIndice: DayIndiceType = 1) {
  return weekDaysLookUp[dayIndice].reduce(
    (acc, { dayIndex }, i) => {
      return {
        ...acc,
        [dayIndex]: i + 1
      };
    },
    {} as { [k: number]: number }
  );
}

/**
 * @Description
 * Returns an array of week days string
 *
 * @param {DayIndiceType} dayIndice 0 | 1 | 2 | 3 | 4 | 5 | 6
 * @returns - e.g. ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] || ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon']
 *
 * @example - getArrayOfWeekDaysString(1) => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
 * @example - getArrayOfWeekDaysString(0) => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon']
 * @example - getArrayOfWeekDaysString(2) => ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']
 */
export function getArrayOfWeekDaysString(dayIndice: DayIndiceType = 1) {
  return weekDaysLookUp[dayIndice].map(({ dayString }) => dayString);
}

/**
 *
 * @param {number} year - in format YYYY (e.g. 2021 || 2000 || 1990 || 1095)
 * @param {number} month - the 0 is January and 11 is December e.g. 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 | 11
 * @param {DayIndiceType} firstDayOfWeek - 0 | 1 | 2 | 3 | 4 | 5 | 6 - where 0 is Sunday and 6 is Saturday (default is 1 - Monday)
 * @returns - e.g. [ 0, 1, 2, 3, 4, 5, 6 ] || [ 0, 1, 2, 3 ] || [ 0, 1, 2, 3, 4, 5 ] ...
 */
export function getFirstWeekEmptyDays(
  year: number,
  month: number,
  firstDayOfWeek: DayIndiceType = 1
) {
  const _date = new Date(year, month, 1);
  const day = _date.getDay();
  return Array.from(Array(weekDaysLookUpFactory(firstDayOfWeek)[day] - 1).keys());
}

/**
 *
 * @param {number} year - in format YYYY (e.g. 2021 || 2000 || 1990 || 1095)
 * @param {number} month - the 0 is January and 11 is December e.g. 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 | 11
 * @param {number} lastDay - the last day of the month e.g. 28 | 29 | 30 | 31
 * @param {DayIndiceType} firstDayOfWeek - 0 | 1 | 2 | 3 | 4 | 5 | 6 - where 0 is Sunday and 6 is Saturday (default is 1 - Monday)
 * @returns - e.g. [ 0, 1, 2, 3, 4, 5, 6 ] || [ 0, 1, 2, 3 ] || [ 0, 1, 2, 3, 4, 5 ] ...
 */
export function getLastWeekEmptyDays(
  year: number,
  month: number,
  lastDay: number,
  firstDayOfWeek: DayIndiceType = 1
) {
  const _date = new Date(year, month, lastDay);
  const day = _date.getDay();
  return Array.from(Array(7 - weekDaysLookUpFactory(firstDayOfWeek)[day]).keys());
}
