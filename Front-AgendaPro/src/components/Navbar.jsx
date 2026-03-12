import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center bg-slate-100 py-4">

      {/* CONTENEDOR */}
      <div className="w-full max-w-6xl bg-white border border-slate-200 rounded-xl px-8">

        {/* GRID */}
        <div className="grid grid-cols-3 items-center h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo AgendaPro"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>

          {/* MENU CENTRADO */}
          <nav className="flex justify-center gap-8 text-sm font-medium text-slate-700">
            <Link to="/">Inicio</Link>
            <a href="#como">Cómo funciona</a>
            <a href="#especialistas">Especialistas</a>
          </nav>

          {/* BOTONES DERECHA */}
          <div className="flex justify-end items-center gap-4">
            <Link to="/login">Login</Link>

            <Link
              to="/registrar"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
            >
              Registrarse
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}

export default Navbar;