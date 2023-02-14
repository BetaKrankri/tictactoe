import React from 'react';
import './App.css';

import GameBoard from '../features/Board/Board.js';

function App() {
  return (
    <div className="App">
      <h1 id='game-name'><span>3</span>Txc</h1>
      <GameBoard />
    </div>
  );
}

export default App;
