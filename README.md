# Curso REACT 2024
Este proyecto es parte de el curso:
* CURSO REACT 2024 - Aprende desde cero
* Del canal **midulive**
* La playlist de todo el proyecto es: [Curso React 2024](https://www.youtube.com/playlist?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29)
* Para refrerencias extra, se consultará la siguiente Documentación... [Wiki](https://www.reactjs.wiki)
* Contenuido del Proyecto
  + [01-TwitterFollow](#01-twitterfollow)
  + [02-Gato-TicTacToe](#02-gato-tictactoe)
  + [03-MouseFollower](#03-mousefollower)

## 01-TwitterFollow
Esté proyecto comienza con una adaptación de la interfaz de followers de twitter
* [CURSO REACT 2024 - Aprende desde cero](https://www.youtube.com/watch?v=7iobxzd_2wY)
* En esté capítulo se ven los conceptos de:
  + Componentes
  + Elementos
  + Renderizado de componentes y contenedores
  + Pase de parametros, PROPS
  + Introducción a "useState"/ hooks

## 02-Gato-TicTacToe
En este capítulo se creará un simple juego de GATO, con el que se validarán estados y funcionalidades de interfaz, así como algunos avisos en pantalla
* [Curso de React desde cero: Crea un videojuego y una aplicación para aprender useState y useEffect
](https://www.youtube.com/watch?v=qkzcjwnueLA)
* Este ejercico tiene en consireación muchas funciones de REACT
* Asi como la logica de programación para definición de resultados...
  + 134958f (HEAD -> master) Se corrige App.jsx, Square no mandaba el index en handleClick()=>{updateBoard(index);}
  + 8449939 Se termina el juego, por ahora no funciona, pero se irá adecuando a componentes
* Notas de HOOKS, react tiene distintos tipos de controladores de estados
  + useState(), es el más usado y sirve para ver el estado de operacion de un componente o variable
  + useEffect(), es un Hook, que nos permite ejecutar código arbitrario, cuando el componente se monta en el DOM y cambian las dependencias que nosotros le decimos...
  + 

## 03-MouseFollower
  + Este ejercicio tiene inteción de mostrar un uso sencillo del "useEffect"
  + Se dará seguimiento al puntero del ratón
  + Tambien se hace notar la importancia de LIMPIAR/CLEAN los useEffect, con un
  + >   return ()=>{}

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
