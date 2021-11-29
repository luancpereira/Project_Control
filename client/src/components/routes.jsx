import "../App.css";
import { useState } from "react";
import Login from "./login/Login";
import Home from "./pages/Home";
import Register from "./login/Register";
import Navbar from "./layout/Navbar";
import ProjectsRegister from "./pages/ProjectsRegister";
import ProjectCardSql from "./projects/ProjectCardSql";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Rotas() {
  const [user, setUser] = useState([]);
  const [validate, setValidate] = useState(false);
  localStorage.setItem("user", user);
  localStorage.setItem("validate", validate);

  const isAuthenticated = () => localStorage.getItem("token") !== null;

  return (
    <div>
      {isAuthenticated() ? (
        <>
          <Router>
            <Navbar user={user} validate={validate} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Rotas} />
              {validate && (
                <Route exact path="/register" component={Register} />
              )}
              <Route
                exact
                path="/projectsregister"
                component={ProjectsRegister}
              />
              <Route exact path="/projectcardsql" component={ProjectCardSql} />
            </Switch>
          </Router>
        </>
      ) : (
        <div>
          <Login setUser={setUser} setValidate={setValidate} />
        </div>
      )}
    </div>
  );
}

export default Rotas;
