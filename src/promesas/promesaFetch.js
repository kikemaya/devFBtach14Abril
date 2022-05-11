"use strict";

fetch("https://rickandmortyapi.com/api/characte/")
  .then((response) => response.json())
  .then((response) => {
    console.log("response: ", response);
  })
  .catch((error) => {
    console.log("error ", error);
  });
