
/// MAke Array value constant

import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);

  const handleReset = () => {
    setState(Array(9).fill(null));
    setisXTurn(true); // Reset the turn to 'X'
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();
  const handelClick = (index) => {
    const copyState = [...state];
    if (copyState[index] === null && !isWinner) {
      copyState[index] = isXTurn ? 'X' : 'O';
      setState(copyState);
      setisXTurn(!isXTurn);
    }
  };

  return (
    <div className='board-container'>
      {isWinner? (
        <>
          <div className='win'>
            <h1>{isWinner} Won the Game</h1>
            <button onClick={handleReset}>Play Again</button>
          </div>
          <br />
        </>
      ) : (
        <>
          <div className='board-row'>
            <Square onClick={() => handelClick(0)} value={state[0]} />
            <Square onClick={() => handelClick(1)} value={state[1]} />
            <Square onClick={() => handelClick(2)} value={state[2]} />
          </div>
          <div className='board-row'>
            <Square onClick={() => handelClick(3)} value={state[3]} />
            <Square onClick={() => handelClick(4)} value={state[4]} />
            <Square onClick={() => handelClick(5)} value={state[5]} />
          </div>
          <div className='board-row'>
            <Square onClick={() => handelClick(6)} value={state[6]} />
            <Square onClick={() => handelClick(7)} value={state[7]} />
            <Square onClick={() => handelClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;



