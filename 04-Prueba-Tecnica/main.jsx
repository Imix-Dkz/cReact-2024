import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'

// createRoot(document.getElementById('app')).render([CONTENIDO AQUI, MODO UNO])
const root = createRoot(document.getElementById('app'))

root.render(
  <>
  {/* <h1>Hola Mundo</h1> */}
  <App/>
  </>
)