import { createSlice } from "@reduxjs/toolkit";

const currentTurnSlice = createSlice({
    name: 'currentTurn',
    initialState: 'cross',
    reducers: {
        toggleCurrentTurn(state) {
            let newS = state === 'cross' ? 'circle' : 'cross';
            return newS;
        }
    }
})

export const selectCurrentTurn = state => state.currentTurn;

export const { toggleCurrentTurn } = currentTurnSlice.actions
export default currentTurnSlice.reducer;