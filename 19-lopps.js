
var students = ["Mario", "Sergio", "Rosa", "Daniel"]

function saludar(student) {
    console.log(`Hola, ${student}`)
}

/*for (let index = 0; index < students.length; index++) {
    saludar(students[index])
}

students.forEach(element => {
    saludar(element)
});*/

/*while (students.length > 0) {
    console.log(students)
    var studentt = students.shift()
    saludar(studentt)
}*/

function solution(students, deathCount, nuevo) {

    for (deathCount; deathCount > 0; deathCount--) {
        students.pop();
    }
    students.push(nuevo);
    return students;
}

console.log(solution(students, 3, "Santi"))