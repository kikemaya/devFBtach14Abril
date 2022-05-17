"use strict";

const getData = async () => {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await reponse.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getData();
