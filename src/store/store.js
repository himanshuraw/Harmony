import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import songSlice from './songSlice';
import searchSlice from './searchSlice';

export default configureStore({
	reducer: {
		user: userSlice,
		song: songSlice,
		search: searchSlice,
	},
});
