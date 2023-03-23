import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "store/notes/notes-slice";
import { authReducer } from "store/auth/auth-slice";
export const store = configureStore({
  reducer: {
    notesSlice: notesReducer,
    authSlice: authReducer,
  },
});
