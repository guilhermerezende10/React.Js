import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/home" className={styles.navLink}>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/uso-aceitavel" className={styles.navLink}>
            <span>Uso Aceitável</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/seguranca-fisica-ambiental" className={styles.navLink}>
            <span>Segurança Física e Ambiental</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/backup-recuperacao" className={styles.navLink}>
            <span>Backup e Recuperação</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
