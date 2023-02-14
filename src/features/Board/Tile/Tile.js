import './Tile.css';

import { useDispatch, useSelector } from 'react-redux';

function Tile({ ownBy, tilePos }) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
    }

    return (
        <div className={`Tile ${ownBy}`} onClick={handleClick}>
            {ownBy}
        </div>
    );
}

export default Tile;