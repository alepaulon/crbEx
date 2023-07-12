//Dado el siguiente string, obtener las letras que estén en mayúscula: “LaCrOmbiNeTa”

let string = 'LaCrOmbiNeTa'
let letrasMayusculas = []
string.split('').filter(item => {
    if (item === item.toUpperCase()) {
        letrasMayusculas.push(item)
    }
})
console.log(letrasMayusculas)