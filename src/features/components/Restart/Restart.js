import './Restart.css';

import { useDispatch, useSelector } from 'react-redux';

import { resetTurn, selectCurrentTurn, randomTurn } from '../../CurrentTurn/turnSlice';
import { clearBoard } from '../../Board/boardSlice';

function Restart() {
    const dispatch = useDispatch();
    const currentTurn = useSelector(selectCurrentTurn);

    function handleClick(e) {
        if (!currentTurn) {
            dispatch(randomTurn());
        } else {
            dispatch(resetTurn());
            dispatch(clearBoard())
        }
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