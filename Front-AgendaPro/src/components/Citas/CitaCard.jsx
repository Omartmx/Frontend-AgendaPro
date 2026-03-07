function CitaCard({ cita }) {

  return (
    <div className="card">

      <h3>Cita</h3>

      <p>
        <strong>Paciente:</strong> {cita.paciente}
      </p>

      <p>
        <strong>Fecha:</strong> {cita.fecha}
      </p>

      <button className="btn-primary">
        Ver detalles
      </button>

    </div>
  );
}

export default CitaCard;