import "../../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

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
    <div className="container">
      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field
              name="user"
              className="form-control m-2 col-12"
              placeholder="Usuario"
            />
            <ErrorMessage component="span" name="user" className="form-error" />
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

          <div className="login-form-group">
            <Field
              name="confirmPassword"
              className="form-control m-2 col-12"
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
            className="btn btn-lg btn-success btn-block col-12 m-2"
            type="submit"
          >
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
