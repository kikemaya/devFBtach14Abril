"use strcit";

const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

getData();

("use strict");

const getData1 = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
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
    .catch((error) => console.error(error));
};

getData1();
