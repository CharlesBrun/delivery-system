const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Usando o middleware body-parser para analisar corpo de requisições POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '')));

// Rota para a página de login
app.get('/login', (req, res) => {
    res.redirect('/index.html');
});

// Rota para processar o login
app.post('/login', (req, res) => {
  // Supondo que você tenha os dados do usuário em um banco de dados
  console.log(req.body)
  const users = [
    { username: 'usuario', password: 'senha' },
    // ... Outros usuários
  ];

  // Verificar se o usuário existe e a senha está correta
  const userExists = users.some(user => user.username === req.body.username && user.password === req.body.password);

  if (userExists) {
    res.send('Login bem-sucedido!');
  } else {
    res.status(401).send('Usuário ou senha incorretos.');
  }
});

const port = process.env.PORT ||  3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});