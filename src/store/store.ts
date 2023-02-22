import { configureStore } from "@reduxjs/toolkit";
import {
  characterSlice,
  comicSlice,
  eventSlice,
  seriesSlice,
} from "./redux-slice";

export const store = configureStore({
  reducer: {
    comics: comicSlice.reducer,
    characters: characterSlice.reducer,
    events: eventSlice.reducer,
    series: seriesSlice.reducer,
  },
});
