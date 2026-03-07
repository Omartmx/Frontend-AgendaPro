import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function MainLayout({ children }) {
  return (
    <div style={styles.container}>
      <Sidebar />

      <div style={styles.main}>
        <Topbar />

        <div style={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex"
  },
  main: {
    flex: 1,
    background: "#f3f4f6",
    minHeight: "100vh"
  },
  content: {
    padding: "30px"
  }
};

export default MainLayout;