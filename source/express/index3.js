"use strict";
const express = require("express");
const app = express();
const datosUsuarios = require("../datos-json/usuarios1.json"); //obtenel archivo json y todo lo que contenga

app.get("/", function (req, res) {
  res.send("Mama estoy triunfando en mundo de la programacon");
});

/*
app.get("/usuarios", function (req, res) {
  //req todo lo que va a llegar en la peticion (llega la info)
  // a req le llegan todos los parametros y los recibimos con req.query
  //res da una respuesta
  console.log("datosUsuarios", datosUsuarios.datos); //BD o arreglo a filtrar
  console.log(req.query); //ID850
  const parametros = req.query; //valores con los que voy a filtrar

  const respuesta = datosUsuarios.datos.find(
    (dato) => dato.id === parametros.id && dato.nombre === parametros.nombre
  );
  

  res.send(respuesta);
});
*/

app.get("/usuarios/:id", function (req, res) {
  const parametros = req.params; //del parametro que te envien, que tu pides en la url
  const datos = datosUsuarios.datos; //BD
  const respuesta = [];

  datos.forEach((dato) => {
    const posicion = dato.nombre.indexOf(parametros.id); //index busca la letra dentro del string = D = Daniel
    console.log("posicion", posicion);
    if (posicion >= 0) {
      respuesta.push(dato);
    }
  });
  res.send(respuesta);
});

app.listen(5000);
