import Square from "./Square";

function Board({xIsNext, squares, onGame}) {

    function handleClick (i) {

        if(winner || squares[i]){
            return
        }
        const newSquares = squares.slice()
        //console.log(newSquares)
        newSquares[i] = xIsNext? 'X' : 'O'  
        //console.log(newSquares)
        onGame(newSquares)
    }
 
    const winner = controlWinner(squares)
    //console.log(winner)
    let status;
    if(winner){
        status = 'El ganador es: ' + (xIsNext? 'O' : 'X')
    }else{
        status = 'Siguiente jugada: '+ (xIsNext? 'X' : 'O')
    }
    return(
        <>
            <div className="status">{status}</div>
            <div className="cuadro">
               
                    <Square value={squares[0]} Click={() => handleClick(0)}></Square>
                    <Square value={squares[1]} Click={() => handleClick(1)}></Square>
                    <Square value={squares[2]} Click={() => handleClick(2)}></Square>
                
                    <Square value={squares[3]} Click={() => handleClick(3)}></Square>
                    <Square value={squares[4]} Click={() => handleClick(4)}></Square>
                    <Square value={squares[5]} Click={() => handleClick(5)}></Square>
                
                    <Square value={squares[6]} Click={() => handleClick(6)}></Square>
                    <Square value={squares[7]} Click={() => handleClick(7)}></Square>
                    <Square value={squares[8]} Click={() => handleClick(8)}></Square>
                
            </div>
        </>
    )

}
  
export default Board;

function controlWinner(squares) {
    //console.log(squares)
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ] 
    for(let i= 0; i<lines.length; i++){
  
      const [a,b,c] = lines[i]
        //console.log(a)
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return (squares)
      }
    }
    return null
  }