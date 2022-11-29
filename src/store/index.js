import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./note/note-slice";

export const store = configureStore({
  reducer: {
    NOTE: noteReducer,
  },
});
