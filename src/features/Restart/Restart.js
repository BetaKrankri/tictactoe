import './Restart.css';

import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentTurn, randomTurn } from '../CurrentTurn/turnSlice';
import { clearBoard } from '../Board/boardSlice';
import { clearWinner } from '../Winner/winnerSlice';

function Restart() {
    const dispatch = useDispatch();
    const currentTurn = useSelector(selectCurrentTurn);

    function handleClick(e) {
            dispatch(clearBoard());
            dispatch(clearWinner())
            dispatch(randomTurn());
    }

    return (
        <div
            className='Restart '
            onClick={handleClick}>
            {!currentTurn && 'START'}
            {currentTurn && 'RESTART'}
        </div>
    );
}

export default Restart;