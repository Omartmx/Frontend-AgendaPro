import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Agenda tus citas
          <span> fácil y rápido</span>
        </h1>

        <p>
          Gestiona citas médicas y profesionales con una plataforma moderna
          y sencilla.
        </p>

        <div className="hero-buttons">

          <Link to="/login" className="btn-primary">
            Iniciar sesión
          </Link>

          <Link to="/registrar" className="btn-secondary">
            Crear cuenta
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;