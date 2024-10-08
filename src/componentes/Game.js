import { useState } from "react";
import Board from "./Board";
import '../game.css'

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handleGame (squares) {
    //console.log(squares)
    const newHistory  = [...history.slice(0, currentMove + 1), squares]
      //console.log(newHistory)
    setHistory(newHistory)
      //console.log(history)
    setCurrentMove(newHistory.length - 1 )
      //console.log(currentMove)
  }
    //console.log(currentMove)
  function jumpTo (move) {
  
    setCurrentMove(move)
    /*var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
    var masculinos = nombres.slice(0, 1);
    console.log(masculinos)*/
  }

  const moves = history.map((square, move) => {

    let desciption;
    if(move > 0){
      desciption = 'movimiento #' + move
    }else{
      desciption = 'iniciar partida'
    }
    return(
      <li key={move} onClick={() => jumpTo(move)}>
        {desciption}
      </li>
    )
  })

  return(
    <div className="game">
      <div className="marco">
        <Board xIsNext={xIsNext} squares={currentSquares} onGame={handleGame}/>
      </div>
      <ol className="moves">
        {moves}
      </ol>
    </div>
  )
}
export default Game;

