import './App.css'; // Assuming your CSS file is App.css
import Player from './components/Player';
import GameBoard from './components/GameBoards';

function App() {
  return (
    <main>
      <header>
        <img className="logo" src="image/game-logo.png" alt="Game Logo" />
        <h1 className="text">Tic-tac-toe</h1>
      </header>

      <div className="game-container">
        <div className="players-section">
          <ol id="players">
            <Player initialname="Ivar" symbol="X" />
            <Player initialname="Sabestian" symbol="O" />
          </ol>
        </div>
        
        <div className="game-board-title">
          <h2>GAME BOARD</h2>
        </div>

        <div className="game-board-section">
          <GameBoard />
        </div>
      </div>
    </main>
  );
}

export default App;
