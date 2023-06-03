
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]

var articulosFilter = articulos.filter(function (articulo) {
    return articulo.costo <= 500
})
console.log(articulosFilter)

var nombreArticulo = articulos.map(function (articulo) {
    return articulo.nombre
})
console.log(nombreArticulo)

var encuentraArticulo = articulos.find(articulo => {
    return articulo.nombre === "Laptop"
})
console.log(encuentraArticulo)

articulos.forEach(articulo => {
    console.log(articulo.nombre)
});

var articulosBaratos = articulos.some(articulo => {
    return articulo.costo <= 700
})
console.log(articulosBaratos)