'use strict'

class Animal {

    constructor(color, sonido, especie) {
        this.especie = especie,
        this.color = color,
        this.sonido = sonido
    }
    
    emitirSonido() {
        return console.log(`emitiendo sonido: ${this.sonido}`);
    }

}

class Jirafa extends Animal{

    constructor(nombre, color, sonido, tam) {
        super(nombre, color, sonido)
        this.tam = tam
    }

}

let yiraf = new Jirafa("yiraf", "blanca", "brrrr", "4m")

console.log(yiraf);

//instanciar una clase, para crear un objeto
//el objeto ya es especìfico
let gato = new Animal("rojo", "Miau!", "gato")
let perro = new Animal("cafe", "Guau", "Perro")
let vaca = new Animal("Pinta", "Mu!", "Vaca")

//para acceder a sus propiedades y mètodos, lo hacemos con la notaciòn de punto
console.log(gato)
console.log(gato.color)
console.log(gato.sonido)
gato.emitirSonido()
vaca.emitirSonido()
