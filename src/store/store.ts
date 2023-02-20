import { configureStore } from "@reduxjs/toolkit";
import { comicSlice, creatorsSlice } from "./comic-slice";
export const store = configureStore({
  reducer: { comic: comicSlice.reducer, creators: creatorsSlice.reducer },
});
