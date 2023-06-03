
var opciones = ["Piedra", "Papel", "Tijera"]
var opcionAleatoria = opciones[Math.floor(Math.random() * opciones.length)]
var otraOpcionAleatoria = opciones[Math.floor(Math.random() * opciones.length)]

const machine = opcionAleatoria
console.log("machine: " + machine)
const user = otraOpcionAleatoria
console.log("user: " + user)

const play = (user, machine) => {
    if (
        (user === "Piedra" && machine == "Tijera") ||
        (user === "Papel" && machine === "Piedra") ||
        (user === "Tijera" && machine === "Papel")) {
            
        console.log("¡User Win!");

    } else if (user === machine) {
        console.log("¡Draws!")

    } else {
        console.log("¡Machine Win!")
    }
}
play(user, machine)