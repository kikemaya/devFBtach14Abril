"use strict";

class Animal {
  constructor(color, sonido, especie) {
    (this.especie = especie), (this.color = color), (this.sonido = sonido);
  }

  emitirSonido() {
    return console.log(`emitiendo sonido: ${this.sonido}`);
  }
}

class Jirafa extends Animal {
  constructor(nombre, color, sonido, tam) {
    super(nombre, color, sonido);
    this.tam = tam;
  }
}

let yiraf = new Jirafa("yiraf", "blanca", "brrrr", "4m");

console.log(yiraf);

//instanciar una clase, para crear un objeto
//el objeto ya es especìfico
let gato = new Animal("rojo", "Miau!", "gato");
let perro = new Animal("cafe", "Guau", "Perro");
let vaca = new Animal("Pinta", "Mu!", "Vaca");

//para acceder a sus propiedades y mètodos, lo hacemos con la notaciòn de punto
console.log(gato);
console.log(gato.color);
console.log(gato.sonido);
gato.emitirSonido();
vaca.emitirSonido();

//Crear una clase HUMANO

class Animal1 {
  constructor(comida, peligroso, medio) {
    (this.comida = comida), (this.peligroso = peligroso), (this.medio = medio);
  }

  alimento() {
    return console.log(`La especie come: ${this.comida}`);
  }
}

let perro1 = new Animal1("croquetas", "docil", "tierra");
console.log(perro1);

//la herencia se da entre clases. No entre entre objetos
class Humano extends Animal1 {
  constructor(comida, peligroso, medio, habla) {
    super(comida, peligroso, medio);
    this.habla = habla;
  }
}

let humano = new Humano("lo que sea", "si", "tierra", "si");

console.log(humano);
humano.alimento();
