import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

// Import your reducers here
import navbarReducer from './reducers/navbarReducer';

// Create the store
const store = configureStore({
    reducer: {
        navbar: navbarReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
