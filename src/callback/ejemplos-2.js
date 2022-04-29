'use strict'

console.log('hola')

//Declarar una funcion
function saludo() {
    return console.log('Hola')
}

// funcion anonima = funcion sin nombre (anonymous function)
// funcion con una =>, es una funcion de flecha (arrow function)
// this no funciona en arrow functions
const saludo = () => {
    return console.log('Hola')
}
//forma simple de arrow function
const saludo = nombre => console.log('Hola' + nombre)
//Ejecutar funcion
saludo('Cecilia')

//crean las funciones para restar, multiplicar
//y dividir dos numeros
function suma(num1, num2) {
    return console.log(num1 + num2)
}

function multi(num1, num2) {
    return console.log(num1 * num2)
}

function resta(num1, num2) {
    return console.log(num1 - num2)
}

function division(num1, num2) {
    return console.log(num1 / num2)
}


//funcion de orden superior = funcion(otraFuncion)
function calculadora(num1, num2, computo) {
    //callback = funcion de orden superior, que invoca a su parametro
    return computo(num1, num2)
}

calculadora(98, 16, suma)
calculadora(18, 7, resta)
calculadora(18, 7, multi)
calculadora(18, 7, division)
