// resolución 1
const alumno1 = {
    nombre: "Alejo",
    apellido: "Paulón",
    edad: 24,
    lengProg: "JavaScript"
}

const alumno2 = {
    nombre: "Pepe",
    apellido: "Fernandez",
    edad: 32,
    lengProg: "Python"
}

const alumno3 = {
    nombre: "Mario",
    apellido: "Perez",
    edad: 21,
    lengProg: "Java"
}

function alumnoYLengProg(alumno) {
    console.log(`${alumno.nombre} sabe ${alumno.lengProg}`);
}

alumnoYLengProg(alumno1);
alumnoYLengProg(alumno2);
alumnoYLengProg(alumno3);


