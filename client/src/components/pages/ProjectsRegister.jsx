import { Formik, Form, Field } from "formik";
import styles from "../pages/ProjectsRegister.module.css";
import { api } from "../../services/Conection";
import { useHistory } from "react-router-dom";
function ProjectsRegister() {
  const history = useHistory(); //chamado do hook

  const goToProjects = () => {
    history.push("/projectcardsql"); //uso do hook para ir para a página /dogRegister
  };

  const handleClickCadProject = (values) => {
    api
      .post("/cadproject", {
        name: values.name,
        budget: values.budget,
        user: localStorage.getItem("usuario"),
      })
      .then((response) => {
        alert(response.data.msg);
        goToProjects();
      });
  };

  return (
    <>
      <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para controle</p>
        <Formik initialValues={{}} onSubmit={handleClickCadProject}>
          <Form className={styles.form}>
            <div className={styles.form_control}>
            <label className={styles.form_control_label}>Nome:</label>
              <Field
                name="name"
                className={styles.form_control_input}
                placeholder="Insira o nome do Projeto"
              />
            </div>

            <div className={styles.form_control}>
            <label className={styles.form_control_label}>Orçamento:</label>
              <Field
                name="budget"
                className={styles.form_control_input}
                placeholder="Insira o Orçamento do Projeto"
                type="number"
              />
            </div>
            <button
              className="btn btn-lg btn-success btn-block m-2"
              type="submit"
            >
              Criar Projeto
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default ProjectsRegister;
