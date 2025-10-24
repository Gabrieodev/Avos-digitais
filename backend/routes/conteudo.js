import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { autenticarToken } from "../middleware/autenticarToken.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const conteudoPath = path.join(__dirname, "../data/conteudo.json");

// GET público (sem autenticação)
router.get("/", (req, res) => {
  if (!fs.existsSync(conteudoPath)) {
    return res.json({
      heroTitle: "",
      heroDescription: "",
      aboutText: "",
      galleryIntro: ""
    });
  }

  const data = JSON.parse(fs.readFileSync(conteudoPath, "utf8"));
  res.json(data);
});

// POST protegido (só admin pode editar)
function criarBackup(arquivo) {
  const backupDir = path.join(__dirname, "../data/backups");
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

  const nome = path.basename(arquivo);
  const data = new Date().toISOString().replace(/[:.]/g, "-");
  const destino = path.join(backupDir, `${nome}-${data}.bak`);

  fs.copyFileSync(arquivo, destino);
}

// Rota protegida para atualizar o conteúdo
router.post("/", autenticarToken, (req, res) => {
  const { heroTitle, heroDescription, aboutText, galleryIntro } = req.body;
  const data = { heroTitle, heroDescription, aboutText, galleryIntro };

  if (fs.existsSync(conteudoPath)) {
    criarBackup(conteudoPath);
  }

  // salva a versão nova
  fs.writeFileSync(conteudoPath, JSON.stringify(data, null, 2), "utf8");
  res.json({ mensagem: "Conteúdo atualizado com sucesso!" });
});

export default router;
