import { createSlice } from '@reduxjs/toolkit';
import { TContentComponent } from '../../types/content.types';
import { feedDemoConfig } from '../../staticcontent/dummy-data';

export interface FeedState {
    feed: TContentComponent[];
    selectedFilterItem: 'business' | 'social' | 'hr' | 'safety' | 'all';
}

const initialState: FeedState = {
    feed: feedDemoConfig,
    selectedFilterItem: 'all',
};

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        selectedFilterItemUpdate: (state, action) => {
            state.selectedFilterItem = action.payload;
            state.feed = feedDemoConfig.filter((item) => {
                return item.tag === action.payload || action.payload === 'all';
            });
        },
    },
});

export const { selectedFilterItemUpdate } = feedSlice.actions;
export default feedSlice.reducer;
