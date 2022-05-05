'use strict'

function saludar() {
    return console.log('Hola, Mundo!');
}
function ejecutarFuncion(otraFuncion) {
    return otraFuncion()
}

ejecutarFuncion(saludar)

//CHALLENGE
//1. Crear una funcion que salude al nombre que le pase como parametro.
//2. Todas las funciones, sean arrow functions
//3. Para ejecutar el js, hacerlo con un script del
//package.json