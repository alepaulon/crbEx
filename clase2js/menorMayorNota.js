// Tenemos un array de alumnos, con su nombre y su nota. Encontrar al alumno de menor nota y al de mayor nota. ¿Qué sucede si tenemos dos alumnos con 10?

const alumnos = [
    {
        nombre: "Alejo",
        nota: 10,
    },
    {
        nombre: "Pepe",
        nota: 5,
    },
    {
        nombre: "Mario",
        nota: 7,
    },
    {
        nombre: "Jorge",
        nota: 2,
    }
];

/* alumnos.sort(function(a,b){
    return a.nota - b.nota;
});

console.log(alumnos);
*/

let notaMayor = 0;
let nombreNotaMayor = "";
let notaMenor = 0;
let nombreNotaMenor = "";


alumnos.forEach((alumno) => {
    if (alumno.nota > notaMayor) {
        notaMayor = alumno.nota;
        nombreNotaMayor = alumno.nombre;
    }
})

console.log(notaMayor);
console.log(nombreNotaMayor);