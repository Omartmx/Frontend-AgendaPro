import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { login } from "../services/authService";
import "../styles/login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await login(email, password);

            console.log(response);

            localStorage.setItem("token", response.token);

            alert("Login correcto");

        } catch (error) {

            alert("Usuario o contraseña incorrectos");

        }

    }

    return (

        <div className="login-container">

            <div className="login-box">

                <h2>LOGIN</h2>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <FaUser />
                        <input
                            type="email"
                            placeholder="Usuario"
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

                    <button className="login-btn">
                        Iniciar sesión
                    </button>

                </form>

            </div>

        </div>

    )

}

export default Login