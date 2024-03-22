//3ro se definen las propiedades del cuadrado...
export const Square = ({ children, isSelected, updateBoard, index }) => {
    //Aqui se define una "className" se activará si un cuadro está seleccionado o no 
    const className = `square ${isSelected ? 'is-selected' : '' }`
    
    //5.1, Se añade control de los clicks en el tablero
    const handleClick = () => {
      updateBoard(index);
      //8449939~ ERROR FIX: no se mandaba el INDEX de actualización de celda...
    }
  
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    );
  }