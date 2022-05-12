'use strict'

//RETO: ROMPE Y JUEGA CON MI CÒDIGO
const promesa = new Promise((resolve, reject) => {
    if (true) {
        resolve('Resuelta')    
    } else {
        reject('Rechazada')
    }
})

promesa
    .then((response) => { console.log(response) })
    .then(() => {
        console.log('Hola');
    })
    .then(() => {
        console.log('Mundo!');
        return { "nombre" : "Samantha" }
    })
    .then((respuesta) => {
        console.log(respuesta.nombre);
    })
    .catch((error) => { console.log(error)})