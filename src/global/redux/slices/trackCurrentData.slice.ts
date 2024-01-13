import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITrackCurrentDataState {
  singleFixture: {
    fixtureId: number | null;
  };
}

const initialState: ITrackCurrentDataState = {
  singleFixture: {
    fixtureId: null
  }
};

export const trackCurrentDataSlice = createSlice({
  name: "trackCurrentData",
  initialState,
  reducers: {
    setSingleFixtureId: (state, action: PayloadAction<{ fixtureId: number }>) => {
      state.singleFixture.fixtureId = action.payload.fixtureId;
    }
  }
});

export const { setSingleFixtureId } = trackCurrentDataSlice.actions;
