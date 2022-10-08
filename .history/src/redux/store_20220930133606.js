import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { sha }
export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
