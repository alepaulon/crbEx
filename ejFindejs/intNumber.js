//Crear una función que reciba un numero entero y devuelva un error en caso de que el argumento recibido no sea del tipo solicitado.

function intNumber(num){
    if (Number.isInteger(num)) {
        console.log("El número ingresado es un número entero");        
    } else {
        console.log("El número ingresado NO es un número entero");
    }
}

intNumber(10);
intNumber(10.2);