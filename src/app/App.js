import React from 'react';
import './App.css';

import Board from '../features/Board/Board.js';
import TurnDisplay from '../features/CurrentTurn/TurnDisplay.js';

function App() {
  return (
    <div className="App">
      <h1 id='game-name'><span>T</span>ic<span>t</span>ac<span>t</span>oe</h1>
      <TurnDisplay />
      <Board />
    </div>
  );
}

export default App;
