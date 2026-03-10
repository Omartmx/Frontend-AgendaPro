import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div className="sidebar">

            <h2 className="logo">Agenda</h2>

            <nav>

                <Link to="/workspace">Dashboard</Link>

                <Link to="/usuarios">Usuarios</Link>

                <Link to="/especialistas">Especialistas</Link>

                <Link to="/horarios">Horarios</Link>

                <Link to="/citas">Citas</Link>

            </nav>

        </div>

    )

}

export default Sidebar;