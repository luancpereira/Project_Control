import "../App.css";
import { useState } from "react";
import Login from "./login/Login";
import Home from "./pages/Home";

function Rotas() {
  const [logado, setLogado] = useState(false);

  return (
    <div>
      {logado ? (
        <Home />
      ) : (
        <div>
          <Login setLogado={setLogado} />
        </div>
      )}
    </div>
  );
}

export default Rotas;
