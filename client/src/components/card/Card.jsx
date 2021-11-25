import { useState } from "react";
import styles from "./Card.module.css";
import FormDialog from "../dialog/Dialog";
//Exibe Informações que foram coletadas pelo ProjectCardSql
function Card(props) {
  const [open, setOpen] = useState(false);
  const [listCard, setListCard] = useState();

  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        budget={props.budget}
        user={props.user}
        listCard={listCard}
        setListCard={setListCard}
        id={props.id}
      />
      <div className={styles.project_card} onClick={() => handleClickCard()}>
        <h4>{props.name}</h4>
        <p>
          <span>Orçamento:</span> R$ {props.budget}
        </p>
        <p>
          <span>Usuario:</span> {props.user}
        </p>
      </div>
    </>
  );
}

export default Card;
