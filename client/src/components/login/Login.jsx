import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { api } from "../../services/Conection";

function Login({ setLogado, setUser, setValidate }) {

  const handleClickLogin = (values) => {
    api
      .post("/login", {
        user: values.user,
        password: values.password,
      })
      .then((response) => {
        if (response.data.token === 1) {
          setLogado(true);
          localStorage.setItem("usuario", response.data.user);
          localStorage.setItem("islogin", true);
          setUser(response.data.user);
          if (response.data.user === "admin") {
            setValidate(true);
          } else {
            setValidate(false);
          }
        } else {
          setLogado(false);
          localStorage.setItem("isLogin", false);
        }
        alert(response.data.msg);
      });
  };

  const validationLogin = yup.object().shape({
    user: yup.string().required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(5, "Minimo de 5 Caracteres!")
      .required("Campo Obrigatório!"),
  });

  return (
    <>
      <section className={`${styles.gradient_custom} vh-100`}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h1 className="fw-bold m-1 mb-2 text-uppercase">Login</h1>
                    <Formik
                      initialValues={{}}
                      onSubmit={handleClickLogin}
                      validationSchema={validationLogin}
                    >
                      <Form className="login-form">
                        <div className="login-form-group">
                          <Field
                            name="user"
                            className="col-12 form-control m-2"
                            placeholder="Usuario"
                          />
                          <ErrorMessage
                            component="span"
                            name="user"
                            className="form-error"
                          />
                        </div>

                        <div className="login-form-group">
                          <Field
                            name="password"
                            className="form-control m-2 col-12"
                            placeholder="Password"
                            type="password"
                          />
                          <ErrorMessage
                            component="span"
                            name="password"
                            className="form-error"
                          />
                        </div>

                        <button
                          className="btn btn-lg btn-success btn-block col-12 m-2"
                          type="submit"
                        >
                          Login
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
