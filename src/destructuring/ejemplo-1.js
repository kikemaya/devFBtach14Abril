'use strict'

let numeros = [1, "DOS", 3]

//Sin destructuracion

let numeroDos = numeros[1]
console.log(numeros[1]);

//Con destructuracion
let [uno, dos, tres] = numeros
console.log(dos);

let persona = {
    nombre: 'Elon',
    apellido: 'Yuval',
    edad: 32
}

let { edad } = persona
console.log(edad);