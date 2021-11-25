//Codigo padrão para editar pelo material-ui
//Deixar Padronizado
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { api } from "../../services/Conection";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    budget: props.budget,
  });

  const handleEditProject = () => {
    api.put("/editproject", {
      id: editValues.id,
      name: editValues.name,
      budget: editValues.budget,
    });
    handleClose();
  };

  const handleDeleteProject = () => {
    api.delete(`/deleteproject/${editValues.id}`)
    handleClose()
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            disabled
            margin="dense"
            id="user"
            label="Usuario"
            defaultValue={props.user}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Projeto"
            defaultValue={props.name}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="budget"
            label="Orçamento"
            defaultValue={props.budget}
            onChange={handleChangeValues}
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleDeleteProject}>Excluir</Button>
          <Button color="primary" onClick={handleEditProject}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
