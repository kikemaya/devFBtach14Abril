'use strict'

//clase es un molde/plantilla en donde van las propiedades generales de una cosa
class Animal {

    //los atributos de esa plantilla, se definen en un metodo constructor
    constructor(color, sonido, especie) {
        //la clave de esos atributos, se indica por medio de this.propiedad, y su valor es la asignacion de la derecha
        this.especie = especie,
        this.color = color,
        this.sonido = sonido
    }
    
    emitirSonido() {
        return console.log(`emitiendo sonido: ${this.sonido}`);
    }

}


//La herencia, se da entre clases. No entre objetos y clases
class Jirafa extends Animal{

    constructor(nombre, color, sonido, tam) {
        super(nombre, color, sonido)
        this.tam = tam
    }

}

//los objetos, son instancias de una clase
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

yiraf.emitirSonido()

//Crear una clase Animal con 3 propiedades, y un metodo
//crear una clase Humano con las propiedades de Animal (heredadas)
//Crear un objeto a partir de la clase humano e imprimir las propiedades y el mètodo de Humano