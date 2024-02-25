import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Filter } from "lucide-react";

type SearchState = {
  input: String;
  filters: String[];
};

export const POSSIBLE_FILTERS = [
  "Wierszem pisane",
  "Scenariuse pisane życiem",
  "Z medycznego punktu widzenia",
  "Taniec",
];

const initialState: SearchState = {
  input: "",
  filters: [
    "Wierszem pisane",
    "Scenariuse pisane życiem",
    "Z medycznego punktu widzenia",
    "Taniec",
  ],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<String>) {
      state.input = action.payload;
    },
    setFilters(state, action: PayloadAction<String>) {
      if (state.filters.includes(action.payload)) {
        const newFilters = state.filters.filter(
          (filter) => filter !== action.payload
        );
        state.filters = newFilters;
      } else {
        state.filters.push(action.payload);
      }
    },
  },
});

export const { setInput, setFilters } = searchSlice.actions;
