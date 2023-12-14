import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))


  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return
    }
    return "❌"
    // let playerOne = (squares[index]) = "❌"
    // let playerTwo = "⭕️"
  
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} onClick={() => handleClick(index)} />
    </>
  )
}

export default App

// Focus on establishing a variable that has to do with the X mark and the O mark so that we can alternate between what needs to happen for the onClick and the handleClick as well as establishing arguments for calculateWinner.
    // utilizing % (modulo) to figure out which direction for figuring out the winner or the positions for the tictactoe game.
// handleClick may need an if else conditional tree but it has to be established with some logic for the onClick in square.js to be functional.
// calculateWinner function needs to be created but only after establishing player 1 & 2 as having X and O marks. 