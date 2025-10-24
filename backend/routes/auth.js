import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const isEmailOk = email === process.env.ADMIN_EMAIL;
  const isSenhaOk = senha === process.env.ADMIN_PASSWORD;

  if (!isEmailOk || !isSenhaOk) {
    return res.status(401).json({ sucesso: false, mensagem: "Credenciais inválidas" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || "1h",
  });

  return res.json({ sucesso: true, token });
});

export default router;
