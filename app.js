const readlineSync = require("readline-sync");
const { mostrarListaEstudiantes } = require(`./lista_estudiantes`);

//Funcion registrarEstudiantes
const registrarEstudiantes = () => {
  const cantidadEstudiantes = readlineSync.question(
    "Ingresar la cantidad de estudiantes a registrar:"
  );

  //arreglo
  const estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readlineSync.question(
      `Ingrese el nombre del estudiante ${i}:`
    );

    const edad = readlineSync.question(`Ingrese la edad de ${nombre}:`);

    //objeto
    const estudiante = {
      nombre,
      edad,
    };

    estudiantes.push(estudiante);
  }

  mostrarListaEstudiantes(estudiantes);
};

registrarEstudiantes();
