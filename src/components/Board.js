import React from 'react'
import Squares from './Squares'

const PLAYERS_CHOICES = Object.freeze({
    X: "X",
    O: "O",
});


const Board = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [isX, setIsX] = React.useState(true)
    

    const handleClick = (i) => {
        
        if (evaluateWinner(squares) || squares[i]) {
            return
        }

        squares[i] = isX ? PLAYERS_CHOICES.X : PLAYERS_CHOICES.O;
       
        setSquares(squares)
        setIsX(!isX)
    }

    const winner = evaluateWinner(squares)
    let isFull = squares.every((square) => square);
    let status = null;
    if (winner) {
        status = 'Winner :' + winner
    } 
    else if (isFull) {
        status = 'DRAW!' +PLAYERS_CHOICES.X + PLAYERS_CHOICES.O

     }
    else {
        status = 'Next player :' + (isX ? PLAYERS_CHOICES.X : PLAYERS_CHOICES.O)

    }

    const handleRestart = () => {
        setIsX(true)
        setSquares(Array(9).fill(null))
    }

    return (
        <div className="board">
          {[0, 1, 2].map((row) => (
            <div className="board-row" key={row}>
              {[0, 1, 2].map((col) => {
                const index = row * 3 + col;
                return (
                  <Squares
                    key={index}
                    value={squares[index]}
                    onClick={() => handleClick(index)}
                  />
                );
              })}
            </div>
          ))}
          <div className="status">{status}</div>
          <br/>
          <button className='restart' onClick={handleRestart}>Restart The Game</button>
        
        </div>
    )
}

function evaluateWinner(squares) {
    const winningpatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningpatterns.length; i++) {
        const [x, y, z] = winningpatterns[i]
        if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
            return squares[x]
        }
    }

    return null
}

export default Board
