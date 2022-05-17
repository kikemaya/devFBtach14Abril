"use strict";

const axios = require("axios");

axios
  .get("http://localhost:3000/usuarios")
  .then((response) => {
    console.log("reponse", response.data);
  })
  .catch((error) => {
    console.log("error message:", error.message);
  });
