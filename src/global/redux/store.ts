import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countriesApiSlice } from "@/global/redux/rtkq/countries";
import { leaguesApiSlice } from "@/global/redux/rtkq/leagues";
import { calendarSlice } from "@/global/redux/slices/calendar.slice";
import { toggleSlice } from "@/global/redux/slices/toggle.slice";

export const store = configureStore({
  reducer: {
    // RTK Query
    [countriesApiSlice.reducerPath]: countriesApiSlice.reducer,
    [leaguesApiSlice.reducerPath]: leaguesApiSlice.reducer,
    // RTK
    [calendarSlice.name]: calendarSlice.reducer,
    [toggleSlice.name]: toggleSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApiSlice.middleware).concat(leaguesApiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
