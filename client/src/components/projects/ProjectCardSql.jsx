import Card from "../card/Card";
import { useState, useEffect } from "react";
import { api } from "../../services/Conection";
import LinkButton from "../layout/LinkButton";
import Container from "../layout/Container";
import styles from "../projects/ProjectCardSql.module.css";
function ProjectCardSql() {
  const [projects, setProjects] = useState();
  const user = localStorage.getItem("usuario");
  useEffect(() => {
    api.get("/getprojects", { user: user }).then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <div>
      <div className={styles.project_container}>
        <div className={styles.title_container}>
          <h1>Meu Projetos</h1>
          <LinkButton to="/projectsregister" text="Criar Projeto" />
        </div>
        <Container customClass="start">
          {typeof projects !== "undefined" &&
            projects.map((value) => {
              if (value.user === user) {
                return (
                  <>
                    <Card
                      key={value.id}
                      listCard={projects}
                      setListCard={setProjects}
                      id={value.idproject}
                      name={value.name}
                      budget={value.budget}
                      user={value.user}
                    ></Card>
                  </>
                );
              }
            })}
        </Container>
      </div>
    </div>
  );
}

export default ProjectCardSql;
