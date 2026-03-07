import { useState } from "react";

function AgendarCitaForm() {

  const [paciente, setPaciente] = useState("");
  const [especialista, setEspecialista] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Cita agendada correctamente");

    setPaciente("");
    setEspecialista("");
    setFecha("");
  };

  return (

    <form onSubmit={handleSubmit} className="form">

      <label>Paciente</label>

      <input
        type="text"
        value={paciente}
        onChange={(e)=>setPaciente(e.target.value)}
        required
      />

      <label>Especialista</label>

      <input
        type="text"
        value={especialista}
        onChange={(e)=>setEspecialista(e.target.value)}
        required
      />

      <label>Fecha</label>

      <input
        type="date"
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
        required
      />

      <button className="btn-primary">
        Agendar Cita
      </button>

    </form>

  );
}

export default AgendarCitaForm;