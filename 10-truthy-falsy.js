
console.log(Boolean())
console.log(Boolean(0))
console.log(Boolean(-1))
console.log(Boolean(null))
console.log(Boolean(NaN))// Not and Number
console.log(Boolean(undefined))
console.log(Boolean(false))
console.log(Boolean(""))
console.log(false && "dog")

console.log(Boolean(1))// Para 1 o cualquier número diferente de cero (0)
console.log(Boolean("a"))// Para cualquier caracter o espacio en blanco en el string
console.log(Boolean(" "))
console.log(Boolean([]))// Aunque el array esté vacío
console.log(Boolean({}))// Aunque el objeto esté vacío
console.log(Boolean(function() { }))// Cualquier función es verdadera también

/**
 * -> NaN: En JS significa Not a Number y quiere decir que esa operación necesita de dos números o más para poder operarse.
 * -> Undefined: Undefined es un valor especial de JavaScript que existe cuando no se le asigna un valor a una variable.
 * Es decir, la variable si existe o ha sido creada pero no se le ha asignado ningún valor. (Su valor es indefinido).
 * -> Null: null es cuando algo no existe. (De plano no existe para nada y ya esta)
 */