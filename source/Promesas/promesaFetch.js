"use strict";
//herramientas que nos ayuda a realziar peticiones a las APIS

fetch("http://localhost:3000/usuarios")
  // Si reponse tiene valor, conviertelo a json
  .then((response) => response.json())
  // le pasamos un parametro como se llama, generalmente una data
  .then((data) => {
    if (data.error) return "Hubo un error - then";
    console.log("Retorno", data);
  })
  .catch((error) => {
    console.log("error catch", error);
  });
