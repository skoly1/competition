import { createSlice } from "@reduxjs/toolkit";
import { charsState } from "../utility/interfaces";

const initialState = {
  status: 0,
  text: "",
  data: [],
  total: 0,
  offsetPage: 0,
} as charsState;

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    characterReducer(state, action) {
      return {
        ...state,
        text: action?.payload?.charData?.text,
        status: action?.payload?.charData?.status,
        data: [...state?.data, ...action?.payload?.charData?.data],
        total: action?.payload?.charData?.total,
        offsetPage: action?.payload?.offsetPage,
      };
    },
  },
});
export const charactersActions = characterSlice.actions;
