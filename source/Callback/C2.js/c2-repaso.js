"use strict";

const saludar = (nombre) => {
  return `Hola ${nombre}`;
};

const ejecutarFuncion = (nombre, callback) => {
  return callback(nombre);
};

console.log(ejecutarFuncion("paco", saludar));
