import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <nav>
      <ul className="navlist">
        <li className={styles.navlink}>
          <NavLink to="/home">
            Home
          </NavLink>
        </li>
        <li className={styles.navlink}>
          <NavLink to="/uso-aceitavel">
            <span>Uso Aceitável</span>
          </NavLink>
        </li>

        <li className={styles.navlink}>
          <NavLink to="/seguranca-fisica-ambiental">
            <span>Segurança Física e Ambiental</span>
          </NavLink>
        </li>

        <li className={styles.navlink}>
          <NavLink to="/backup-recuperacao">
            <span>Backup e Recuperação</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
