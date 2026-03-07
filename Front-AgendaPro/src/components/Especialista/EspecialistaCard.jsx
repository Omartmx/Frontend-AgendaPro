function EspecialistaCard({ especialista }) {

  return (
    <div className="card">

      <h3>{especialista.nombre}</h3>

      <p>
        <strong>Especialidad:</strong> {especialista.especialidad}
      </p>

      <button className="btn-primary">
        Ver perfil
      </button>

    </div>
  );
}

export default EspecialistaCard;