import { createSlice } from "@reduxjs/toolkit";

export const comicSlice = createSlice({
  name: "comic",
  initialState: { status: "", data: [], text: "" },
  reducers: {
    Replace(state, action) {
      const existingComicData = [...state.data];
      const filteredData = new Set(state.data.concat(action.payload.data));
      console.log(filteredData);
      const newData = Array.from(filteredData);
      console.log(newData);

      return { ...action.payload, data: newData };
      // return {...[...state.data, ...action.payload.data]}
    },
  },
});
export const comicActions = comicSlice.actions;
export const creatorsSlice = createSlice({
  name: "creator",
  initialState: { status: "", data: [], text: "" },
  reducers: {
    Replace(state, action) {
      return { ...state, ...action.payload };
    },
  },
});
export const creatorActions = creatorsSlice.actions;
