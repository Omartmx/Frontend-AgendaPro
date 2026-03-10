import { useState } from "react";
<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Register() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Usuario registrado:", form);

    login(form);

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">

      <h2>Crear cuenta</h2>

      <form onSubmit={handleSubmit} className="auth-form">

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Registrarse
        </button>

      </form>

      <p>
        ¿Ya tienes cuenta?{" "}
        <Link to="/login">Inicia sesión</Link>
      </p>

    </div>
  );
=======
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import api from "../services/api";
import "../styles/login.css";
import { Link } from "react-router-dom";

function Register() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [idRol, setIdRol] = useState(1);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/Auth/register", {
                nombre,
                email,
                password,
                idRol
            });

            alert("Usuario registrado correctamente");

        } catch (error) {

            console.error(error);
            alert("Error al registrar usuario");

        }

    };

    return (

        <div className="login-container">

            <div className="login-box">

                <Link to="/" className="back-btn">
                    ← Volver al login
                </Link>

                <h2>REGISTRAR</h2>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <FaUser />
                        <input
                            type="text"
                            placeholder="Nombre"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <FaEnvelope />
                        <input
                            type="email"
                            placeholder="Correo"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <FaLock />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* LISTA DESPLEGABLE */}
                    <div className="input-group">

                        <select
                            value={idRol}
                            onChange={(e) => setIdRol(parseInt(e.target.value))}
                            style={{
                                width: "100%",
                                background: "transparent",
                                border: "none",
                                color: "white",
                                outline: "none"
                            }}
                        >

                            <option value={1}>Admin</option>
                            <option value={2}>Usuario</option>

                        </select>

                    </div>

                    <button className="login-btn">
                        Registrar
                    </button>

                </form>

            </div>

        </div>

    );

>>>>>>> origin/DevelopOmar
}

export default Register;