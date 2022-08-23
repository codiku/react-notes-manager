import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    postList: []
  },
  reducers: {
    setPostList: (state) => {
      state.postList = []
    },

    addPost: (state, action) => {
      state.postList = [...state.postList, action.payload]
    },
  },
})

export const { setPostList, addPost } = postSlice.actions
export default postSlice.reducer