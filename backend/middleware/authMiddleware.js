import jwt from "jsonwebtoken";

export function autenticarToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ sucesso: false, mensagem: "Token ausente" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ sucesso: false, mensagem: "Token inválido ou expirado" });
        }

        req.user = user;
        next();
    });
}