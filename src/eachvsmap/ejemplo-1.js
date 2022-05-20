'use strict'

//Investigar què es paso por referencia y paso por valor en programaciòn
//Usarlo para cosas sencillas, en donde no manipules los datos del arreglo original
let amigos = [
    {"nombre" : "Pamela", "age" : 23, "country": "MX"},
    {"nombre" : "Samantha", "age" : 24, "country": "ES"},
]

amigos.forEach(amigo => {
    console.log(amigo);
});

//como una buena practica, tengo que retornar algo
//map nos permite mutar(modificar) un arreglo y copiarlo para trabajarlo de forma independiente
//de las mejores formas de copiar un arreglo y no mutar el original
let misAmigos = amigos.map(amigo => {
    return {...amigo}
});
console.log(misAmigos);