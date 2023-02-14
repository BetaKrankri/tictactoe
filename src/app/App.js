import React from 'react';
import './App.css';

import Board from '../features/Board/Board.js';
import Turn from '../features/Turn/Turn.js';

function App() {
  return (
    <div className="App">
      <h1 id='game-name'><span>T</span>ic<span>t</span>ac<span>t</span>oe</h1>
      <Turn />
      <Board />
    </div>
  );
}

export default App;
