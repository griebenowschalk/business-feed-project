import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

// Import your reducers here
import navbarSlice from './slice/navbarSlice';

// Create the store
const store = configureStore({
    reducer: {
        navbar: navbarSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(thunk),
});

export default store;
