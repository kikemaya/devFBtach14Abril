"use strict";

const { usuarioSinc } = require("./usuarios");

console.log("Inicio de programa");
console.time("Incio");

console.log(usuarioSinc(1));
console.log(usuarioSinc(2));
console.log(usuarioSinc(3));

console.timeEnd("inicio");
console.log("Fin de programa");
