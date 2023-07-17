import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		categories: [],
	},
	reducers: {
		getCategories: (state, action) => {
			state.categories = action.payload.categories.items;
		},
	},
});

export const { getCategories } = searchSlice.actions;
export default searchSlice.reducer;
