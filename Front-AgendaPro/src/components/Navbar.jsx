import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <Link to="/" className="logo">
          AgendaPro
        </Link>

        <nav className="nav-links">

          <Link to="/">Inicio</Link>

          <Link to="/login" className="btn-login">
            Iniciar sesión
          </Link>

          <Link to="/registrar" className="btn-register">
            Crear Cuenta
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;