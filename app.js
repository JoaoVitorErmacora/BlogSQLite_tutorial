const express = require("express"); //importa lib do express
const sqlite3 = require("sqlite3"); //

const Port = 8000;

const app = express(); //INstância para o uso do Express

//Cria conexão com o banco de dados
const db = new sqlite3.Database("user.db"); //Instância  para

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS USER (ID INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
  );
});

app.use("/static", express.static(_dirname + "/static"));

//COnfigurar EJS como o motor de visualização
app.set("view engine", ejs);
