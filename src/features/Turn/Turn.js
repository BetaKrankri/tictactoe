import './Turn.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectTurn, toggleTurn } from './turnSlice.js';



function Turn(props) {
    const dispatch = useDispatch();
    const turn = useSelector(selectTurn);

    function handleClick(e) {
        dispatch(toggleTurn());
    }

    return (<div className={`Turn ${turn}`} onClick={handleClick}></div>);
}

export default Turn;