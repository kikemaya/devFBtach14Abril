'use strict'

module.exports = {
  usuarioSinc(id) {
    const tiempoInicio = new Date().getTime();
    while ((new Date().getTime() - tiempoInicio) <= 3000) {
      // Esperando
    }

    return {
      "id": id,
      "nombre": `Usuario ${id}`
    }
  },

  usuarioAsinc(id, callback) {
    const usuario = {
      "id": id,
      "nombre": `Usuario ${id}`
    }

    console.log('JAJAAJ ', 5+id);
    setTimeout(() => {
      callback(usuario)
    }, 3000);
  },
  
}
