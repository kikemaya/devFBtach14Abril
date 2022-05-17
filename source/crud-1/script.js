"use strict";

/*
create - post
read - get
update -put
delete -delete

*/

const d = document;

const h1 = d.querySelector("h1");
const input_todo = d.getElementById("input-todo");
const btn_add = d.getElementById("btn-add");
const content_w = d.getElementById("content-wrapper");

const URL = "http://localhost:3000/data/";

//crea los li en el do,
const printTask = (task, id) => {
  let li = d.createElement("li");
  li.dataset.id = id;
  li.textContent = task;

  const btn_1 = d.createElement("button");
  const btn_2 = d.createElement("button");
  btn_1.textContent = "Editar";
  btn_2.textContent = "Eliminar";

  btn_1.addEventListener("click", () => {
    updateData(input_todo.value, id);
  });

  btn_2.addEventListener("click", () => {
    deleteData(id);
  });

  li.append(btn_1, btn_2);
  content_w.appendChild(li);
};

//read -hace un peticion get a la url base y con ayuda de print task, impirmir en el dom la indo dinámica
const getData = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        printTask(element.task, element.id);
      }); // dinujo un li en cada interación
    })
    .catch((error) => console.error(error));
};

getData();

//create - hace un peticion, recibe una data y encia un parámetro
const sendData = (data) => {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      task: `${data}`,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

//update - hace una petcion put, se ejecuta porque esta guardando el boton de editar
const updateData = (task, id) => {
  fetch(URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: `${task}` }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

//delete, elima accediendo a la url que le estoy pasando
const deleteData = (id) => {
  fetch(URL + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

//post - se ejecuta cuando creo un nuevo elemento por medio de este boton
btn_add.addEventListener("click", (e) => {
  sendData(input_todo.value);
});
