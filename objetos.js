let radiologia = [
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Ramirez",
    nombreDelPaciente: "Ana Navarro",
    rutDelPaciente: "12.233.344-k",
    prevision: "ISAPRE",
    tipoDeExamen: "Radiologia",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Farias",
    nombreDelPaciente: "Yerson Reyes",
    rutDelPaciente: "13.333.333-k",
    prevision: "FONASA",
    tipoDeExamen: "traumatologia",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "12.222.222-k",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "12.222.222-k",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "12.222.222-k",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
];
let traumatologia = [
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "12.222.222-k",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Ramirez",
    nombreDelPaciente: "Ana Navarro",
    rutDelPaciente: "12.233.344-k",
    prevision: "ISAPRE",
    tipoDeExamen: "Radiologia",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "12.222.222-k",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Farias",
    nombreDelPaciente: "Yerson Reyes",
    rutDelPaciente: "13.333.333-k",
    prevision: "FONASA",
    tipoDeExamen: "traumatologia",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "12.222.222-k",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
];
let dental = [
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Farias",
    nombreDelPaciente: "Yerson Reyes",
    rutDelPaciente: "13.333.333-k",
    prevision: "FONASA",
    tipoDeExamen: "traumatologia",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Ramirez",
    nombreDelPaciente: "Ana Navarro",
    rutDelPaciente: "12.233.344-k",
    prevision: "ISAPRE",
    tipoDeExamen: "Radiologia",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "12.222.222-k",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "12.222.222-k",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
  {
    horaDeAtencion: "11:00",
    medicoEspecialista: "Dr. Chapatin",
    nombreDelPaciente: "Cristina Guzmán",
    rutDelPaciente: "12.222.222-k",
    prevision: "FONASA",
    tipoDeExamen: "Dental",
  },
];

let mostrarPacientes = (area) => {
  document.write(`
    <table>
      <tr>
        <th>HORA</th>
        <th>ESPECIALISTA</th>
        <th>PACIENTE</th>
        <th>PREVISION</th>
        <tr>
        </br>
    </table>
  `);
  area.forEach((paciente) => {
    document.write(`
      <table>
        <tr>
          <th>${paciente.horaDeAtencion}</th>
          <th>${paciente.medicoEspecialista}</th>
          <th>${paciente.rutDelPaciente}</th>
          <th>${paciente.prevision}</th>
        <tr>
        </table>
        </br>
      `);
  });
};

let mostrarPrimerYUltimoPaciente = (area) => {
  document.write(`
  <table>
    <tr>
      <th>HORA</th>
      <th>ESPECIALISTA</th>
      <th>PACIENTE</th>
      <th>PREVISION</th>
    <tr>
      </br>
    <tr>
    <th>${area[0].horaDeAtencion}</th>
    <th>${area[0].medicoEspecialista}</th>
    <th>${area[0].rutDelPaciente}</th>
    <th>${area[0].prevision}</th>
    <tr>
    </br>
    <tr>
    <th>${area[area.length - 1].horaDeAtencion}</th>
    <th>${area[area.length - 1].medicoEspecialista}</th>
    <th>${area[area.length - 1].rutDelPaciente}</th>
    <th>${area[area.length - 1].prevision}</th>
    <tr>
    </br>
  `);
};
document.write(`
  <h1>Estadisticas centro médico ñuñoa</h1>
`);

document.write(`
 
  </br>
`);
mostrarPrimerYUltimoPaciente(radiologia);

mostrarPrimerYUltimoPaciente(dental);
mostrarPrimerYUltimoPaciente(traumatologia);

document.write(`
  </br>
`);

mostrarPacientes(radiologia);
mostrarPacientes(traumatologia);
mostrarPacientes(dental);
