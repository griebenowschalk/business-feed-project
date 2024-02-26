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

/**
 * The feed slice to handle the feed state and actions
 */
const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        searchFeedUpdate: (state, action) => {
            state.feed = feedDemoConfig.filter((item) => {
                const searchValue: string = action.payload.toLowerCase();
                return (
                    item.title.toLowerCase().includes(searchValue) ||
                    item.author?.toLowerCase().includes(searchValue) ||
                    action.payload === ''
                );
            });
        },
        selectedFilterItemUpdate: (state, action) => {
            state.selectedFilterItem = action.payload;
            state.feed = feedDemoConfig.filter((item) => {
                return item.tag === action.payload || action.payload === 'all';
            });
        },
    },
});

export const { selectedFilterItemUpdate, searchFeedUpdate } = feedSlice.actions;
export default feedSlice.reducer;
