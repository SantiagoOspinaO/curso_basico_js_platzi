// Scope Global
var myName = 'Santiago'

function nameFunction() {
    // Scope Local
    var lastName = 'Ospina'
    console.log(myName + ' ' + lastName)
}
nameFunction()
