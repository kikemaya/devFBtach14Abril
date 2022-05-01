'use strict'

function saludar(){
    return console.log("hola mundo");
}

function ejecutarFuncion(otraFuncio ) {
    return otraFuncio(saludar)
    
}


const Saludar = () =>{
    return console.log(hola, salvador)
}

const Ejecutarfuncion = (OtraFuncion) =>{
    return OtraFuncion(Saludar)
}
Ejecutarfuncion(Saludar);

//EJEMPLOSEN LAS CLASES 


//SOLUCION 1er alumno
const saludar = (nombre) => console.log('Hola ' + nombre);

const saludo = (nombre, accion) => accion(nombre);

saludo('Samantha', saludar)

//SOLUCION 2do alumno
const saludo = (nombre) => console.log(`Hola ${nombre}`);

const saludasion = (nombre, afun) => afun(nombre)

saludasion ("Criss", saludo)