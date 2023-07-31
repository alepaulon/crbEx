interface Persona {
    nombre : string;
    cursor : number;
}
/*type Profesor =  Persona & {
    materias : string[];
    curso : string;
}*/
type Hobbie = {
    name : string;
    startingYear : number;
}
type Persona2 = {
    nombre : string;
    edad : number;
}
interface Alumno extends Persona2  {
    curso : number;
}
type Materias = 'Matematicas' | 'Fisica' | 'Quimica';
type Profesor2 = Persona2 & {
    materias : Materias;
    curso: string;
}
const profesor : Profesor2 = {
    nombre : 'Juan',
    curso : 'Crombie',
    edad: 20,
    materias: "Fisica"
};
interface Car {
    model: string;
    km?: number;
}
const car: Required<Car> = {
    model: 'Fiestas',
    km: 20
}
interface Point {
    x: number;
    y: number;
    z: number;
}
const puntoParcial: Partial<Point> = { // me llegan todos los parametros pero decido cuales utilizar
    x: 25
}
const puntoParcial2: Pick<Point,'x'> = { // le digo que parametros quiero y trabajo sobre el mismo
    x: 25,
}
const puntoOmit: Omit<Point,'x'> = {// contrario de Pick
    y: 25,
    z: 13
}
const punto : Readonly <Point> ={ // asigna valores y los vuelve invariables
    x: 0,
    y: 0,
    z: 13
}


