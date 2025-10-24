import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Rotas
import flashcardsRoutes from "./routes/flashcards.js";
import contatoRoutes from "./routes/contato.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import conteudoRoutes from "./routes/conteudo.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../")));

// === ROTAS DA API ===
app.use("/api/flashcards", flashcardsRoutes);
app.use("/api/contato", contatoRoutes);
app.use("/api", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/conteudo", conteudoRoutes);

// === REGISTRO DE VISITAS ===
const visitasPath = path.join(__dirname, "./data/visitas.json");

app.use((req, res, next) => {
    if (!req.path.startsWith("/api")) {
        const ip = req.ip;
        let dados = { totalAcessos: 0, visitantesUnicos: [], historico: [] };

        if (fs.existsSync(visitasPath)) {
            dados = JSON.parse(fs.readFileSync(visitasPath, "utf8"));
        }

        dados.totalAcessos++;

        if (!dados.visitantesUnicos.includes(ip)) {
            dados.visitantesUnicos.push(ip);
        }

        const hoje = new Date().toISOString().split("T")[0];
        const registro = dados.historico.find((h) => h.data === hoje);
        if (registro) registro.acessos++;
        else dados.historico.push({ data: hoje, acessos: 1 });

        fs.writeFileSync(visitasPath, JSON.stringify(dados, null, 2));
    }

    next();
});

// === ROTA CATCH-ALL PARA FRONTEND ===
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Servidor rodando: http://localhost:${PORT}`)
);
