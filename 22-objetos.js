
var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    detalles: function () {
        console.log(`Auto: ${this.modelo}, ${this.anio}`)
    }
}

auto.detalles()