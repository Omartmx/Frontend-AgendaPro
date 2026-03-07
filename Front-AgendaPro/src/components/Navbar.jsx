import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          AgendaPro
        </Link>

        {/* MENÚ */}
        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/#servicios">Servicios</Link>
          <Link to="/#contacto">Contacto</Link>
        </nav>

        {/* BOTONES */}
        <div className="auth-buttons">
          <Link to="/login" className="btn-login">
            Iniciar sesión
          </Link>

          <Link to="/register" className="btn-register">
            Registrarse
          </Link>
        </div>

      </div>

    </header>
  );
}

export default Navbar;