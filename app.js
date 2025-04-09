const express = require("express"); // Importa lib do Express
const sqlite3 = require("sqlite3"); // Importa lib do sqlite3
const bodyParser = require("body-parser"); //Importa o body-parser

const app = express(); // Instância para o uso do Express

const PORT = 8000; // Porta do TCP do servidr HTTP da aplicação

//Cria conexão com o banco de dados
const db = new sqlite3.Database("user.db"); //Instância para uso do Sqlite3, e usa o arquivo 'user.db'

db.serialize(() => {
  // Este método permite enviar comandos SQL em modo 'sequencial'
  db.run(
    `CREATE TABLE IF NOT EXISTS users 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, email TEXT, celular TEXT, cpf TEXT, rg TEXT)`
  );
});

//é a váriavel interna do node uqe guarda o caminho absoluto do projeto no SO
app.use("/static", express.static(__dirname + "/static"));

//middleware para processar as requisições do body parameters do cliente
app.use(bodyParser.urlencoded({ extended: true }));

//Configurar EJS como o motor de visualização
app.set("view engine", "ejs");

// Cria conexão com o banco de dados
const index =
  "<a href='/sobre'>Sobre </a><a href='/cadastro'>Cadastro </a><a href='/login'>Login </a>";
const sobre = 'Você está na página "Sobre"<br><a href="/">Voltar</a>';
const login = 'Você está na página "Login"<br><a href="/">Voltar</a>';
const cadastro = 'Você está na página "Cadastro"<br><a href="/">Voltar</a>';

/*Método express.get necessita de dois parâmetros
Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req')
o segundo, são os dados que serão enviados ao cliente (RESULT - 'res') */

app.get("/", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/
  // res.send(index);
  // res.render("index");
  console.log("GET/index");
  res.redirect("/cadastro"); //redireciona para a rota cadastro
});

app.get("/cadastro", (req, res) => {
  console.log("GET/ cadastro");
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/cadastro
  res.render("cadastro");
});

app.get("/sobre", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/sobre
  res.send(sobre);
});

app.get("/login", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/login
  res.render("login");
});

app.get("/usuarios", (req, res) => {
  const query = "SELECT * FROM users";
  db.all(query, (err, row) => {
    console.log(`GET/usuarios ${JSON.stringify(row)}`);
    res.send("Lista de usuários.");
  });
});

//POST DO CADASTRO
app.post("/cadastro", (req, res) => {
  !req.body
    ? console.log(JSON.stringify(req.body))
    : console.log(`Body vazio: ${req.body}`);

  const { username, password, email, cpf, rg, celular } = req.body;
  //Colocar aqui as validações e inclusão no banco de dados do cadastro do usuãrio
  //1.Validar usuário
  //2. saber se ele já existe no banco

  const query =
    "SELECT *FROM users WHERE email=? OR cpf=? OR rg=? OR username=?";
  db.get(query, [email, cpf, rg, username], (err, row) => {
    if (err) throw err;
    console.log(`${JSON.stringify(row)}`);

    if (row) {
      //A variável 'row' irá retornar os dados do banco de dados, executando através do SQL, variável query
      res.send("Usuário já cadastrado, refaça o cadastro");
    } else {
      //3. se usuário não existe no banco, cadastrar
      const isertQuery =
        "INSERT INTO users (username, password, email, celular, cpf, rg) VALUES (?, ?, ?, ?, ?, ?)";
      db.run(
        isertQuery,
        [username, password, email, celular, cpf, rg],
        (err) => {
          //Inserir a lógica do INSERT
          if (err) throw err;
          res.send("Usuário cadastrado com sucesso!");
        }
      );
    }
  });

  //   res.send(
  //     `Bem-vindo usuário:${req.body.username}, seu email é ${req.body.email}`
  //   );
});

//Programação de rotas do método GET do HTTP 'app.get()'
app.get("/sobre", (req, res) => {
  console.log("GET/sobre");
});

//app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
