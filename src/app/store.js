import { configureStore } from '@reduxjs/toolkit';

// Slices
// ******************
import boardReducer from '../features/Board/boardSlice.js';
import currentTurnReducer from '../features/CurrentTurn/turnSlice';
// Store creation
// *******************
export const store = configureStore({
  reducer: {
    board: boardReducer,
    currentTurn: currentTurnReducer
  }
});
