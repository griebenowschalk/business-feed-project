import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

// Import your reducers here
import navbarSlice from './slice/navbarSlice';
import feedSlice from './slice/feedSlice';

// Create the store
const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        feed: feedSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(thunk),
});

export default store;
