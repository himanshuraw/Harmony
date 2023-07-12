import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: {},
		token: '',
	},
	reducers: {
		getData: (state, action) => {
			state.data = action.payload;
		},
		getToken: (state, action) => {
			state.token = action.payload;
		},
	},
});

export const { getData, getToken } = userSlice.actions;
export default userSlice.reducer;
