
var marcaArray = ["Tesla", "Nissan", "Toyota", "Honda"]
var modeloArray = ["Gol", "Model 3", "TXL"]
var annioArray = [2018, 2019, 2020]

function Auto(marca, modelo, anio) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
}

for (var i = 0; i <= 10; i++) {

    var marca = marcaArray[Math.floor(Math.random() * marcaArray.length)]
    var modelo = modeloArray[Math.floor(Math.random() * modeloArray.length)]
    var annio = annioArray[Math.floor(Math.random() * annioArray.length)]

    var autoNuevo = new Auto(marca, modelo, annio);

    console.log(autoNuevo);
}