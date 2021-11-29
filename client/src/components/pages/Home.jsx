import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem Vindo ao <span>Project Control</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora!</p>
      <LinkButton to="/projectsregister" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  );
}

export default Home;
