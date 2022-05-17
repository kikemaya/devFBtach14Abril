"use strict";
const { usuarioAsinc } = require("./usuarios");

console.log("Incio de programa");
console.time("inicio");

usuarioAsinc(1, (usuario) => {
  console.log(usuario);
});
usuarioAsinc(2, (usuario) => {
  console.log(usuario);
});
usuarioAsinc(3, (usuario) => {
  console.log(usuario);
  console.timeEnd("inicio");
});

console.log("Fin del programa");
