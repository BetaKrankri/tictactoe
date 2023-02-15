import { configureStore } from '@reduxjs/toolkit';

// Slices
// ******************
import boardReducer from '../features/Board/boardSlice.js';
import currentTurnReducer from '../features/CurrentTurn/turnSlice';
import winnerReducer from '../features/Winner/winnerSlice.js';
// Store creation
// *******************
export const store = configureStore({
  reducer: {
    board: boardReducer,
    currentTurn: currentTurnReducer,
    winner: winnerReducer
  }
});
