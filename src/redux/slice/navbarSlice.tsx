import { createSlice } from '@reduxjs/toolkit';
import { NavDrawerItem } from '../../types/navBar.types';
import { findURLRelatingDrawerItem } from '../../helpers/navigationHelper';

export interface NavbarState {
    selectedDrawerItem: NavDrawerItem;
}

const initialState: NavbarState = {
    selectedDrawerItem: findURLRelatingDrawerItem(window.location.pathname),
};

/**
 * The navbar slice to handle the navbar state and actions
 */
const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        selectedDrawerItemUpdate: (state, action) => {
            state.selectedDrawerItem = action.payload;
        },
    },
});

export const { selectedDrawerItemUpdate } = navbarSlice.actions;
export default navbarSlice.reducer;
