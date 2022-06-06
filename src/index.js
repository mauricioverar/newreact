/*
const element = document.createElement('h1') // crea elemento
element.innerText = 'jovProgramadores' // texto

const container = document.getElementById('root') // crea var

container.appendChild(element) // mostrar
*/

import React from "react";
import ReactDOM from "react-dom";
/*
// crea var
const name = 'eva'
const element = <h1>hola {name}</h1>
*/
const style = {
  color: 'red'
}

function tictac() {
  const element = (
    <div>
      <h1 style={style}> Reloj</h1>
      <h2>son las {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  const container = document.getElementById('root')
  ReactDOM.render(element, container)
}

setInterval(tictac, 10000)