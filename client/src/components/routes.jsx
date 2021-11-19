import "../App.css";
import { useState } from "react";
import Login from "./login/Login";
import Home from "./pages/Home";
import Register from "./login/Register";
import NewProject from "./pages/NewProject";
import Navbar from "./layout/Navbar";
import Project from "./pages/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Rotas() {
  const [logado, setLogado] = useState(false);
  const [user, setUser] = useState([]);
  const [validate, setValidate] = useState(false);

  return (
    <div>
      {logado ? (
        <>
          <Router>
            <Navbar user={user} validate={validate}/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Rotas} />
              {validate && (
                <Route exact path="/register" component={Register} />
              )}
              <Route exact path="/newproject" component={NewProject} />
              <Route exact path="/projects" component={Project} />
            </Switch>
          </Router>
        </>
      ) : (
        <div>
          <Login
            setLogado={setLogado}
            setUser={setUser}
            setValidate={setValidate}
          />
        </div>
      )}
    </div>
  );
}

export default Rotas;
