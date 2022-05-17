'use strict'

const d = document
const input_todo = d.getElementById("input-todo")
const btn_add = d.getElementById("btn-add")
const content_w = d.getElementById("content-wrapper")
const URL = "http://localhost:3000/data/"

const printTasks = (task, id) => {

    //li
    let li = d.createElement("li")
    li.classList.add("text", "space")
    li.dataset.id = id
    li.textContent = task   
    
    //buttons
    const btn_1 = d.createElement("button")
    const btn_2 = d.createElement("button")
    btn_1.classList.add("btn-list")
    btn_2.classList.add("btn-list")
    btn_1.textContent = "Editar"
    btn_2.textContent = "Eliminar"

    btn_1.addEventListener("click", () => {
        updateData(input_todo.value, id)
    })

    btn_2.addEventListener("click", () => {
        deleteData(id)
    })

    //apenndchild
    li.append(btn_1, btn_2) //APPEND es para multiples hijos, APPENDCHILD es para uno solo
    content_w.appendChild(li)
}

const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => data.forEach(element => {
            printTasks(element.task, element.id)
        }))
        .catch(error => console.error(error))
}

const sendData = (data) => {
    fetch( URL ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "task": `${data}`
        })
    })
        .then(response => response.json)
        .then(data => console.log(data))
}

const updateData = (task, id) => {
    fetch(URL + id, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"task": `${task}`})
    })
}

const deleteData = (id) => {
    fetch(URL + id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    })
}

btn_add.addEventListener("click", (e) => {
    validacion(input_todo.value)
})

const validacion = () =>{
    if(input_todo.value){
        sendData(input_todo.value)
    } else{
        alert("Ingrese algo valido")
    }
}

getData()

//https://jsonplaceholder.typicode.com/

// https://pokeapi.co/

// https://swapi.dev/

// https://www.fbi.gov/wanted/api

// https://api.nasa.gov/

// https://rickandmortyapi.com/
