'use strict'
//WEB APIS para manejar tiempos. De naturaleza asincrona.
//funciones nativas del navegador
//funciones de orden superior, funciones que ejecutan ese parametro(callback)
//Reciben dos parametros(una funcion callback y un tiempo de espera)

function hola() {
    return console.log('Hola Mundo!')
}

setTimeout(() => {
    return hola()
}, 0)


//ejemplo con intervalos de tiempo. Recuerda colocar condicion de salida
// para no caer en bucle infinito
let i = 0

let reloj = setInterval(() => {
    i++
    console.log(i);
    if (i >= 3) clearInterval(reloj)
}, 1000);
