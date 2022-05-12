//Francisco
class Animal1 {
    
    constructor(comida, peligroso, medio) {
        this.comida = comida,
        this.peligroso = peligroso,
        this.medio = medio
    }
    getComida() {
        return console.log(`comida: ${this.comida}`);
    }

}

let perro1 = new Animal1("croquetas", "docil", "tierra")
console.log(perro1)
perro1.getComida()

class Humano extends Animal1 {
    constructor(comida, peligroso, medio, habla) {
        super(comida, peligroso, medio);
        this.habla = habla;
    }
}

let humano = new Humano("lo que sea", "si", "tierra", "si");
console.log(humano);
// humano.comida()

//Emilio
class Animal {

    constructor(region, vida, habitat) {
        this.region = region,
        this.vida = vida,
        this.habitat = habitat
    }

    Longevidad() {
        return console.log(`Esperanza de vida: ${this.vida}`);
    }
    
}

let pez = new Animal("mar", "10 años", "agua")

class Humano extends Animal{

    constructor(region, vida, habitat, altura, nombre) {
        super(region, vida, habitat)
        this.alturaConstructor = altura
        // this.nombre = "Emilio"
        this.nombreConstructor = nombre
    }

}

let Hombre = new Humano("tierra", "85 años", "pavimento", "1.78cm", "Atenas")

console.log(pez)
console.log(Hombre)
Hombre.Longevidad()

//Cristian
class Animal {

    constructor(color, sonido, especie) {
        this.color = color,
        this.sonido = sonido,
        this.especie = especie
    }
    pigmentacion (){
        return console.log(`color: ${this.color}`);
    }
    saludar() {
        return console.log('holaaaaa');
    }
} 
class Humano extends Animal {
    constructor(color, sonido, especie, altura) {
        super(color, sonido, especie)
        this.altura = altura
    }
}

let persona = new Humano ("varios", "habla", "humano", "2m")
console.log(persona);
persona.pigmentacion()
persona.saludar()