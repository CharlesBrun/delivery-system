// import login from "../models/Login.js";
import jwt from "jsonwebtoken";

const secretKey = 'CjkTyB9MIZhhc4mcVYJK8eYiW1lIPg18';

const users = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'worker', password: 'worker123' }
];

class LoginController {

  static login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Usuário não encontrado ou credenciais inválidas' });
    }

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
  }

  static protegido = (req, res) => {
    res.json({ message: 'Acesso autorizado' });
  }

}

export default LoginController