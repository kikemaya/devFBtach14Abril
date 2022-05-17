"use strict";

// function saludar() {
//   console.log("Hola Mundo");
// }

// function ejecutarFuncion(otraFuncion) {
//   return otraFuncion();
// }

// ejecutarFuncion(saludar);

const saludar = (nombre) => {
  return `Hola ${nombre}`;
};

const ejecutarFuncion = (nombre, ejecutar) => {
  return ejecutar(nombre);
};

console.log(ejecutarFuncion("paco", saludar));
