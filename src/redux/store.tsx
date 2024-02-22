import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

// Import your reducers here
import navbarReducer from './reducers/navbarReducer';

// Create the store
const store = configureStore({
    reducer: {
        navbar: navbarReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(thunk),
});

export default store;
