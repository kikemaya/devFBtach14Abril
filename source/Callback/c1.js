"use strict";

function saludo() {
  return console.log("hola");
}
saludo();

const saludo1 = () => console.log("Hola");
saludo1();

const saludo2 = (nombre) => console.log("Hola" + nombre);
saludo2("paco");

//____________________

function suma(num1, num2) {
  return console.log(num1 + num2);
}
function resta(num1, num2) {
  return console.log(num1 - num2);
}
function multiplicacion(num1, num2) {
  return console.log(num1 * num2);
}
function division(num1, num2) {
  return console.log(num1 / num2);
}
//funcion de orden superior = funcion)(otraFuncion)
function calculadora(num1, num2, computo) {
  return computo(num1, num2);
  //callback = funcion de orden superior que invoca a su parametro return computo(num1, num2);
}

calculadora(10, 5, suma);
calculadora(10, 5, resta);
calculadora(10, 5, multiplicacion);
calculadora(10, 5, division);
