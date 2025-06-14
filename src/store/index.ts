import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import dogReducer from "../features/dogSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    app: appReducer,
    dog: dogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;