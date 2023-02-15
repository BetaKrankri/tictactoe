import './TurnDisplay.css';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTurn, toggleCurrentTurn, setTurn } from './turnSlice.js'
import { selectWinner } from '../Winner/winnerSlice';

function TurnDisplay(props) {
    const dispatch = useDispatch();
    const currentTurn = useSelector(selectCurrentTurn);
    const winner = useSelector(selectWinner);

    function handleClick(e) {
        dispatch(toggleCurrentTurn());
    }

    useEffect(() => {
        if (!winner) return;
        dispatch(setTurn(winner));
    }, [winner])

    let hasWin = winner !== '';

    return (
        <div className={`TurnDisplay ${currentTurn}`} data-haswin={hasWin}
                onClick={() => { }}
        >

        </div>
    );
}

export default TurnDisplay;