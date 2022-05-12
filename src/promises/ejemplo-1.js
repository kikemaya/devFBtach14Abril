'use strict'

//definir la estructura de mi promesa
let x = 1

const promesa = new Promise((resolve, reject) => {
    if (x === 10) {
        resolve('La variable es igual a 10')
    } else {
        reject('La variable no es igual a 10')
    }
})

//recibir la data de mi promesa
promesa
    .then(response => {
        console.log('Success: ' + response);
    })
    .catch(error => console.error('Error: ' + error))

