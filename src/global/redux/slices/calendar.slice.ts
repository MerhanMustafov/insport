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
  today: {
    todayYear: number;
    todayMonth: MonthNumbersNormalType;
    todayDay: NumberOfDaysInAMonthType;
  };
  yesterday: {
    yesterdayYear: number;
    yesterdayMonth: MonthNumbersNormalType;
    yesterdayDay: NumberOfDaysInAMonthType;
  };
  tomorrow: {
    tomorrowYear: number;
    tomorrowMonth: MonthNumbersNormalType;
    tomorrowDay: NumberOfDaysInAMonthType;
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
  today: {
    todayYear: currentDate.getFullYear(),
    todayMonth: (currentDate.getMonth() + 1) as MonthNumbersNormalType,
    todayDay: currentDate.getDate() as NumberOfDaysInAMonthType
  },
  yesterday: {
    yesterdayYear: currentDate.getFullYear(),
    yesterdayMonth: (currentDate.getMonth() + 1) as MonthNumbersNormalType,
    yesterdayDay: (currentDate.getDate() - 1) as NumberOfDaysInAMonthType
  },
  tomorrow: {
    tomorrowYear: currentDate.getFullYear(),
    tomorrowMonth: (currentDate.getMonth() + 1) as MonthNumbersNormalType,
    tomorrowDay: (currentDate.getDate() + 1) as NumberOfDaysInAMonthType
  },

  weekDaysStrings: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  daysInMonth: []
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setInitialCalendarData(state) {
      // this sets the calendar initial body data and does it inside the  calendar itself
      const { weekDaysStrings, daysInMonth } = getDaysInMonth(
        state.selectedYear,
        state.selectedMonth,
        state.firstDayOfWeek
      );

      state.weekDaysStrings = weekDaysStrings;
      state.daysInMonth = daysInMonth;
    },
    updateCalendarData(state) {
      // this is used only when the user clicks year or month in the calendar header
      // first is beeing set the new year and month and then the calendar body is updated
      const { weekDaysStrings, daysInMonth } = getDaysInMonth(
        state.selectedYear,
        state.selectedMonth,
        state.firstDayOfWeek
      );

      state.weekDaysStrings = weekDaysStrings;
      state.daysInMonth = daysInMonth;
    },
    setNewCalendarDate(
      state,
      action: PayloadAction<{
        year: number;
        month: MonthNumbersNormalType;
        day: NumberOfDaysInAMonthType;
      }>
    ) {
      // this is used only when the user clicks on a day in the calendar body
      state.selectedYear = action.payload.year;
      state.selectedMonth = action.payload.month;
      state.selectedDayOfTheMonth = action.payload.day;
      state.activeDate = {
        activeYear: action.payload.year,
        activeMonth: action.payload.month,
        activeDay: action.payload.day
      };
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
    }
  }
});

export const {
  setInitialCalendarData,
  updateCalendarData,
  setNewCalendarDate,
  setFirstDayOfWeek,
  setSelectedYear,
  setSelectedMonth,
  setSelectedDayOfTheMonth
} = calendarSlice.actions;
