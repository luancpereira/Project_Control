import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import {
  AiOutlinePlusCircle,
  AiOutlineUserAdd,
  AiOutlineUser,
} from "react-icons/ai";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";

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
                  <BsFillHouseDoorFill color="white" />
                  <Link to="/home">Home</Link>
                </li>
                <li className={styles.item}>
                  <AiOutlinePlusCircle color="white" />
                  <Link to="/projectcardsql">Projetos</Link>
                </li>
                <li className={styles.item}>
                  <AiOutlineUserAdd color="white" />
                  <Link to="/register">Novo Usuario</Link>
                </li>
                <li className={styles.item}>
                  <div>
                    <AiOutlineUser color="white" />
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
                  <BsFillHouseDoorFill color="white" />
                  <Link to="/home">Home</Link>
                </li>
                <li className={styles.item}>
                  <AiOutlinePlusCircle color="white" />
                  <Link to="/projectcardsql">Projetos</Link>
                </li>
                <li className={styles.item}>
                  <div>
                    <AiOutlineUser color="white" />
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
