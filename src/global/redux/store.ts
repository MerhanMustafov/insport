import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countriesApiSlice } from "@/global/redux/rtkq/countries";
import { leaguesApiSlice } from "@/global/redux/rtkq/leagues";

export const store = configureStore({
  reducer: {
    [countriesApiSlice.reducerPath]: countriesApiSlice.reducer,
    [leaguesApiSlice.reducerPath]: leaguesApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApiSlice.middleware).concat(leaguesApiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
