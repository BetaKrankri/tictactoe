import './Tile.css';

import { useDispatch, useSelector, } from 'react-redux';
import { selectCurrentTurn, toggleCurrentTurn } from '../../CurrentTurn/turnSlice';
import { markTile, selectCircleTilesIDs, selectCrossTilesIDs } from '../boardSlice';
import { selectWinner, setWinner, WINNER_COMBO } from '../../Winner/winnerSlice';

function Tile({ ownBy, tilePos }) {
    const dispatch = useDispatch();

    const crossTilesIDs = useSelector(selectCrossTilesIDs);
    const circleTilesIDs = useSelector(selectCircleTilesIDs)
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
            {ownBy}
        </div>
    );
}

export default Tile;