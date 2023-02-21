import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./characters-slice";
import { comicSlice } from "./comic-slice";
import { eventSlice } from "./event-slice";
import { seriesSlice } from "./series-slice";
export const store = configureStore({
  reducer: {
    comics: comicSlice.reducer,
    characters: characterSlice.reducer,
    events: eventSlice.reducer,
    series: seriesSlice.reducer,
  },
});
