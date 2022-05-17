"use strict";

const showData = async () => {
  //recibe valores de una funion asyncrona
  try {
    const resultado = await getData();
    console.log(`Url del gato ${resultado[0].url}`);
  } catch (error) {
    console.error(error);
  }
};

// Async / await: sirve para acceder a los valores de un promesa, fuerade una promesa
//siempre colocar async antes de colocar la función
//siempre que use async await, debo de utilizar las dos palabras

const getData = () => {
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => data);
};

showData();
