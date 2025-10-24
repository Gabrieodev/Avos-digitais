import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { autenticarToken } from "../middleware/autenticarToken.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos dos arquivos
const mensagensPath = path.join(__dirname, "../data/mensagens.json");
const logsPath = path.join(__dirname, "../data/logs.json");
const visitasPath = path.join(__dirname, "../data/visitas.json");

// Função auxiliar para registrar logs
function registrarLog(email, ip, acao) {
  const log = {
    email,
    ip,
    acao,
    data: new Date().toLocaleString("pt-BR"),
  };

  let logs = [];
  if (fs.existsSync(logsPath)) {
    logs = JSON.parse(fs.readFileSync(logsPath, "utf8"));
  }

  logs.push(log);
  fs.writeFileSync(logsPath, JSON.stringify(logs, null, 2));
}
// Painel
router.get("/painel", autenticarToken, (req, res) => {
  registrarLog(req.usuario.email, req.ip, "Acesso ao painel");
  res.json({ sucesso: true, mensagem: "Acesso autorizado ao painel!" });
});

// Mensagens recebidas
router.get("/mensagens", autenticarToken, (req, res) => {
  if (!fs.existsSync(mensagensPath)) {
    return res.json({ mensagens: [] });
  }

  const mensagens = JSON.parse(fs.readFileSync(mensagensPath, "utf8"));
  registrarLog(req.usuario.email, req.ip, "Visualizou mensagens");
  res.json({ mensagens });
});

// Logs
router.get("/logs", autenticarToken, (req, res) => {
  if (!fs.existsSync(logsPath)) {
    return res.json({ logs: [] });
  }

  const logs = JSON.parse(fs.readFileSync(logsPath, "utf8"));
  res.json({ logs });
});

// Total de visitas
router.get("/visitas", autenticarToken, (req, res) => {
  if (!fs.existsSync(visitasPath)) {
    return res.json({ totalAcessos: 0, visitantesUnicos: 0 });
  }

  const dados = JSON.parse(fs.readFileSync(visitasPath, "utf8"));
  res.json({
    totalAcessos: dados.totalAcessos,
    visitantesUnicos: dados.visitantesUnicos.length,
  });
});

// Histórico de visitas
router.get("/visitas/historico", autenticarToken, (req, res) => {
  if (!fs.existsSync(visitasPath)) {
    return res.json([]);
  }

  const dados = JSON.parse(fs.readFileSync(visitasPath, "utf8"));
  res.json(dados.historico || []);
});

export default router;
