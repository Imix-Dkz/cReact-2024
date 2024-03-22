import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) =>{
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
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

//9no Fin del Juego
export const checkEndGame = (newBoard) => {
    //Se revisa si no hay algún empate ó escpacios vacios en el tablero
    return newBoard.every( (square) => square !== null );
}
