/** DESAFÍO PARTE  1**/

// FUCNION PARA AGREGAR NUEVOS PACIENTES
let agregarPacientes = (area, hora, especialista, paciente, rut, prevision) => {
  let nuevoPaciente = {
    horaDeAtencion: hora,
    medicoEspecialista: especialista,
    nombreDelPaciente: paciente,
    rutDelPaciente: rut,
    prevision: prevision,
  };
  area.push(nuevoPaciente);
};

agregarPacientes(
  traumatologia,
  "09:00",
  "René Poblete",
  "Ana Gellona",
  "13123329-7",
  "ISAPRE"
);
agregarPacientes(
  traumatologia,
  "09:30",
  "Maria Solar",
  "Ramiro Andrade",
  "12221451-K",
  "FONASA"
);
agregarPacientes(
  traumatologia,
  "10:00",
  "Raul Loyola",
  "Carmen Isla",
  "10112348-3",
  "ISAPRE"
);
agregarPacientes(
  traumatologia,
  "10:30",
  "Antonio Larenas",
  "Pablo Loayza",
  "13453234-1",
  "ISAPRE"
);
agregarPacientes(
  traumatologia,
  "11:00",
  "Matias Aravena",
  "Susana Poblete",
  "14345656-6",
  "FONASA"
);

/** DESAFÍO PARTE 2 **/

radiologia.pop();
radiologia.shift();

/** DESAFÍO PARTE 3 **/

let mostrarPacientesConGuion = (area) => {
  document.write(`
    </br>
    <h2> Lista de pacientes separados por guiones</h2>
    </br>
  `);
  area.forEach((paciente) => {
    document.write(`
      <p>${paciente.horaDeAtencion} - ${paciente.medicoEspecialista} - ${paciente.rutDelPaciente} - ${paciente.prevision} - ${paciente.prevision}</p>
      </br>
      `);
  });
};
mostrarPacientesConGuion(dental);

/**DESAFÍO PARTE 4 */

let todasLasAreas = [dental, traumatologia, radiologia];

document.write(`
  </br>  
  <h2>Listado de nombres</h2>
  </br>
`);

todasLasAreas.forEach((area) => {
  area.forEach((paciente) => {
    document.write(`<p>${paciente.nombreDelPaciente}</p>`);
  });
});

/**DESAFÍO PARTE 5 */

let dentalFiltrado = dental.filter( function (paciente) {
  return paciente.prevision === "ISAPRE";
})
console.log(dentalFiltrado);

/**DESAFÍO PARTE 6 */

let traumatologiaFiltrado = traumatologia.filter( function (paciente) {
  return paciente.prevision === "FONASA";
})
console.log(traumatologiaFiltrado);