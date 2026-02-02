import { useState, useEffect } from "react";
import Square from "./Square";

// Winner calculation logic
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winnerData, setWinnerData] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  function handleClick(index) {
    if (squares[index] || winnerData) return;

    const updatedSquares = [...squares];
    updatedSquares[index] = isXTurn ? "X" : "O";

    setSquares(updatedSquares);
    setIsXTurn(!isXTurn);
  }

  // Detect winner or draw
  useEffect(() => {
    const result = calculateWinner(squares);
    if (result) {
      setWinnerData(result);
    } else if (squares.every(Boolean)) {
      setIsDraw(true);
    }
  }, [squares]);

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setWinnerData(null);
    setIsDraw(false);
  }

  return (
    <div className="flex flex-col items-center">
      {/* Status */}
      <h2 className="mb-4 text-lg font-semibold">
        {winnerData && (
          <span className="text-green-600">Winner: {winnerData.winner}</span>
        )}

        {!winnerData && isDraw && (
          <span className="text-yellow-600">Game Draw!</span>
        )}

        {!winnerData && !isDraw && (
          <>
            Current Player:{" "}
            <span className="text-blue-600">{isXTurn ? "X" : "O"}</span>
          </>
        )}
      </h2>

      {/* Board */}
      <div className="grid grid-cols-3 gap-3">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
            disabled={!!winnerData}
            isWinning={winnerData?.line.includes(index)}
          />
        ))}
      </div>

      {/* Restart Button */}
      <button
        onClick={resetGame}
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
      >
        Restart Game
      </button>
    </div>
  );
}

export default Board;
