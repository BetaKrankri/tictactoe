import React from 'react';
import './App.css';

import Board from '../features/Board/Board.js';
import TurnDisplay from '../features/CurrentTurn/TurnDisplay.js';
import Restart from '../features/Restart/Restart.js'

function App() {
  return (
    <div className="App">
      <h1 id='game-name'><span>T</span>ic<span>t</span>ac<span>t</span>oe</h1>
      <div className='Display'>
        <TurnDisplay />
      </div>
      <Board />
      <Restart />
    </div>
  );
}
export default App;

