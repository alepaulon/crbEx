//Crear una función que reciba un arreglo y devuelva el promedio de un rango especificado. 
//Es decir, debe recibir (arreglo, inicio, fin) y deberá calcular el promedio de los valores que se encuentran en ese rango.

let arr = [123, 111, 129, 542, 321, 453, 221, 759, 651];
let rango = []


function promedioRango(array, inicio, fin){
    let sum = 0;
    
    array.sort((a, b) => a - b);
    rango = array.filter(numeros => {
        return (numeros >= inicio && numeros <= fin)
    } )
    let b = rango.length;
    
    if(b == 0){
        return 0;
    } else {
        for (let i = 0; i < b; i++) {
            sum = (sum + rango[i]);
        }
        let promedio = sum/b;
        return promedio;
    }
}

console.log(promedioRango(arr,150,500));
console.log(promedioRango(arr,100,600));

// opc 2

const arrNumbers = [10, 12, 15, 18, 45, 66, 89];
const findAverage = (array, start, finish) => {

    let numbersToAverage = array.slice(start, finish + 1);
    let divide = numbersToAverage.length
    let sum = numbersToAverage.reduce((previous, current) => {
        return previous + current
    })
    let average = sum /= divide
    return console.log(average)
};
findAverage(arrNumbers, 3, 6);

//opc 3

const array2 = [7, 8, 8, 6, 5, 6, 4, 10];
function devuelvePromedio(array) {
  const sumaTotal = array.reduce(function(acc, value) {
    return acc + value;
  }, 0);
  const promedio = sumaTotal / array.length;
  return promedio;
}
const promedioArray2 = devuelvePromedio(array2);
console.log(promedioArray2);
