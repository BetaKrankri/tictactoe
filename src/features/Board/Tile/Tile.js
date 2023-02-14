import './Tile.css';

import { useDispatch, useSelector, } from 'react-redux';
import { selectCurrentTurn, toggleCurrentTurn } from '../../CurrentTurn/turnSlice';
import { markTile } from '../boardSlice';

function Tile({ ownBy, tilePos }) {
    const dispatch = useDispatch();

    const currentTurn = useSelector(selectCurrentTurn)

    function handleClick(e) {
        if(!currentTurn || ownBy) return;
        dispatch(markTile({ tilePos, currentTurn }));
        dispatch(toggleCurrentTurn());
    }

    return (
        <div className={`Tile ${ownBy}`} onClick={handleClick}>
            {ownBy}
        </div>
    );
}

export default Tile;