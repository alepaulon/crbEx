/* Crear una función para validar los datos que se ingresaron en un formulario. Recibirá como parametros email, password y description.
Deberá comprobar que se cumplan las siguientes condiciones:
- El email debe contener "@" y ".com".
- La contraseña deberá tener entre 8 y 16 caracteres, y tener una mayúscula como mínimo.
- La descripción podrá tener hasta 400 caracteres pero no puede contener guiones (-).
Mostrar un error en caso de que no se cumplan todos los requisitos, de lo contrario dar un mensaje de registro exitoso (usando console.log)
Sugerencia:  function validation(email, password, description) { ... } */

function validation(email, pass, desc) {
  if (!email.includes("@") || !email.includes(".com")) {
    console.log("Error: El email debe contener '@' y '.com'");
    return;
  }

  if (pass.length < 8 || pass.length > 16 || !/[A-Z]/.test(pass)) {
    console.log(
      "Error: La contraseña debe tener entre 8 y 16 caracteres y al menos una mayúscula"
    );
    return;
  }

  if (desc.includes("-") || desc.length > 400) {
    console.log(
      "Error: La descripción no puede contener guiones (-) y debe tener hasta 400 caracteres"
    );
    return;
  }

  console.log("Registro exitoso");
}

validation("usuario@example.com", "Contraseña123", "Descripción del usuario");
