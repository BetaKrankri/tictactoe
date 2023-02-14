import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
    name: 'board',
    initialState: ['cross', '', '', '', '', '', '', '', 'circle'],
    reducers: {
        clearBoard(state, action) {
            
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
export const { clearBoard } = boardSlice.actions;

