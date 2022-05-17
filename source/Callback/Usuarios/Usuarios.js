"use strict";

module.exports = {
  //exportar información
  usuarioSinc(id) {
    //funciones
    console.log("JEJEJ");
    const tiempoInicio = new Date().getTime();
    while (new Date().getTime() - tiempoInicio <= 3000) {
      //Esperando
    }
    return {
      id: id,
      nombre: `Usuario ${id}`,
    };
  },
  usuarioAsinc(id, callback) {
    const usuario = {
      id: id,
      nombre: `Usuario ${id}`,
    };
    setTimeout(() => {
      callback(usuario);
    }, 3000);
  },
};
