/**
 * Variables
 *
 */

// let numero = 10

// console.log(10)

// numero = 123

// console.log(numero)

// let myName = "Franco"
// let myLastName = "Meriles"

// console.log(myName + myLastName)
// console.log(myName + " " + myLastName)

// Declarar dos veces lanza un error
// let message = "This";
// let message = "That";
// console.log(message)

// También podemos declarar variables múltiples en una sola línea: 
// let user = 'Franco', age = 31, message = 'Hola';

// La versión de líneas múltiples es un poco más larga, pero se lee más fácil:
// let user = 'Franco';
// let age = 31;
// let message = 'Hola';

// Existen dos limitaciones de nombre de variables en JavaScript:
// El nombre únicamente puede incluir letras, dígitos, o los símbolos $ y _.
// El primer carácter no puede ser un dígito.
// let userName;
// let test123;

// Case Types
// const myName = "camelCase"
// const my_name = "snake_case"

// // Correctos
// let $ = 1; // Declara una variable con el nombre "$"
// let _ = 2; // y ahora una variable con el nombre "_"

// Incorrectos
// let 1a; // no puede iniciar con un dígito

// let my-name; // los guiones '-' no son permitidos en nombres


// console.log($ + _);

// const noCambia = 'miValor'

// console.log(noCambia)

// noCambia = 'nuevoValor'

/**
 * Variables
 *
 */

 // var oldWay = "im old!"

 // More

 // https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables

 /*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
1. Crear 5 variables cada una deberia tener un dato especifico (name, lastname, age, nationality, myPetName)
2. Escribir 4 console.log armando una frase con cada una de las variable.
3. Escribir 2 console.log armando una fase usando 2 o mas variables
`)
let myName = 'ezequiel'
let lastName = 'montero'
let age = '32 años'
let nationality = 'Argentino'
let pet = 'panchita'

console.log('hola mi nombre es '+ myName)
console.log('y mi apellido es ' + lastName)
console.log('tengo ' + age)
console.log('soy ' + nationality)
console.log('y mi mascota se llama ' + pet)


console.log('hola mi nombre es ' + myName,'y mi apellido es ' + lastName)
console.log('tengo' + age,'y soy', nationality)