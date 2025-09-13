import { Outlet } from "react-router";
import SideBar from "./SideBar.jsx";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <header>
        <h1 className={styles.appLayoutTitle}>Políticas de Segurança da Informação</h1>
      </header>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
