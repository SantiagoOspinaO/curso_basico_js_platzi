var a = 5
var b = 2

// Declarativa
function myFunction() {
    return a + b
}

// Expresión
var myFunction2 = function(a, b) {
    return a - b
}

console.log(myFunction())
console.log(myFunction2(a, b))

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`)
}
saludarEstudiante('Carlos')

function sumar(a, b) {
    return console.log(a + b)
}
sumar(4, -5);