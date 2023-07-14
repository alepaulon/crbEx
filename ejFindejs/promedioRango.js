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


