// Week days types
export type WeekDaysNormalType = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type WeekDaysZeroBasedType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type WeekDaysLookUpShort = {
  [key in WeekDaysZeroBasedType]: {
    dayIndex: WeekDaysZeroBasedType;
    dayString: WeekDaysStringShortType;
  }[];
};
export type WeekDaysLookUpLong = {
  [key in WeekDaysZeroBasedType]: {
    dayIndex: WeekDaysZeroBasedType;
    dayString: WeekDaysStringLongType;
  }[];
};
export type WeekDaysStringLongType =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";
export type WeekDaysStringShortType = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

// Month types
export type MonthStringsLongType =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
export type MonthStringsShortType =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sept"
  | "Oct"
  | "Nov"
  | "Dec";
export type MonthNumbersNormalType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type MonthNumbersZeroBasedType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type MonthLookUpType = {
  [Key in MonthNumbersNormalType]: MonthNumbersZeroBasedType;
};

export type DaysInMonthType = {
  yearNumber: number;
  monthNumber: MonthNumbersNormalType;
  dayNumberInMonth: NumberOfDaysInAMonthType | null;
  isWeekendDay: boolean;
};
export type WeekDaysStringType = WeekDaysStringShortType[] | WeekDaysStringLongType[];

// Date types
export type NumberOfDaysInAMonthType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;
