import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'

import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'

import './App.css'

function App() {
  //2do, se define un tablero..., Se añade lectura de datos fromStorage
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return ( (boardFromStorage) ? JSON.parse(boardFromStorage) : Array(9).fill(null) );
  }); //console.log(board)
  //4to, Se define el control de turnos con estados
    const [turn, setTurn] = useState(()=>{
      const turnFromStorage = window.localStorage.getItem('turn');
      /* //Cuando en validador ternareo se usa un doble "??",
        se indica que si se cumple digamos, la variable condicional(TRUE/FALSE),
        se regrese la variable condicional,
        en caso contrario, se regresa lo que está despues del doble "??",
        en este caso se manda el valor por defecto de los turnos
      */
      return (turnFromStorage ?? TURNS.X );
    });
    
    //7mo, Se define un estado Ganador
    const [winner, setWinner] = useState(null);

  //8vo Reset Game
    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setTurn(TURNS.X);
      setWinner(null);

      //Tambien hay que reiniciar los valores del tablero
      window.localStorage.removeItem('board');
      window.localStorage.removeItem('turn');
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

      //Guardar partida... Se convierte el arreglo en un JSON
      window.localStorage.setItem('board', JSON.stringify(newBoard));
      window.localStorage.setItem('turn', newTurn); //Hay que guardar el nuevo turno o es BUG

      //Revisar sig hay ganador...
      const newWinner = checkWinnerFrom(newBoard);
      if(newWinner){ 
        confetti();
        setWinner(newWinner);
      } else if(checkEndGame(newBoard)){
        setWinner(false); //Empate
      }
    }

  return (
    <main className='board'>
      <h1>Gato / 3 en Raya...</h1>
      <button onClick={resetGame}>Reiniciar Juego</button>
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

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App
