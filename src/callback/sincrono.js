"use strict";

//comenterario para subirlo a la rama feature
const { usuarioSinc } = require("./Usuarios");

console.log("Inicio del programa");
console.time("Inicio");

console.log(usuarioSinc(1));
console.log(usuarioSinc(2));
console.log(usuarioSinc(3));

console.timeEnd("Inicio");
console.log("Fin del programa");
