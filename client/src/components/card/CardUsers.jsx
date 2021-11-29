import { useEffect, useState } from "react";
import { api } from "../../services/Conection";
import Container from "../layout/Container";
import Card from "../card/Card";
function CardUsers() {
  const [users, setUsers] = useState();
  const user = localStorage.getItem("usuario");
  useEffect(() => {
    api.get("/getusers").then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <>
      <Container customClass="start">
        {typeof users !== "undefined" &&
          users.map((value) => {
            return (
              <>
                <div>
                  <h4>{value.user}</h4>
                </div>
              </>
            );
          })}
      </Container>
    </>
  );
}

export default CardUsers;
