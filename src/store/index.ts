import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import ThemeCustomize from "./reducers/ThemeCustomize";
import AuthReducers from "@/store/auth";
import TourReducers from "@/store/tours";

export const store = configureStore({
  reducer: {
    ThemeCustomize,
    AuthReducers,
    TourReducers,
  },
  devTools: true,
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
