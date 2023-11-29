import { createSlice } from "@reduxjs/toolkit";

interface IToggleState {
  calendar: {
    isCalendarOpen: boolean;
  };
}

const initialState: IToggleState = {
  calendar: {
    isCalendarOpen: false
  }
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleCalendar: (state) => {
      state.calendar.isCalendarOpen = !state.calendar.isCalendarOpen;
    }
  }
});

export const { toggleCalendar } = toggleSlice.actions;
