import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "store/slices/note-slice";
import { noteAPI } from "store/api/note-api";

export const store = configureStore({
  reducer: {
    noteSlice: noteReducer,
    [noteAPI.reducerPath]: noteAPI.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteAPI.middleware),
});
