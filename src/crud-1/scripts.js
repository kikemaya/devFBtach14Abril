'use strict'

const d = document
const input_todo = d.getElementById("input-todo")
const btn_add = d.getElementById("btn-add")
const content_w = d.getElementById("content-wrapper")
const URL = "http://localhost:3000/data"

const printTasks = (task) => {

    //li
    let li = d.createElement("li")
    li.dataset.id = 9
    li.textContent = task   
    
    //buttons
    const btn_1 = d.createElement("button")
    const btn_2 = d.createElement("button")
    btn_1.textContent = "Editar"
    btn_2.textContent = "Eliminar"

    btn_1.addEventListener("click", () => {
        console.log("Editando . . .")
    })

    btn_2.addEventListener("click", () => {
        console.log("Eliminando . . .")
    })

    //apenndchild
    li.append(btn_1, btn_2) //APPEND es para multiples hijos, APPENDCHILD es para uno solo
    content_w.appendChild(li)
}

const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => data.forEach(element => {
            printTasks(element.task)
        }))
        .catch(error => console.error(error))
}

const sendData = () => {
    fetch( URL ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "task": "otra tarea mas del browser..."
        })
    })
        .then(response => response.json)
        .then(data => console.log(data))
}

btn_add.addEventListener("click", (e) => {
    sendData()
})


getData()