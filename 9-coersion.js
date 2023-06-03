/**
 * Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
 * Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
 * Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
 */

console.log(4 + '7') // coersion implicita, por la concatenacion
console.log(4 * '7') // coersion implicita
console.log(2 + true) 
console.log(false - 3)

var a = 20
var b = a + ''
var c = String(a) // coersion explícita
console.log(c) // Obligamos a la variable a se convierta en un 20 string
var d = Number(c) // coersion explícita
console.log(d) // Obligamos a la variable a se convierta en un 20 number