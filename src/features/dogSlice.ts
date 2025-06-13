import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Breed } from "../types";

export interface DogState {
  url: string;
  breeds: Breed[];
}

const initialState: DogState = {
  url: "",
  breeds: [],
};

const dogSlice = createSlice({
  name: "dog",
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setBreeds: (state, action: PayloadAction<Breed[]>) => {
      state.breeds = action.payload;
    },
    addBreed: (state, action: PayloadAction<Breed>) => {
      state.breeds.push(action.payload);
    },
    removeBreed: (state, action: PayloadAction<string>) => {
      state.breeds = state.breeds.filter(
        (breed) => breed.id !== action.payload
      );
    },
    clearBreeds: (state) => {
      state.breeds = [];
    },
  },
});

export const {
  setUrl,
  setBreeds,
  addBreed,
  removeBreed,
  clearBreeds,
} = dogSlice.actions;
export default dogSlice.reducer;