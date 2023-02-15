import { createSlice } from '@reduxjs/toolkit';

const WINNER_COMBO = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const winnerSlice = createSlice({
    name: 'winner',
    initialState: '',
    reducers: {
        setWinner(state, action) {
            return action.payload;
        },
        clearWinner (state) {
            return '';
        }
    }
})

const selectWinner = state => state.winner;

export default winnerSlice.reducer;
export const { setWinner, clearWinner } = winnerSlice.actions;
export { selectWinner, WINNER_COMBO };