export default function Dashboard() {

  return (
    <div className="page">

      <h1>Dashboard</h1>

      <div className="grid-cards">

        <div className="card">
          <h3>Usuarios</h3>
          <p>Gestión de usuarios del sistema</p>
        </div>

        <div className="card">
          <h3>Especialistas</h3>
          <p>Administrar especialistas médicos</p>
        </div>

        <div className="card">
          <h3>Citas</h3>
          <p>Gestión de citas médicas</p>
        </div>

        <div className="card">
          <h3>Horarios</h3>
          <p>Control de horarios disponibles</p>
        </div>

      </div>

    </div>
  );
}