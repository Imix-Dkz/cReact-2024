export const saveGameToStorage = ({ board, turn }) =>{
    //Guardar partida... Se convierte el arreglo en un JSON
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn); //Hay que guardar el nuevo turno o es BUG
}

export const resetGameStorage = () => {
    //Tambien hay que reiniciar los valores del tablero
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}