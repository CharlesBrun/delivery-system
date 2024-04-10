import express from "express";
import jwt from "jsonwebtoken";
import LoginController from "../controllers/LoginController.js";

const router = express.Router();
const secretKey = 'CjkTyB9MIZhhc4mcVYJK8eYiW1lIPg18';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[0];

  if (!token) {
      return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, secretKey, (err, decodedToken) => {
      if (err) {
          return res.status(403).json({ error: 'Token inválido' });
      }
      req.user = decodedToken;
      next();
  });
}

router
  .post("/login", LoginController.login)
  .get("/protegido", authenticateToken, LoginController.protegido)

export default router;   