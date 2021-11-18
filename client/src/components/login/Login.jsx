import "../../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

function Login({ setLogado }) {
  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      user: values.user,
      password: values.password,
    }).then((response) => {
      if (response.data.token === 1) {
        setLogado(true);
      } else {
        setLogado(false);
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
      <div className="container">
        <h1>Login</h1>
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
    </>
  );
}

export default Login;
