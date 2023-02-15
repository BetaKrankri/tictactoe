import { createSlice } from "@reduxjs/toolkit";

const currentTurnSlice = createSlice({
    name: 'currentTurn',
    initialState: '',
    reducers: {
        setTurn(state, action) {
            state = action.payload;
            return state;
        },
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
        },
        randomTurn(state){
            let newState = flipCoin();
            return newState;
        }
    }
})

function flipCoin() {
    return (Math.round(Math.random()) > 0.5) ? 'cross' : 'circle';
};

export const selectCurrentTurn = state => state.currentTurn;
export const selectIsCrossTurn = state => state.currentTurn === 'cross'

export const { toggleCurrentTurn, resetTurn, randomTurn, setTurn } = currentTurnSlice.actions
export default currentTurnSlice.reducer;