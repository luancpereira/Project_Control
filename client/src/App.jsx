import "./App.css";
import Rotas from "./components/routes";
import Container from "./components/layout/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/login/Register";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Rotas />
          <Container>
            <Route exact path="/login" component={Rotas} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;