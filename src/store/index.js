import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "store/note";

export const store = configureStore({
  reducer: {
    noteSlice: noteReducer,
  },
  devTools: process.env.NODE_ENV !== "production",

});
