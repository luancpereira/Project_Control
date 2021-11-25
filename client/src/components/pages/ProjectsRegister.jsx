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
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-ligth text-dark">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h1 className="fw-bold text-dark m-1 mb-2 text-uppercase">
                    Criar de Projetos
                  </h1>
                  <Formik initialValues={{}} onSubmit={handleClickCadProject}>
                    <Form className={styles.form}>
                      <div className={styles.form_control}>
                        <Field
                          name="name"
                          className="form-control m-2"
                          placeholder="Nome"
                        />
                      </div>

                      <div className={styles.form_control}>
                        <Field
                          name="budget"
                          className="form-control m-2"
                          placeholder="Orçamento"
                          type="number"
                        />
                      </div>
                      <button
                        className="btn btn-lg btn-success btn-block m-2"
                        type="submit"
                      >
                        Cadastrar
                      </button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsRegister;
