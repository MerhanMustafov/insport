import { createSlice } from "@reduxjs/toolkit";

interface IToggleState {
  calendar: {
    isCalendarOpen: boolean;
  };
  burgerMenu: {
    isCountriesAndLeaguesOpen: boolean;
  };
  singleFixture: {
    isSingleFixtureModalOpen: boolean;
  };
}

const initialState: IToggleState = {
  calendar: {
    isCalendarOpen: false
  },
  burgerMenu: {
    isCountriesAndLeaguesOpen: false
  },
  singleFixture: {
    isSingleFixtureModalOpen: false
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
    },
    toggleSingleFixtureModal: (state) => {
      state.singleFixture.isSingleFixtureModalOpen = !state.singleFixture.isSingleFixtureModalOpen;
    },
    closeSingleFixtureModal: (state) => {
      state.singleFixture.isSingleFixtureModalOpen = false;
    }
  }
});

export const {
  toggleCalendar,
  toggleCountriesAndLeaguesOpen,
  closeCountriesAndLeaguesOpen,
  toggleSingleFixtureModal,
  closeSingleFixtureModal
} = toggleSlice.actions;
