import { createSlice } from "@reduxjs/toolkit";
import { pagesInterface } from "../utility/interfaces";

const initialState = {
  status: 0,
  text: "",
  data: [],
  total: 0,
  offsetPage: 0,
  scrollPosition: 0,
} as pagesInterface;

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    characterReducer(state, action) {
      const existingId = state.data.map((ele: any) => ele.id);
      const incomingData = action?.payload?.charData?.data;
      const filteredData = incomingData.filter((ele: any) => {
        if (!existingId.includes(ele.id)) {
          return ele;
        }
      });
      const newCharData = [...state.data, ...filteredData];
      return {
        ...state,
        text: action?.payload?.charData?.text,
        status: action?.payload?.charData?.status,
        data: newCharData,
        total: action?.payload?.charData?.total,
        offsetPage: action?.payload?.offsetPage,
        scrollPosition: action?.payload?.scrollPosition,
      };
    },
  },
});
export const charactersActions = characterSlice.actions;
