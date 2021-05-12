// Crear una una estructura de clases para una biblioteca

class Animal {

    constructor(piernas, color, nombre) {
        this.piernas = piernas
        this.color = color
        this.nombre = nombre
    }

    hablar() {
        console.log('Sin sonido determinado')
    }
}

class Gato extends Animal {

    constructor(color, nombre) {
        super(4, color, nombre)
    }

    hablar() {
        console.log('miau')
    }
}

class Perro extends Animal {
    constructor(color, nombre) {
        super(4, color, nombre)
    }
    hablar() {
        console.log('guau')
    }
}


const miko = new Gato('rojo', 'miko')
const tofe = new Gato('blanca y marrón', 'tofe')

console.log(miko.nombre)
console.log(miko.color)
console.log(miko.piernas)

console.log(tofe.nombre)
console.log(tofe.color)
console.log(tofe.piernas)

tofe.hablar()