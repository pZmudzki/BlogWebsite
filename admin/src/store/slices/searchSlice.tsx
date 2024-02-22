import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
  input: String;
};

const initialState: SearchState = {
  input: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<String>) {
      state.input = action.payload;
    },
  },
});

export const { setInput } = searchSlice.actions;
