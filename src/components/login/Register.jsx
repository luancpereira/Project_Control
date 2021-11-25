import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import styles from "./Register.module.css";

function Register() {
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      user: values.user,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validationRegister = yup.object().shape({
    user: yup.string().required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(5, "Minimo de 5 Caracteres!")
      .required("Campo Obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas Diferentes"),
  });
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-ligth text-dark">
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h1 className="fw-bold text-dark m-1 mb-2 text-uppercase">
                  Cadastro de Usuario
                </h1>
                <Formik
                  initialValues={{}}
                  onSubmit={handleClickRegister}
                  validationSchema={validationRegister}
                >
                  <Form className={styles.form}>
                    <div className={styles.form_control}>
                      <Field
                        name="user"
                        className="form-control m-2"
                        placeholder="Usuario"
                      />
                      <ErrorMessage
                        component="span"
                        name="user"
                        className="form-error"
                      />
                    </div>

                    <div className={styles.form_control}>
                      <Field
                        name="password"
                        className="form-control m-2"
                        placeholder="Password"
                        type="password"
                      />
                      <ErrorMessage
                        component="span"
                        name="password"
                        className="form-error"
                      />
                    </div>

                    <div className={styles.form_control}>
                      <Field
                        name="confirmPassword"
                        className="form-control m-2"
                        placeholder="Confirm Password"
                        type="password"
                      />
                      <ErrorMessage
                        component="span"
                        name="confirmPassword"
                        className="form-error"
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
  );
}

export default Register;
