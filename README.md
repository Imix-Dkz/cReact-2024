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
  + [04-Prueba Tecnica](#04-prueba-tecnica-jr-and-trainee)

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

## 04-Prueba Tecnica, Jr and Trainee
  + Lee datos de un API
  + Recupera una tira de datos y muestra la imagén si procede
    - Recupera un ECHO aleatorio de gatos de una 1ra API(a) y muestra una imagen de un gato, con la primera palabra del ECHO con la 2da API(b)
    - [CORREGIDO], usando LAS PRIMERAS 3 PALABRAS DEL ECHO
    - API(a): htpps://catfact.ninja/fact
    - API(b): htpps://cataas.com/cat/says/hello
    - [NOTA]: La API Cambio, con respecto a lo mostrado en el video, por lo que requiere ajustes
  + Implica el uso de estados dependiendo de otro
  + El detalle completo del origén de este proyecto se puede ver en desde aquí:[Prueba Técnica](https://www.youtube.com/watch?v=XYpadB4VadY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=6)
  + Este Proyecto comenzo con un proyecto MINIMO( Vanilla ), para ver como crece y se va armando desde CERO
    ```
      npm create vite
      √ Project name: ... 04-Prueba-Tecnica
      √ Package name: ... 04-prueba-tecnica
      √ Select a framework: » Vanilla
      √ Select a variant: » JavaScript

      cd 04-Prueba-Tecnica
      #Se instala el plugin de react, falta personalizarlo
      npm install @vitejs/plugin-react -E
    ```
  ### [Nota], en este punto, si se revisa el archivo "package.json", no se verá que está REACT  activo, por lo que hay que instalar sus dependencias
    - react
    - react-dom
    ````
      npm install react react-dom -E
    ````
    - Con esto ya tendremos las dependencias REACT agregadas
  +  Lo siguiente es configurar/CREAR el archivo "vite.config.js"
     ````
       import { defineConfig } from 'vite'
       import react from '@vitejs/plugin-react'

       export default defineConfig({
         plugins: [react()],
       })
     ````
  + De aqui notar los siguientes puntos:
    - index.html, es el punto de entrada de la aplicación. ya que contiene main.js  
    - main.js, es quien contiene el arranque de la aplicación como tal
    - PERO, como react usa el formato JSX, hay que actualizar el formato para el archivo main, quedando así
    - "main.jsx"
  + Hecho eso, para poder mostrar nuestro primer mensaje bastará tener lo siguiente en main.jsx:
    ````
      import { createRoot } from 'react-dom/client'
      const root = createRoot(document.getElementById('app'))
      root.render(<h1>Hola Mundo</h1>)
    ```` 
  +  Lo siguiente y muy importante es instalar "ESLint", lo más practico es usar el siguiente comando:
     - npm install standard -D
     - ESLint ó conocido como "lintrc"
     - Se puede completar su configuración en package.json, agregando despues de las dependencias:
       ````
        "eslintConfig":{
          "extends":"./node_modules/standard/eslintrc.json"
        }
       ````
     - Que hace *ESLint*: ESLint is a popular open-source JavaScript linting utility. It analyzes your code for potential errors, and enforces coding standards while improving code quality. It can also help you as a developer to identify and fix common mistakes, use best practices, and maintain consistency across your codebase
  ### [PUNTO DE ENTRADA TERMINADO]
    * Ya teniendo el punto de RENDERIZADO completado, se procede a realizar la modularización requerida
    * Crear un "src/" para el resto de componentes
    * Creando un src/App.jsx , es importante entender el uso de los componentes, por ejemplo:
      ````
       useEffect(()=>{
         fetch(apiA_Url)
         .then(response => response.json())
         .then(data => setFact(data.fact))
       }, [])
      ````
    * Es importante hacer notar que el "[]", es necesario SIEMPRE



# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
````
    npm create vite
````

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
