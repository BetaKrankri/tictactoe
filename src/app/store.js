import { configureStore } from '@reduxjs/toolkit';

// Slices
// ******************
import boardReducer from '../features/Board/boardSlice.js'
import turnReducer from '../features/Turn/turnSlice.js';

// Store creation
// *******************
export const store = configureStore({
  reducer: {
    board: boardReducer,
    turn: turnReducer
  }
});
