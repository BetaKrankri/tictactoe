import React from 'react';
import './App.css';

import GameBoard from '../features/gameBoard/GameBoard.js';

function App() {
  return (
    <div className="App">
      <h1 id='game-name'><span>3rd</span> Transformation</h1>
      <GameBoard />
    </div>
  );
}

export default App;
