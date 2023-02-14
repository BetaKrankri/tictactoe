import { createSlice } from '@reduxjs/toolkit';

const initialState = new Array(9).fill('');

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        clearBoard(state, action) {
            let newState = initialState;
            return newState;
        },
        markTile(state, action) {
            let currentTileOwner = state[action.payload.tilePos]
            if(!currentTileOwner) {
                state[action.payload.tilePos] = action.payload.currentTurn
            }
            return state;
        }

    }
});


// Regresa el tablero acomodades de 0 a 1
const selectBoard = (state) => state.board;

// Regresa una lista de TilesIDs que pertenecen a 'circle'
const selectCircleTilesIDs =
    (state) => {
        let circleTilesIDs = [];
        state.board.forEach(
            (tileOwn, index) => {
                if (tileOwn === 'circle') {
                    circleTilesIDs.push(index);
                }
            })
        return circleTilesIDs;
    };

// Regresa una lista de TilesIDs que pertenecen a 'cross'
const selectCrossTilesIDs =
    (state) => {
        let circleTilesIDs = [];
        state.board.forEach(
            (tileOwn, index) => {
                if (tileOwn === 'cross') {
                    circleTilesIDs.push(index);
                }
            })
        return circleTilesIDs;
    };

export default boardSlice.reducer;
export { selectBoard, selectCircleTilesIDs, selectCrossTilesIDs };
export const { clearBoard, markTile } = boardSlice.actions;

