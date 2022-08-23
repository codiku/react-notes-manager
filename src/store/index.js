import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postSlice from './post-slice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const rootPersistConfig = {
    key: 'root',
    storage,
    // What slices do we want to persist ?
    whitelist: ['postSlice']
}

const rootReducer = combineReducers({
    postSlice
})

export const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistantStore = persistStore(store)
