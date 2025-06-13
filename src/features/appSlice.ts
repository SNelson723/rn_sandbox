import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  url: string;
  key: string;
  userId: number;
}

const initialState: AppState = {
  url: '',
  key: '',
  userId: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
  }
});

export const { setUrl, setKey, setUserId } = appSlice.actions;
export default appSlice.reducer;