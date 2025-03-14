

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



// eslint-disable-next-line react/prop-types
export default function GameBoard({onSelectSquare, turns}) {
  let gameBoard= initialGameBoard;

  for( const turn of turns){
    const {square, player}= turn;
    const {row, col}= square;
    gameBoard[row][col]= player;
  }


  return (
    <div id="game-board">
      <ol>
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex} className="game-row">
            <ol>
              <div>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button  onClick={()=> onSelectSquare(rowIndex, colIndex) } disabled={playerSymbol !==null}className="game-cell">
                    {playerSymbol}
                  </button>
                </li>
              ))}
              </div>
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}


/*
export default function GameBoard() {
  return (
    <div id="game-board">
      <ol>
        <div>
        {initialGameBoard.map((row, rowIndex) => (
          <li key={rowIndex} className="game-row">
            
            {row.map((playerSymbol, colIndex) => (
              <button
                key={colIndex}
                className="game-cell"
              >
                {playerSymbol}
              </button>
            ))}
            
          </li>
          
        ))}
        </div>
      </ol>
    </div>
  );
}
  */


  /*
  export default function GameBoard() {
    return (
      <ol id="game-board">
        {initialGameBoard.map((row, index) => {
          return (
            
            <li key={index} className="game-row">
                <div>
              {row.map((playerSymbol, cellIndex) => (
                <button key={cellIndex} className="game-cell">
                  {playerSymbol}
                </button> // Render each cell value (null or whatever else)
              ))}
              </div>
            </li>
            
          );
        })}
      </ol>
    );
  }*/
  