"use strict";

const axios = require("axios");

axios
  .get("https://rickandmortyapi.com/api/character/")
  .then((response) => {
    console.log("response", response.data.results[0].name);
  })
  .catch((error) => {
    console.log("error", error);
  });
