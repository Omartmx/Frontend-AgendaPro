import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }) {

  const { user } = useAuth();

  // Si NO hay usuario autenticado
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado
  return children;
}

export default ProtectedRoute;