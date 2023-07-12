import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
	name: 'song',
	initialState: {
		genres: [],
	},
	reducers: {
		getGenres: (state, action) => {
			state.genres = action.payload.genres;
		},
	},
});

export const { getGenres } = songSlice.actions;
export default songSlice.reducer;
