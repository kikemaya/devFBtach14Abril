"use strict";

const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => {
      let res = response.json();
      console.log(res);
      return res;
    })
    .then((data) => {
      console.log(data);
      return 4;
    })
    .then((cuatro) => console.log(cuatro))
    .catch((data) => console.error(data));
};

getData();
