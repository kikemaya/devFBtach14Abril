"use strict";
//fetch nos ayuda a ahcer peticiones hacia las APIS
//fetch solo trabaja en el navegador

//fetch - palabra reservada, se le pasa URL
fetch("https://rickandmortyapi.com/api/character/")
  // la respuesta la convertimos la parseamos a JSON
  // convertir de string a JSON
  .then((response) => response.json()) // la respuesta se convierte a data
  .then((data) => {
    if (data.error) return "Hubo un error";
    console.log("data nueva", data.results[0].name);
  })
  .catch((error) => {
    console.log(error);
  });
