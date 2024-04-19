import { useEffect, useState } from "react"

function debounce(func, delay) {
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=> func.apply(this, args), delay);
  }  
}

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x:0, y:0});

  //PointerMove, hace seguimiento del cursor
  useEffect(()=>{
    console.log('effect', {enabled});

    const handleMove = (event)=>{
      const {clientX, clientY} = event;
      console.log('handleMove', {clientX, clientY});
      setPosition({ x: clientX, y: clientY});
    }

    if(enabled){
      //window.addEventListener('pointermove', handleMove);
      //Aqui se buscaria agregar un retardo del evento
      window.addEventListener('pointermove', 
        debounce( handleMove, 10)
      );
    }
    
    //cleanup Method... Para cuando el componente se desmonta o cambian las dependencias
    return ()=>{ window.removeEventListener('pointermove', handleMove); }
  }, [enabled]);

  /* //PointerDisable, changeBodyClass, desactivará el cursor...
    [] -> Sólo se ejecuta una vez cuando se monta el componente
    [enabled] -> se ejecuta cuando cambia y cuando se monta el componente
    undefined -> se ejecuta cada vez que se renderiz el componente
  */    
  useEffect(()=>{
    document.body.classList.toggle('no-cursor', enabled);

    //cleanup Method...
    return ()=> { document.body.classList.remove('no-cursor'); }
  }, [enabled]);

  return (<>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20, top: -20,
        width: 40, height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={() => setEnabled(!enabled) }>
        {enabled ? 'DESACTIVAR' : 'ACTIVAR' } seguir puntero
      </button>
  </>);
}

function App() {
  const [mounted, setMounted] = useState(false);

  return(
    <main>
      { mounted && <FollowMouse/> }
      <br/>
      <button onClick={()=> setMounted(!mounted)}>
        Toggle Moutend FollowMouse Component
      </button>      
    </main>
  )
}

export default App
