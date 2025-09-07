import { Outlet } from "react-router";
import SideBar from "./SideBar.jsx";

function AppLayout() {
  return (
    <div>
      <h1>Políticas de Segurança da Informação</h1>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
