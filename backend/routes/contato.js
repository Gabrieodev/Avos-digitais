import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


function criarBackup(arquivo) {
  const backupDir = path.join(__dirname, "../data/backups");
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

  const nome = path.basename(arquivo);
  const data = new Date().toISOString().replace(/[:.]/g, "-");
  const destino = path.join(backupDir, `${nome}-${data}.bak`);

  fs.copyFileSync(arquivo, destino);
}

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const arquivo = path.join(__dirname, "../data/mensagens.json");

// POST - salvar mensagem enviada no popup
router.post("/", (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ sucesso: false, mensagem: "Campos obrigatórios!" });
  }

  const novaMensagem = {
    nome,
    email,
    mensagem,
    data: new Date().toLocaleString("pt-BR"),
  };

  let mensagens = [];
  if (fs.existsSync(arquivo)) {
    mensagens = JSON.parse(fs.readFileSync(arquivo, "utf8"));
  }

  mensagens.push(novaMensagem);
  fs.writeFileSync(arquivo, JSON.stringify(mensagens, null, 2));

  res.json({ sucesso: true, mensagem: "Mensagem enviada com sucesso!" });
});

// GET - listar todas (para admin)
router.get("/todas", (req, res) => {
  if (!fs.existsSync(arquivo)) {
    return res.json({ mensagens: [] });
  }

  const mensagens = JSON.parse(fs.readFileSync(arquivo, "utf8"));
  res.json({ mensagens });
});

export default router;
