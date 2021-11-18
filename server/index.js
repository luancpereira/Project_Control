//Imports
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Conexão com o Banco
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "project_control",
});

app.use(express.json());
app.use(cors());

// Cadastro de usuarios com Senha Criptografado
app.post("/register", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE user = ?", [user], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (erro, hash) => {
        db.query(
          "INSERT INTO users (user, password) VALUES (?,?)",
          [user, hash],
          (err, result) => {
            if (err) {
              res.send(err);
            }
            res.send({ msg: "Cadastro Realizado!" });
          }
        );
      });
    } else {
      res.send({ msg: "Usuario Ja cadastrado" });
    }
  });
});

// Login com Criptografia
app.post("/login", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE user = ?", [user], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (erro, result) => {
        if (result) {
          res.send({
            msg: "Usuario Logado com Sucesso!",
            token: 1,
          });
        } else {
          res.send({
            msg: "Senha Incorreta!",
            token: 0,
          });
        }
      });
    } else {
      res.send({ msg: "Usuario Não Encontrado!" });
    }
  });
});

// Iniciando Server
app.listen(3001, () => {
  console.log("Server Active");
});