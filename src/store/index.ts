import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    app: appReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;