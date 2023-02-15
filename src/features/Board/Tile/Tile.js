import './Tile.css';
import './grape.svg';
import './orange.svg';

import { useDispatch, useSelector, } from 'react-redux';
import { selectCurrentTurn, toggleCurrentTurn } from '../../CurrentTurn/turnSlice';
import { markTile } from '../boardSlice';
import { selectWinner, } from '../../Winner/winnerSlice';

function Tile({ ownBy, tilePos }) {
    const dispatch = useDispatch();

    const currentTurn = useSelector(selectCurrentTurn)
    const winner = useSelector(selectWinner)




    function handleClick(e) {
        if (winner) return;
        if (!currentTurn || ownBy) return;
        dispatch(markTile({ tilePos, currentTurn }));
        if (!winner) {
            dispatch(toggleCurrentTurn());
        }
    }

    return (
        <div className={`Tile ${ownBy}`} onClick={handleClick}>

        </div>
    );
}

export default Tile;