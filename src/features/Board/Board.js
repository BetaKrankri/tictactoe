// Estilos
import './Board.css';
// Redux & React
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// Slices
import { selectBoard, selectCircleTilesIDs, selectCrossTilesIDs } from './boardSlice';
import { selectWinner, setWinner, WINNER_COMBO } from '../Winner/winnerSlice';
// Components
import Tile from './Tile/Tile.js';


function Board(props) {
    const dispatch = useDispatch();

    const board = useSelector(selectBoard);
    const winner = useSelector(selectWinner);
    const crossTilesIDs = useSelector(selectCrossTilesIDs);
    const circleTilesIDs = useSelector(selectCircleTilesIDs);

    function isWinnerMove(playerPositions) {
        return WINNER_COMBO.some(combo => combo.every(tilePos => playerPositions.includes(tilePos)))
    }

    useEffect(() => {
        if(isWinnerMove(crossTilesIDs)){
            dispatch(setWinner('cross'))
        }
    }, [crossTilesIDs, dispatch]);

    useEffect(() => {
        if(isWinnerMove(circleTilesIDs)){
            dispatch(setWinner('circle'))
        }
    }, [circleTilesIDs, dispatch]);



    const renderTiles = () => {
        return board.map((ownership, index) =>
            <Tile ownBy={ownership} key={index} tilePos={index} />)
    }

    return (
        <div className='GameBoard' data-winner={winner}>
            {renderTiles()}
        </div>
    );
}



export default Board;