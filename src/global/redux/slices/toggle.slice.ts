import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IToggleState {
  calendar: {
    isCalendarOpen: boolean;
  };
  burgerMenu: {
    isCountriesAndLeaguesOpen: boolean;
  };
}

const initialState: IToggleState = {
  calendar: {
    isCalendarOpen: false
  },
  burgerMenu: {
    isCountriesAndLeaguesOpen: false
  }
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleCalendar: (state) => {
      state.calendar.isCalendarOpen = !state.calendar.isCalendarOpen;
    },
    toggleCountriesAndLeaguesOpen: (state) => {
      state.burgerMenu.isCountriesAndLeaguesOpen = !state.burgerMenu.isCountriesAndLeaguesOpen;
    },
    closeCountriesAndLeaguesOpen: (state) => {
      state.burgerMenu.isCountriesAndLeaguesOpen = false;
    }
  }
});

export const { toggleCalendar, toggleCountriesAndLeaguesOpen, closeCountriesAndLeaguesOpen } =
  toggleSlice.actions;
