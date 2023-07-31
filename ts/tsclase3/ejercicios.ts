// Ejercicio 1: Validación de Campos Requeridos
//Crear un tipo de utilidad RequiredFields que tome un objeto y un conjunto de campos que deben ser requeridos,
//y devolver un nuevo objeto con los campos requeridos y sus respectivos valores.

type FormularioDeRegistro = {
  usuario: string;
  contraseña: string;
  contraseñaRepetida: string;
};

type FormularioDeLogeo = {
  email: string;
  contraseña: string;
};

type Regla<T> = (object: T) => boolean;

const datosDelUsuario: FormularioDeRegistro = {
  usuario: "apaulon",
  contraseña: "32312312",
  contraseñaRepetida: "11414144",
};

const reglaDelFormulario: Regla<FormularioDeRegistro> = (campos) => {
  if (campos.contraseña !== campos.contraseñaRepetida) return false;
  if (campos.usuario.length < 3) return false;

  return true;
};

const reglaDelFormularioDeLogeo: Regla<FormularioDeLogeo> = (campos) => {
  if (!campos.email.includes("@")) return false;

  return true;
};

// Ejercicio 2: Omitir Campos
//Utilizar el tipo de utilidad Omit para crear un nuevo tipo que omita ciertos campos de un objeto existente.
//En este caso, omitiremos el campo age del tipo Person.

// Ejercicio 3: Crear un tipo Merge :advertencia:
// En este ejercicio, crearás un tipo de utilidad llamado Merge que tomará dos tipos y los combinará.

type Person = {
  nombre: string;
  age: number;
};

type Profesor = {
  materias: string[];
};

// MERGE

type Merge<T, K> = T & K;

const profe: Merge<Person, Profesor> = {
  age: 20,
  materias: ["matematicas"],
  nombre: "Juan",
};

// OMIT

type PersonaSinEdad = Omit<Person,"age">;

const alejo: PersonaSinEdad = {
    nombre: "alejo"
};

