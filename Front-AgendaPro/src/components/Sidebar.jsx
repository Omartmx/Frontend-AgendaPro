import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>AgendaPro</h2>

      <nav>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/usuarios">Usuarios</Link>
        <Link style={styles.link} to="/especialistas">Especialistas</Link>
        <Link style={styles.link} to="/horarios">Horarios</Link>
        <Link style={styles.link} to="/bloques-horarios">Bloques</Link>
        <Link style={styles.link} to="/citas">Citas</Link>
        <Link style={styles.link} to="/agendar-cita">Agendar Cita</Link>
        <Link style={styles.link} to="/perfil">Perfil</Link>
      </nav>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "240px",
    background: "#111827",
    color: "white",
    padding: "20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  logo: {
    marginBottom: "30px"
  },
  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    marginBottom: "15px"
  }
};

export default Sidebar;