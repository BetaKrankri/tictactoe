import { createSlice } from "@reduxjs/toolkit";

const currentTurnSlice = createSlice({
    name: 'currentTurn',
    initialState: '',
    reducers: {
        toggleCurrentTurn(state) {
            let newS;
            if (!state) {
                newS = flipCoin()
            } else {
                newS = state === 'cross' ? 'circle' : 'cross'
            }
            return newS;
        },
        resetTurn(state) {
            return '';
        }
    }
})

function flipCoin() {
    return (Math.round(Math.random()) > 0.5) ? 'cross' : 'circle';
};

export const selectCurrentTurn = state => state.currentTurn;
export const selectIsCrossTurn = state => state.currentTurn === 'cross'

export const { toggleCurrentTurn, resetTurn } = currentTurnSlice.actions
export default currentTurnSlice.reducer;