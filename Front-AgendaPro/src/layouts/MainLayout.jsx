import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function MainLayout({ children }) {

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Topbar />

        <div className="page-content">

          {children}

        </div>

      </div>

    </div>

  );

}

export default MainLayout;