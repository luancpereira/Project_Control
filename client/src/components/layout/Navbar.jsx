import { Link } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar({ validate }) {
  const usuario = localStorage.getItem("usuario");
  return (
    <>
      {validate ? (
        <div>
          <nav className={styles.navbar}>
            <Container>
              <Link to="/home">
                <img src={logo} alt="costs" />
              </Link>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link to="/home">Home</Link>
                </li>
                <li className={styles.item}>
                  <Link to="/projects">Projetos</Link>
                </li>
                <li className={styles.item}>
                  <Link to="/projectcardsql">Projetos MySql</Link>
                </li>
                <li className={styles.item}>
                  <Link to="/projectsregister">CRUD Projetos</Link>
                </li>
                <li className={styles.item}>
                  <Link to="/register">Novo Usuario</Link>
                </li>
                <li className={styles.item}>
                  <div>
                    <FcBusinessman />
                    <Link to="/home">{usuario}</Link>
                  </div>
                </li>
              </ul>
            </Container>
          </nav>
        </div>
      ) : (
        <div>
          <nav className={styles.navbar}>
            <Container>
              <Link to="/home">
                <img src={logo} alt="costs" />
              </Link>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link to="/home">Home</Link>
                </li>
                <li className={styles.item}>
                  <Link to="/projects">Projetos</Link>
                </li>
                <li className={styles.item}>
                  <Link to="/projectcardsql">Projetos MySql</Link>
                </li>
                <li className={styles.item}>
                  <Link to="/projectsregister">CRUD Projetos</Link>
                </li>
                <li className={styles.item}>
                  <div>
                    <FcBusinessman />
                    <Link to="/home">{usuario}</Link>
                  </div>
                </li>
              </ul>
            </Container>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
