import React from 'react'
import Squares from './Squares'
const Board = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [isX, setIsX] = React.useState(true)
    const handleClick = (i) => {
        if (winners(squares) || squares[i]) {
            return
        }
        squares[i] = isX ? 'X' : 'O'
        setSquares(squares)
        setIsX(!isX)
    }
    const winner = winners(squares)
    let status
    if (winner) {
        status = 'Winner :' + winner
    } else {
        status = 'Next player :' + (isX ? 'X' : 'O')
    }
    return (
        <div className='board'>

            <div className='board-row'>
                <Squares value={squares[0]} onClick={() => handleClick(0)} />
                <Squares value={squares[1]} onClick={() => handleClick(1)} />
                <Squares value={squares[2]} onClick={() => handleClick(2)} />
            </div>

            <div className='board-row'>
                <Squares value={squares[3]} onClick={() => handleClick(3)} />
                <Squares value={squares[4]} onClick={() => handleClick(4)} />
                <Squares value={squares[5]} onClick={() => handleClick(5)} />
            </div>

            <div className='board-row'>
                <Squares value={squares[6]} onClick={() => handleClick(6)} />
                <Squares value={squares[7]} onClick={() => handleClick(7)} />
                <Squares value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <div className="status">{status}</div>


        </div>
    )
}

function winners(squares) {
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
        if (squares[x] && squares[x] == squares[y] && squares[y] == squares[z]) {
            return squares[x]
        }
    }
    return null
}
export default Board
