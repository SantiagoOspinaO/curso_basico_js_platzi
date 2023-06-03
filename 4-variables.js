var name = 'Santiago'
console.log(name)

var edad = 24
console.log('edad: ' + edad)

var elements = ['Computadora', 'Celular']
for (let i in elements) {
    console.log('elements: ' + elements[i])
}


var person = {
    name: 'John',
    age: 30,
    gender: 'M',
    birthday: new Date(2014, 1, 1)
}
for (const i in person) {
    console.log(`${i}: ${person[i]}`);
}
