import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <aside className="sidebar">

      <h2 className="logo">AgendaPro</h2>

      <nav>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/especialistas">Especialistas</Link>
        <Link to="/horarios">Horarios</Link>
        <Link to="/citas">Citas</Link>
        <Link to="/agendar-cita">Agendar</Link>
        <Link to="/perfil">Perfil</Link>

      </nav>

    </aside>

  );
}

export default Sidebar;