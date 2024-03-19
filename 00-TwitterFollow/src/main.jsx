import React from 'react';
import ReactDOM from 'react-dom/client';
//Cuando se manda un componente completo hay que importarlo
import {App} from './App.jsx';
//Estilos
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
)