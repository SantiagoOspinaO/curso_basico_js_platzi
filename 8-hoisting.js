/* Cuando las varibles y las funciones se procesan antes de que se ejecute caulquier tipo de codigo. */

// Se ejecuta
console.log(myName)
var myName = 'Santiago'
// Esto es lo que hace JavaScript cuando se ejecuta [4,5]
var myName = undefined
console.log(myName)


// Se ejecuta
var myName = undefined
console.log(myName)
myName = 'Santiago'
// Esto es lo que hace JavaScript cuando se ejecuta [11,14]
var myName = undefined
console.log(myName + ' soy ese hoisting')
myName = 'Santiago'


hey()
function hey() {
    console.log('Hola ' + myName)
}
var myName = 'Santiago'