import './Tile.css';

import { useDispatch, useSelector } from 'react-redux';


import { selectTurn, toggleTurn } from '../../Turn/turnSlice.js'

function Tile({ ownBy, onClick }) {
    const dispatch = useDispatch();
    const turn = useSelector(selectTurn);

    const handleClick = (e) => {
        dispatch(toggleTurn());
    }

    return (
        <div className={`Tile ${ownBy}`} onClick={handleClick}>
            
        </div>
    );
}

export default Tile;