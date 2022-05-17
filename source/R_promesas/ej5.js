"use strict";

//podemos hacer peticiones HTTP
//fetch nos devuleve una promesa

const showData = async () => {
  try {
    const resultado = await getData();
    console.log(`Url del fato ${resultado[0].url}`);
  } catch (error) {
    console.error(error);
  }
};

// siempre que de utilice async await, debo utilizar las dos palabras
//se usa para acceder a los valores de una promesa, por fuera de esa promesa
//podemos quitar el catch de la promesa
const getData = () => {
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => console.log(data));
  //.catch((error) => console.error(error));
};

showData();
