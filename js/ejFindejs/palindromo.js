//Definir una función que devuelva TRUE si el argumento recibido como texto un palíndromo, osea que se lee de la misma forma de izquierda y derecha.
//Ejemplo de palíndromo "¿Acaso hubo búhos acá?".

/* solución con RegEx, faltaría encontrar para sacar acentos */

function esPalindromo(cadena) {
  const cadenaSinDiacriticos = cadena
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const cadenaLimpia = cadenaSinDiacriticos
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const esPalindromo =
    cadenaLimpia === cadenaLimpia.split("").reverse().join("");

  if (esPalindromo) {
    return "Es un palíndromo";
  } else {
    return "No es un palíndromo";
  }
}

console.log(esPalindromo("¿Acaso hubo búhos acá?"));
console.log(esPalindromo("¿Acaso hubo búhos acábcde?"));