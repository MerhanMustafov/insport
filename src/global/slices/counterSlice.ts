import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  count: number;
}

const initialState: InitialState = {
  count: 0
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementBy: (state, action: PayloadAction<{ amount: number }>) => {
      state.count += action.payload.amount;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

export const { increment, decrement, reset, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;
