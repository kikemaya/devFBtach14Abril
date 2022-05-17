const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Mamá estoy triunfando en el mundo de la programación");
});

app.get("/usuarios", function (req, res) {
  const usuarios = {
    nombre: "daniel",
    apellido: "Silverio",
  };
  console.log("jajajaj");
  res.send(usuarios);
});

app.post("/usuarios", function (req, res) {
  console.log(req.body);
  res.send("Se agregaron correctamente los datos");
});
app.listen(3000);
