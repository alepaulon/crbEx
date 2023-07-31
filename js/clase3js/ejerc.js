const productos = [
  { 
    precio: 553, 
    inventario: 87, 
    marca: "walmart", 
    nombre: "Leche" 
  },
  { 
    precio: 244, 
    inventario: 59, 
    marca: "carrefour", 
    nombre: "Queso" 
  },
  { 
    precio: 340, 
    inventario: 92, 
    marca: "carrefour", 
    nombre: "Yogur" 
  },
  {
    precio: 169,
    inventario: 18,
    marca: "carrefour",
    nombre: "Mantequilla",
  },
  { 
    precio: 758, 
    inventario: 25, 
    marca: "walmart", 
    nombre: "Crema" 
  },
  { 
    precio: 870, 
    inventario: 21, 
    marca: "walmart", 
    nombre: "Helado" 
  },
  { 
    precio: 82, 
    inventario: 54, 
    marca: "walmart", 
    nombre: "Natilla" 
  },
  {
    precio: 568,
    inventario: 67,
    marca: "carrefour",
    nombre: "Leche condensada",
  },
  {
    precio: 536,
    inventario: 31,
    marca: "walmart",
    nombre: "Yogur griego",
  },
  {
    precio: 307,
    inventario: 57,
    marca: "carrefour",
    nombre: "Queso crema",
  },
  { 
    precio: 976, 
    inventario: 80, 
    marca: "walmart", 
    nombre: "Nata" 
  },
  { 
    precio: 904, 
    inventario: 19, 
    marca: "walmart", 
    nombre: "Flan" 
  },
  {
    precio: 167,
    inventario: 60,
    marca: "carrefour",
    nombre: "Yogur de frutas",
  },
  {
    precio: 525,
    inventario: 56,
    marca: "walmart",
    nombre: "Leche evaporada",
  },
  {
    precio: 246,
    inventario: 32,
    marca: "walmart",
    nombre: "Helado de vainilla",
  },
  {
    precio: 785,
    inventario: 27,
    marca: "walmart",
    nombre: "Leche de almendras",
  },
  {
    precio: 286,
    inventario: 24,
    marca: "walmart",
    nombre: "Queso rallado",
  },
  {
    precio: 585,
    inventario: 48,
    marca: "walmart",
    nombre: "Yogur de fresa",
  },
  {
    precio: 84,
    inventario: 46,
    marca: "walmart",
    nombre: "Crema agria",
  },
  {
    precio: 804,
    inventario: 2,
    marca: "walmart",
    nombre: "Helado de chocolate",
  },
];

function productosDeUnaMarca(marca) {
  return productos.filter((elem) => elem.marca === marca);
};
//console.log(productosDeUnaMarca("carrefour"));

function precioMayorA(p) {
  return productos.filter((elem) => elem.precio >= p);
};
//console.log(precioMayorA(800));

const cambiarNombreMarca = (marcaInicial, marcaFinal) => {
    productos.forEach((producto) => {
        if (producto.marca === marcaInicial) producto.marca = marcaFinal;
    });
    return productos;
};

//console.log(cambiarNombreMarca("walmart", "chango mas"));

//funcion que devuelva la suma de todos los precios, el promedio, máximo y mínimo.

const prodSort = productos.sort((a, b) => a.precio - b.precio);
const cantProd = productos.length;

const devolverTodo = () => {
  const minPrecio = prodSort[0].precio;
  const maxPrecio = prodSort[prodSort.length-1].precio;
  const sumaPrecios = productos.reduce((a, b) => a + b.precio, 0);
  const promedioPrecios = sumaPrecios / cantProd;
  return console.log("La suma de todos los precios es", sumaPrecios, ". El promedio es", promedioPrecios, ". El precio máximo es", maxPrecio, "y el mínimo es", minPrecio);
}

devolverTodo();