import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/userSlice';

const store = configureStore({
    reducer: {
      users: usersReducer,
    },
  });

export default store