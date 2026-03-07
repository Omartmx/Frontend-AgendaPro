function Topbar() {
  return (
    <div style={styles.topbar}>
      <h3>Sistema de Gestión de Citas</h3>

      <div>
        <span>Usuario</span>
      </div>
    </div>
  );
}

const styles = {
  topbar: {
    background: "#fff",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between"
  }
};

export default Topbar;