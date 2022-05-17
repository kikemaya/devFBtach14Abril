const express = require("express");
const app = express();
const datosUsuarios = require("../datos-json/usuarios.json");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Mamá estoy triunfando en el mundo de la programación");
});

app.get("/usuarios", function (req, res) {
  console.log("datosUsuarios ", datosUsuarios.datos);
  console.log(req.query);

  const parametros = req.query;
  const respuesta = datosUsuarios.datos.find(
    (dato) => dato.id === parametros.id && dato.nombre === parametros.nombre
  );

  res.send(respuesta);
});

app.get("/usuarios/:id", function (req, res) {
  const parametros = req.params;
  const datos = datosUsuarios.datos;
  const respuesta = [];

  console.log(parametros);

  datos.forEach((dato) => {
    const posicion = dato.nombre.indexOf(parametros.id);
    if (posicion >= 0) {
      respuesta.push(dato);
    }
  });

  res.send(respuesta);
});

app.post("/usuarios", function (req, res) {
  const nuevosDatos = req.body;
  let flag = false;
  datosUsuarios.datos.forEach((dato) => {
    if (dato.nombre === nuevosDatos.nombre) flag = true;

    if (flag) res.send("El usuario ya esta registrado");
    datosUsuarios.datos.push(dato);
  });

  datosUsuarios.datos.push(nuevosDatos);

  res.send(datosUsuarios);
});

app.listen(3000);
