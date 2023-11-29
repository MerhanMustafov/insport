import {
  DaysInMonthType,
  MonthNumbersNormalType,
  NumberOfDaysInAMonthType,
  WeekDaysStringType,
  WeekDaysZeroBasedType
} from "@/lib/calendar/calendar.types";
import {
  getArrayOfWeekDaysStringShort,
  getFirstWeekEmptyDays,
  getLastWeekEmptyDays
} from "@/lib/calendar/week/week.utils";

/**
 * @Description This is the main function that gets data for for a month.
 * It returns an object with daysInMonth and weekDayStrings.
 * The daysInMonth is an array of objects with month, date and isWeekend.
 * The weekDayStrings is an array of strings with the names of the days of the week.
 *
 * And with this data you can render a calendar body for a given month.
 *
 * Or more specifically, it gives you the data for the calendar body
 * which you can use to create a calendar like this:
 *
 * If the first day of the week is Monday (in Js Date object 1 is Monday)
 * [ [  Mon  ] [  Tue  ] [  Wed  ] [  Thu  ] [  Fri  ] [  Sat  ] [  Sun  ] ]
 * [ [       ] [       ] [       ] [   1   ] [   2   ] [   3   ] [   4   ] ]
 * [ [   5   ] [   6   ] [   7   ] [   8   ] [   9   ] [  10   ] [  11   ] ]
 * [ [  12   ] [  13   ] [  14   ] [  15   ] [  16   ] [  17   ] [  18   ] ]
 * [ [  19   ] [  20   ] [  21   ] [  22   ] [  23   ] [  24   ] [  25   ] ]
 * [ [  26   ] [  27   ] [  28   ] [  29   ] [  30   ] [  31   ] [       ] ]
 *
 *
 * Or if the first day of the week in Sunday (in Js Date object 0 is Sunday)
 * [ [  Sun  ] [  Mon  ] [  Tue  ] [  Wed  ] [  Thu  ] [  Fri  ] [  Sat  ] ]
 * [ [       ] [       ] [       ] [       ] [   1   ] [   2   ] [   3   ] ]
 * [ [   4   ] [   5   ] [   6   ] [   7   ] [   8   ] [   9   ] [  10   ] ]
 * [ [  11   ] [  12   ] [  13   ] [  14   ] [  15   ] [  16   ] [  17   ] ]
 * [ [  18   ] [  19   ] [  20   ] [  21   ] [  22   ] [  23   ] [  24   ] ]
 * [ [  25   ] [  26   ] [  27   ] [  28   ] [  29   ] [  30   ] [  31   ] ]
 *
 * Or if the first day of the week in Saturday (in Js Date object 6 is Saturday)
 * [ [  Sat  ] [  Sun  ] [  Mon  ] [  Tue  ] [  Wed  ] [  Thu  ] [  Fri  ] ]
 * [ [       ] [       ] [       ] [       ] [       ] [   1   ] [   2   ] ]
 * [ [   3   ] [   4   ] [   5   ] [   6   ] [   7   ] [   8   ] [   9   ] ]
 * [ [  10   ] [  11   ] [  12   ] [  13   ] [  14   ] [  15   ] [  16   ] ]
 * [ [  17   ] [  18   ] [  19   ] [  20   ] [  21   ] [  22   ] [  23   ] ]
 * [ [  24   ] [  25   ] [  26   ] [  27   ] [  28   ] [  29   ] [  30   ] ]
 * [ [  31   ] [       ] [       ] [       ] [       ] [       ] [       ] ]
 *
 * Or if the first day of the week in Friday (in Js Date object 5 is Friday)
 * [ [  Fri  ] [  Sat  ] [  Sun  ] [  Mon  ] [  Tue  ] [  Wed  ] [  Thu  ] ]
 * [ [       ] [       ] [       ] [       ] [       ] [       ] [   1   ] ]
 * [ [   2   ] [   3   ] [   4   ] [   5   ] [   6   ] [   7   ] [   8   ] ]
 * [ [   9   ] [  10   ] [  11   ] [  12   ] [  13   ] [  14   ] [  15   ] ]
 * [ [  16   ] [  17   ] [  18   ] [  19   ] [  20   ] [  21   ] [  22   ] ]
 * [ [  23   ] [  24   ] [  25   ] [  26   ] [  27   ] [  28   ] [  29   ] ]
 * [ [  30   ] [  31   ] [       ] [       ] [       ] [       ] [       ] ]
 *
 * ...
 *
 * @param {number} year - in format YYYY (e.g. 2021 || 2000 || 1990 || 1095)
 * @param {number} month - the 1 is January and 12 is December. e.g. 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |11 | 12
 * But because of JS Date object the month passed outside as argument is then temporarely subtracted by 1 inside the function in order to get the right month number.
 *
 * What you pass as argument month is 1 to 12 (the normal months)
 * but inside the function it is transformed from 0 to 11 ( or in ather words subtracted by 1 because of the JS Date object)
 * and then the return value is once again transformed into normal months from 1 to 12 (added 1).
 * To summarize, you pass normal month numbers (1 to 12) and get back normal month numbers (1 to 12).
 * @param {WeekDaysZeroBasedType} firstDayOfWeek - 0 | 1 | 2 | 3 | 4 | 5 | 6 - where 0 is Sunday and 6 is Saturday (default is 1 - Monday)
 * @returns an object with
 * @key daysInMonth - e.g. [{monthNumber: 1, dayNumberInMonth: 1, isWeekendDay: false}, {monthNumber: 1, dayNumberInMonth: 2, isWeekendDay: true}, ...]
 * and
 * @key weekDayStrings - e.g. ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] || ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon']
 *
 * @example getDaysInMonth(2021, 1, 1) // returns {
 *    daysInMonth: [
 *        {monthNumber: 1, dayNumberInMonth: 1, isWeekendDay: false},
 *        {monthNumber: 1, dayNumberInMonth: 2, isWeekendDay: true},
 *        {monthNumber: 1, dayNumberInMonth: 3, isWeekendDay: true},
 *        {monthNumber: 1, dayNumberInMonth: 4, isWeekendDay: false},
 *        ...
 *    ],
 *    weekDayStrings: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
 *  }
 *
 */
export function getDaysInMonth(
  year: number,
  month: MonthNumbersNormalType,
  firstDayOfWeek: WeekDaysZeroBasedType = 1
): { daysInMonth: DaysInMonthType[]; weekDaysStrings: WeekDaysStringType } {
  // month should be subtacted by 1 because of the JS Date object when passing it to the Date constructor
  const _date = new Date(year, month - 1, 1);

  const daysInMonth: DaysInMonthType[] = [];
  let totalDay = 0;

  // month should be subtacted by 1 inside the while condition because of the JS Date object
  while (_date.getMonth() === month - 1) {
    const isWeekendDay = _date.getDay() === 0 || _date.getDay() === 6;
    const dayNumberInMonth = _date.getDate() as NumberOfDaysInAMonthType;
    // month should be added 1 so the returned month is normal
    daysInMonth.push({ yearNumber: year, monthNumber: month, dayNumberInMonth, isWeekendDay });
    totalDay += 1;
    _date.setDate(_date.getDate() + 1);
  }
  const weekDaysStrings = getArrayOfWeekDaysStringShort(firstDayOfWeek);

  // the month passed is the normal month so inside the function it should onece again be subtracted by 1
  getFirstWeekEmptyDays(year, month, firstDayOfWeek).forEach(() =>
    daysInMonth.unshift({
      yearNumber: year,
      monthNumber: month,
      dayNumberInMonth: null,
      isWeekendDay: false
    })
  );

  // the month passed is the normal month so inside the function it should onece again be subtracted by 1
  getLastWeekEmptyDays(year, month, totalDay, firstDayOfWeek).forEach(() =>
    daysInMonth.push({
      yearNumber: year,
      monthNumber: month,
      dayNumberInMonth: null,
      isWeekendDay: false
    })
  );

  return { daysInMonth, weekDaysStrings };
}

/**
 *
 * @param {number} year - format YYYY (e.g. 2021 || 2000 || 1990 || 1095)
 * @param {number} month - the 1 is January and 12 is December. e.g. 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |11 | 12
 * @param {number} day - the day of the month (1 to 31)
 * @param {string} delimiter - default is "/" but you can pass any delimiter you want
 * @returns - e.g. "2021/01/01" || "2021-01-01" || "2021.01.01" || "2021 01 01"
 *
 * @example getFormatedDateYYYYMMDD(2021, 1, 1) // returns "2021/01/01"
 * @example getFormatedDateYYYYMMDD(2021, 1, 1, "-") // returns "2021-01-01"
 */
export function getFormatedDateYYYYMMDD(
  year: number,
  month: MonthNumbersNormalType,
  day: NumberOfDaysInAMonthType,
  delimiter = "/"
) {
  const dayNumber = day < 10 ? `0${day}` : day;
  const monthNumber = month < 10 ? `0${month}` : month;
  const yearNumber = year;
  return `${yearNumber}${delimiter}${monthNumber}${delimiter}${dayNumber}`;
}

/**
 * @Description This function returns an object with year, month and day destructured from a date string.
 *
 * @Coution - when passing the date string you should now what is the delimiter (e.g. "/" or "-" or "." or " ")
 * and pass it as second argument to the function if it is not "/" (the defaut delimiter)
 *
 * @param date - e.g. "2021/01/01" || "2021-01-01" || "2021.01.01" || "2021 01 01"
 * @param delimiter - default is "/" but you can pass any delimiter you want
 * @returns - e.g. { year: 2021, month: 1, day: 1 }
 *
 * @example getDestructuredDateFromString("2021/01/01") // returns { year: 2021, month: 1, day: 1 }
 * @example getDestructuredDateFromString("2021-01-01", "-") // returns { year: 2021, month: 1, day: 1 }
 *
 *
 */
export function getDestructuredDateFromString(date: string, delimiter = "/") {
  const [year, month, day] = date.split(delimiter);
  const yyyy: number = parseInt(year);
  const mm: MonthNumbersNormalType = parseInt(month) as MonthNumbersNormalType;
  const dd: NumberOfDaysInAMonthType = parseInt(day) as NumberOfDaysInAMonthType;
  return { year: yyyy, month: mm, day: dd };
}
