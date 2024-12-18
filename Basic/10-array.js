/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3] // [3] array con el valor numérico 3
myArray2 = new Array(3) // [ <3 empty items> ] array con 3 espacios sin datos

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4) // en este caso se crea el array [ 1, 2, 3, 4 ]

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3) // creamos el array con tres espacios sin datos y luego son agregados
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev" /* es posible agregar más datos aunque no haya sido reservado un espacio durante la inicialización */

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure", al igual que con new Array() se puede obviar espacios
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
// myArray.length = 0 // alternativa para limpiar un array (no recomendado)
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3) /* la función slice(1, 2) devuelve la porción comenzando en 1 sin tener en cuenta el elemento de la posición 3, [ 'Moure', 'mouredev' ]. El array original no es alterado */

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3) /* La función splice(1, 3) elimina la porción desde el indice de inicio incluido el indice final y retorna los elemento ignorados, [ 'Brais', true ]. El array original es modificado */
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada") // se puede sustituir una porción con un nuevo dato.
console.log(myArray)