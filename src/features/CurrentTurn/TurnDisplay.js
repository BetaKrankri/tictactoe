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
        dispatch(setTurn(winner));
    },[winner])

    return (
        <div
            className={`TurnDisplay ${currentTurn}`}
            onClick={() => { }}
        >
            
        </div>
    );
}

export default TurnDisplay;