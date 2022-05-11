const express = require("express");
const app = express();
const datosUsuarios = require('../datos-json/usuarios.json')

app.get("/", function (req, res) {
  res.send("Mamá estoy triunfando en el mundo de la programación");
});

app.get("/usuarios", function (req, res) {
  console.log('datosUsuarios ', datosUsuarios.datos);
  console.log(req.query);

  const parametros = req.query;
  const respuesta = datosUsuarios.datos.find(dato => dato.id === parametros.id && dato.nombre === parametros.nombre)

  res.send(respuesta);
});

app.get("/usuarios/:id", function (req, res) {
  const parametros = req.params;
  const datos = datosUsuarios.datos;
  const respuesta = [];

  datos.forEach(dato => {
    const posicion = dato.nombre.indexOf(parametros.id);
    if (posicion > 0) {
      respuesta.push(datos);
    }
  });

  res.send(respuesta);
});

app.post("/usuarios", function (req, res) {
  
  res.send('');
});

app.listen(3000);
