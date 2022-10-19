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
    updateNote: (state, action) => {
      state.noteList = state.noteList.map((note => {
        if (note.id.toString() === action.payload.id) {
          return action.payload
        } else return note
      }))
    },
  },
})

export const { setNoteList, addNote, removeNote, updateNote } = noteSlice.actions
export default noteSlice.reducer