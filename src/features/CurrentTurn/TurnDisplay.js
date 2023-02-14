import './TurnDisplay.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTurn, toggleCurrentTurn } from './turnSlice.js'

function TurnDisplay(props) {
    const dispatch = useDispatch();
    const currentTurn = useSelector(selectCurrentTurn);

    function handleClick(e) {
        dispatch(toggleCurrentTurn());
    }

    return (<div className={`TurnDisplay ${currentTurn}`} onClick={'handleClick'}></div>);
}

export default TurnDisplay;