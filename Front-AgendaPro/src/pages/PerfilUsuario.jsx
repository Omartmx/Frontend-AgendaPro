import { useAuth } from "../hooks/useAuth";

export default function PerfilUsuario() {

  const { user } = useAuth();

  return (
    <div className="page">

      <h1>Perfil de Usuario</h1>

      <div className="card">

        <p><strong>Nombre:</strong> {user?.name}</p>

        <p><strong>Email:</strong> {user?.email}</p>

        <p><strong>Rol:</strong> {user?.role}</p>

      </div>

    </div>
  );
}