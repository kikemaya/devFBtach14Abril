'use strict'

// tipo de char = character = ['h'],['o'],['l'],['a']
// string = cadena de caracteres = 'hola'

let numeros = [1, 2, 3]
let numeros2 = "123"

const numerosCopia = [...numeros]

console.log(numerosCopia);
console.log([...numeros2]);
console.log({ ...numeros2 });