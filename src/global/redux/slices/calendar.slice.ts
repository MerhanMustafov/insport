import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  DaysInMonthType,
  MonthNumbersNormalType,
  NumberOfDaysInAMonthType,
  WeekDaysStringType,
  WeekDaysZeroBasedType
} from "@/lib/calendar/calendar.types";
import { getDaysInMonth } from "@/lib/calendar/calendar.utils";

interface CalendarStateType {
  currentYear: number;
  selectedYear: number;
  selectedMonth: MonthNumbersNormalType;
  selectedDayOfTheMonth: NumberOfDaysInAMonthType | -1;
  firstDayOfWeek: WeekDaysZeroBasedType;
  weekDaysStrings: WeekDaysStringType;
  daysInMonth: DaysInMonthType[];
  // !!! THIS is the date that will be use when making api calls
  // !!! This is the date that will determin which day is selected in the calendar
  // activeDate is the date that is clicked by the user and wil be set one of two times:
  // 1. when the calendar is initialized (in this case the date is the current date (today)))
  // 2. when the user clicks on a day in the calendar
  activeDate: {
    activeYear: number;
    activeMonth: MonthNumbersNormalType;
    activeDay: NumberOfDaysInAMonthType;
  };
}

const currentDate = new Date();
const initialState: CalendarStateType = {
  currentYear: currentDate.getFullYear(),
  selectedYear: currentDate.getFullYear(),
  selectedMonth: (currentDate.getMonth() + 1) as MonthNumbersNormalType,
  selectedDayOfTheMonth: currentDate.getDate() as NumberOfDaysInAMonthType,
  firstDayOfWeek: 1, // 0 is Sunday and 6 is Saturday (default is 1 - Monday)

  activeDate: {
    activeYear: currentDate.getFullYear(),
    activeMonth: (currentDate.getMonth() + 1) as MonthNumbersNormalType,
    activeDay: currentDate.getDate() as NumberOfDaysInAMonthType
  },

  weekDaysStrings: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  daysInMonth: []
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setInitialCalendarData(
      state,
      action: PayloadAction<{ date: Date; firstDayOfTheWeek?: WeekDaysZeroBasedType }>
    ) {
      const { date, firstDayOfTheWeek } = action.payload;

      const firstWeekDay =
        firstDayOfTheWeek !== undefined && (firstDayOfTheWeek >= 0 || firstDayOfTheWeek <= 6)
          ? firstDayOfTheWeek
          : 1;

      state.selectedYear = date.getFullYear();
      state.selectedMonth = (date.getMonth() + 1) as MonthNumbersNormalType;
      state.selectedDayOfTheMonth = date.getDate() as NumberOfDaysInAMonthType;
      state.firstDayOfWeek = firstWeekDay;
      state.activeDate = {
        activeYear: date.getFullYear(),
        activeMonth: (date.getMonth() + 1) as MonthNumbersNormalType,
        activeDay: date.getDate() as NumberOfDaysInAMonthType
      };

      const { weekDaysStrings, daysInMonth } = getDaysInMonth(
        state.selectedYear,
        state.selectedMonth,
        firstWeekDay
      );

      state.weekDaysStrings = weekDaysStrings;
      state.daysInMonth = daysInMonth;
    },
    setFirstDayOfWeek(state, action: PayloadAction<WeekDaysZeroBasedType>) {
      state.firstDayOfWeek = action.payload;
    },
    setSelectedYear(state, action: PayloadAction<number>) {
      state.selectedYear = action.payload;
    },
    setSelectedMonth(state, action: PayloadAction<MonthNumbersNormalType>) {
      state.selectedMonth = action.payload;
    },
    setSelectedDayOfTheMonth(state, action: PayloadAction<NumberOfDaysInAMonthType | -1>) {
      state.selectedDayOfTheMonth = action.payload;
      state.activeDate = {
        activeYear: state.selectedYear,
        activeMonth: state.selectedMonth,
        activeDay: action.payload as NumberOfDaysInAMonthType
      };
    },
    updateCalendarData(state) {
      const { weekDaysStrings, daysInMonth } = getDaysInMonth(
        state.selectedYear,
        state.selectedMonth,
        state.firstDayOfWeek
      );

      state.weekDaysStrings = weekDaysStrings;
      state.daysInMonth = daysInMonth;
    }
  }
});

export const {
  setInitialCalendarData,
  setFirstDayOfWeek,
  setSelectedYear,
  setSelectedMonth,
  setSelectedDayOfTheMonth,
  updateCalendarData
} = calendarSlice.actions;
