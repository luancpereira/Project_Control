import Card from "../card/Card";
import { useState, useEffect } from "react";
import { api } from "../../services/Conection";

function ProjectCardSql() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    api.get("/getprojects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <div>
      {typeof projects !== "undefined" &&
        projects.map((value) => {
          return (
            <Card
              key={value.id}
              listCard={projects}
              setListCard={setProjects}
              id={value.id}
              name={value.name}
              budget={value.budget}
              userid={value.userid}
            ></Card>
          );
        })}
    </div>
  );
}

export default ProjectCardSql;
