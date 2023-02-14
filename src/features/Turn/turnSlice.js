import { createSlice } from "@reduxjs/toolkit";

const turnSlice = createSlice({
    name: 'turn',
    initialState: 'cross',
    reducers: {
        toggleTurn(state, action) {
            state.turn = (state.turn === 'cross') ? 'circle' : 'cross';
        }
    }
});


const selectTurn = state => state.turn;
const selectIsCrossTurn = (state) => state.turn === 'cross';
const selectIsCircleTurn = (state) => state.turn !== 'cross';

export default turnSlice.reducer; //reducer
export { selectIsCircleTurn, selectIsCrossTurn, selectTurn }; //selectors
export const { toggleTurn } = turnSlice.actions; //actions