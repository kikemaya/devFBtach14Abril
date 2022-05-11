class Animals{

    constructor( height, weigth, favoriteFood) {
        this.heigth = height,
        this.weigth = weigth,
        this.favoriteFood = favoriteFood
    }

    mostrarAltura(){
        return console.log(`Mide: ${this.heigth}`)
    }
    
}

class Humano extends Animals{

    constructor(height, weigth, favoriteFood, nationality){
        super(height, weigth, favoriteFood)
        this.nationality = nationality
    }

}

let pez = new Animals("330 gramos", "7.8 cm", "Algas")
console.log(pez)

let Pedro = new Humano("58 kg", "1.80", "Pasta", "Argentino")
console.log(Pedro)

Pedro.mostrarAltura()