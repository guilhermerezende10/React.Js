import styled from "styled-components";
import MainNav from "./MainNav";
import styles from "./SideBar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <MainNav />
    </aside>
  );
}

export default Sidebar;
