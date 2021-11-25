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
        userid={props.userid}
        listCard={listCard}
        setListCard={setListCard}
        id={props.idproject}
      />
      <section
        className={styles.section_center}
        onClick={() => handleClickCard()}
      >
        <div className={styles.container}>
          <h1 className="card-title">{props.name}</h1>
          <p className="card-text">{props.budget}</p>
          <p className="card-text">{props.userid}</p>
        </div>
      </section>
    </>
  );
}

export default Card;
