import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoards';
import { useState } from 'react';
import Log from './components/Log';
//import { WINNING_COMBINATIONS } from './assets/winning_combinations';





function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleActivePlayer(rowIndex, colIndex) {
    // Determine the current player
    const currentPlayer = activePlayer;

    // Update the game turns with the new move
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });

    // Toggle the active player
    setActivePlayer((prevActivePlayer) => (prevActivePlayer === 'X' ? 'O' : 'X'));
  }

  return (
    <main>
      <header>
        <img className="logo" src="image/game-logo.png" alt="Game Logo" />
        <h1 className="text">Tic-tac-toe</h1>
      </header>

      <div className="game-container">
        <div className="players-section">
          <ol id="players" className="highlight-player">
            <Player initialname="Ivar" symbol="X" isActive={activePlayer === 'X'} />
            <Player initialname="Sabestian" symbol="O" isActive={activePlayer === 'O'} />
          </ol>
        </div>

        <div className="game-board-title">
          <h2>GAME BOARD</h2>
        </div>

        <div className="game-board-section">
          <GameBoard onSelectSquare={handleActivePlayer} turns={gameTurns} />
        </div>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
