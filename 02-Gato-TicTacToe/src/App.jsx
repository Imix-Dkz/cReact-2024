import { useState } from 'react'
import confetti from 'canvas-confetti'

import './App.css'

//1ro, hay que definir los turnos del juego...
const TURNS = {
  X: 'x',
  O: 'o'
}

//3ro se definen las propiedades del cuadrado...
const Square = ({ children, isSelected, updateBoard, index }) => {
  //Aqui se define una "className" se activará si un cuadro está seleccionado o no 
  const className = `square ${isSelected ? 'is-selected' : '' }`
  //5.1, Se añade control de los clicks en el tablero
  const handleClick = () => {
    updateBoard();
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
}

//Arreglo de condiciones ganadoras
const WINNER_COMBOS = [
  //Horizontales
  [0,1,2],
  [3,4,5],
  [6,7,8],
  //Verticales
  [0,3,6],
  [1,4,7],
  [2,5,8],
  //Diagonales
  [0,4,8],
  [2,4,6]
];

function App() {
  //2do, se define un tablero..., Se movio de más arriba
    //const board = Array(9).fill(null);
    const [board, setBoard] = useState( Array(9).fill(null) ); //Se cambio a un tablero de estados
    //const [board, setBoard] = useState(['x','x','x','o','o','o','x','o','x']); //Se Inicializa
    //console.log(board)
  //4to, Se define el control de turnos con estados
    const [turn, setTurn] = useState(TURNS.X);
    
    //7mo, Se define un estado Ganador
    const [winner, setWinner] = useState(null);
    const checkWinner = (boardToCheck) =>{
      for(const combo of WINNER_COMBOS){
        const [a,b,c] = combo
        if(
          boardToCheck[a] && //0 -> X ú O
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
        ){ return boardToCheck[a]; } //Regresa la variable ganadora
      }
      //Si no hay ganador
      return null;
    }

  //8vo Reset Game
    const resetGame = () =>{
      setBoard(Array(9).fill(null));
      setTurn(TURNS.X);
      setWinner(null);
    }

  //9no Fin del Juego
    const checkEndGame = (newBoard) =>{
      return newBoard.every((square) => square !== null );
    } 

  //5to, Se genera la función con la que se actualizará el tablero
    const updateBoard = (index) =>{
      //6to, Se crea un condicional, de no actualizar la posición si ya contiene algo...
      if(board[index] || winner) return

      //Se recarga tablero para el renderizado
      const newBoard = [...board]; //<- spread-operator, investigar y (rest-operator, structuredClone) tambien
      newBoard[index] = turn; //x u o
      setBoard(newBoard);

      //FIn del turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X ;
      setTurn(newTurn);

      //Revisar si hay ganador...
      const newWinner = checkWinner(newBoard);
      if(newWinner){ 
        confetti();
        setWinner(newWinner);
       //alert(`El ganador es: ${newWinner}`);
      } else if(checkWinner(newBoard)){
        setWinner(false); //Empate
      }
    }

  return (
    <main className='board'>
      <h1>Gato / 3 en Raya...</h1>
      <button className={resetGame}>Reiniciar Juego</button>
      <section className="game">
        { 
          board.map((square, index) =>{
            return(
              /* //Aqui hay que hacer notar que se manda "LA FUNCIÓN COMPLETA",
                 updateBoard={updateBoard}
                 en lugar de la EJECUCUCIÓN DE LA FUNCIÓN: updateBoard={updateBoard()}, ...
                 ya que esto provocaria que se ejecutase la función 9 VECES
              */
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            );
          }) //Array.mpa(), NUNCA termina con ";"
        }
      </section>

      <section className="turn">
        {/* Aqui es donde se define el estado de los turnos */}
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      { //Renderizado DINAMICO ó Condicional
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>{ winner === false ? 'Empate' : 'Ganó:' }</h2>
              
              <header>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  );
}

export default App
