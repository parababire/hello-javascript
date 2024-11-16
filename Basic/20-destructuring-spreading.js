/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración

// Sintaxis arrays, la desestructuración se da por el orden del array

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4) // imprime undefined al no existir un dato que asignar

// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9) // para no permitir la impresión de undefined le asignamos un valor por defecto

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// Sintaxis objects

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

/* Sintaxis objects con valores predeterminados, en este caso las variables creadas deben tener el mismo nombre de las propiedades del objeto */

let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2) // name2 No existe en person
console.log(age2)  // age2 No existe en person
console.log(alias2)  // alias2 No existe en person
console.log(email) // email no existe, esto cambia al darle un valor predeterminado

// Sintaxis objects con nuevos nombres de variables, acá si podemos desestructurar un objeto y asignar sus valores a nuevas variables

let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

let { name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)

// Propagación (...)

/* Sintaxis arrays, usamos ... generalmente para propagar los valores de un array al crear otra nueva mientras incluimos más datos */

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

/* Sintaxis objects, usamos ... generalmente para propagar las propiedades de un objeto al crear otro con nuevas propiedades */

let person4 = { ...person, email: "braismoure@mouredev.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)