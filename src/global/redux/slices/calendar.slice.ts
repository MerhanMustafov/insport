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
  selectedYear: number;
  selectedMonth: MonthNumbersNormalType;
  selectedDayOfTheMonth: NumberOfDaysInAMonthType | -1;
  firstDayOfWeek: WeekDaysZeroBasedType;
  weekDaysStrings: WeekDaysStringType;
  daysInMonth: DaysInMonthType[];
}

const currentDate = new Date();
const initialState: CalendarStateType = {
  selectedYear: currentDate.getFullYear(),
  selectedMonth: (currentDate.getMonth() + 1) as MonthNumbersNormalType,
  selectedDayOfTheMonth: currentDate.getDate() as NumberOfDaysInAMonthType,
  firstDayOfWeek: 1, // 0 is Sunday and 6 is Saturday (default is 1 - Monday)

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
