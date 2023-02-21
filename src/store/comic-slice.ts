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

export const comicSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    ComicReducer(state, action) {
      const existingId = state.data.map((ele: any) => ele.id);
      const incomingData = action?.payload?.comicData?.data;
      const filteredData = incomingData.filter((ele: any) => {
        if (!existingId.includes(ele.id)) {
          return ele;
        }
      });
      const newComicData = [...state.data, ...filteredData];

      return {
        ...state,
        text: action?.payload?.comicData?.text,
        status: action?.payload?.comicData?.status,
        data: newComicData,
        total: action?.payload?.comicData?.total,
        offsetPage: action?.payload?.offsetPage,
        scrollPosition: action?.payload?.scrollPosition,
      };
    },
  },
});
export const comicActions = comicSlice.actions;
