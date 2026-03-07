import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importar páginas
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/Usuarios";
import Especialistas from "../pages/Especialistas";
import Horarios from "../pages/Horarios";
import BloquesHorarios from "../pages/BloquesHorarios";
import Citas from "../pages/Citas";
import AgendarCitas from "../pages/AgendarCitas";
import PerfilUsuario from "../pages/PerfilUsuario";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Ruta principal */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Gestión de usuarios */}
        <Route path="/usuarios" element={<Usuarios />} />

        {/* Gestión especialistas */}
        <Route path="/especialistas" element={<Especialistas />} />

        {/* Horarios */}
        <Route path="/horarios" element={<Horarios />} />

        {/* Bloques horarios */}
        <Route path="/bloques-horarios" element={<BloquesHorarios />} />

        {/* Citas */}
        <Route path="/citas" element={<Citas />} />

        {/* Agendar cita */}
        <Route path="/agendar-cita" element={<AgendarCitas />} />

        {/* Perfil usuario */}
        <Route path="/perfil" element={<PerfilUsuario />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;