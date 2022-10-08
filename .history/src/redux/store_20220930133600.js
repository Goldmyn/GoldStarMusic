import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import 
export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
