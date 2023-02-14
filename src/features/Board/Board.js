// Estilos
import './Board.css';
// Redux
import { useSelector } from 'react-redux';
// Slices
import { selectBoard } from './boardSlice';
// Components
import Tile from './Tile/Tile.js';

function Board(props) {
    const board = useSelector(selectBoard);

    const renderTiles = () => {
        return board.map((ownership, ind) => <Tile ownBy={ownership} key={ind}/>)
    }

    return (
        <div className='GameBoard'>
            {renderTiles()}
        </div>
    );
}



export default Board;