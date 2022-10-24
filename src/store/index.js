import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "store/notes/notes-slice";

export const store = configureStore({
  reducer: {
    notesSlice: notesReducer,
  },
});
