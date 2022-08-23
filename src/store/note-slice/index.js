import { createSlice } from '@reduxjs/toolkit'

export const noteSlice = createSlice({
  name: 'noteSlice',
  initialState: {
    noteList: []
  },
  reducers: {
    setNoteList: (state, action) => {
      state.noteList = action.payload
    },
    addNote: (state, action) => {
      state.noteList.push(action.payload)
    },
    removeNote: (state, action) => {
      state.noteList = state.noteList.filter(note => note.id !== action.payload.id)
    },
  },
})

export const { setNoteList, addNote, removeNote } = noteSlice.actions
export default noteSlice.reducer