
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]
frutas.push("Pera")
console.log("1. " + frutas)

frutas.pop()
console.log("2. " + frutas)

frutas.unshift("Uvas")
console.log("3. " + frutas)

frutas.shift()
console.log("4. " + frutas)

console.log("index " + frutas.indexOf("Cereza"))

const even = (element) => element === "Fresa";
console.log(frutas.some(even))