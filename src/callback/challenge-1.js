'use strict'

//SOLUCION 1er alumno
const saludar = (nombre) => console.log('Hola ' + nombre);

const saludo = (nombre, accion) => accion(nombre);

saludo('Samantha', saludar)

//SOLUCION 2do alumno
const saludo2 = (nombre) => console.log(`Hola ${nombre}`);

const saludasion = (nombre, afun) => afun(nombre)

saludasion ("Criss", saludo)
