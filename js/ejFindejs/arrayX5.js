//Crear una función que reciba un array y genere una copia del mismo pero con todos los elementos multiplicados por 5. Se debe usar la Asignación de multiplicación: x*=y (PPT Clase 3)
let arr = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6];


function quintuplicarArray(a, multiplo){
    let arrX5 = []
    for (let i = 0; i < a.length; i++) {
        arrX5.push(a[i] *= multiplo);
    }
    
    return console.log(arrX5);
}


// opc 2

/*
const quintuplicarArray(arrOfNumbers) => {
    const quintCopy = arrOfNumbers.map((num) => {
        return (number *= 5);
    });
}
*/ 

quintuplicarArray(arr,5);
quintuplicarArray(arr2,5);
