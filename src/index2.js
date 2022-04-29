const saludar = ((name) =>  {
    return console.log("Hola", name);
})

const calbacks = ((ejecucion) => {
    return ejecucion
})

calbacks(saludar("nicolas"))