import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./characters-slice";
import { comicSlice } from "./comic-slice";
export const store = configureStore({
  reducer: { comic: comicSlice.reducer, characters: characterSlice.reducer },
});
