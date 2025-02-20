import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


export default function GameBoard() {
  const [gameBoard, setGameBoard]=useState(initialGameBoard);

  function handleSelect(rowIndex, colIndex){
    setGameBoard((prevGameBoard)=>{
      const updatedBoard= [...prevGameBoard.map(innerArray => [...innerArray])
      ];
      updatedBoard[rowIndex][colIndex]="X";
      return updatedBoard;


    });
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
                  <button  onClick={()=>handleSelect(rowIndex, colIndex)} className="game-cell">
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
  