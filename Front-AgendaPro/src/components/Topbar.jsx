import { useAuth } from "../hooks/useAuth";

function Topbar(){

  const { user } = useAuth();

  return(

    <header className="topbar">

      <h3>Panel de Control</h3>

      <div className="user-info">

        <span>{user?.name || "Usuario"}</span>

      </div>

    </header>

  );
}

export default Topbar;