import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import songSlice from './songSlice';

export default configureStore({
	reducer: {
		user: userSlice,
		song: songSlice,
	},
});
