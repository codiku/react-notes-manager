import { configureStore, combineReducers } from '@reduxjs/toolkit'
import noteReducer from './note-slice'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    noteSlice: noteReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

