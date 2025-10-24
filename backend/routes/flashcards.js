import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    const flashcards = [
        { id: 1, titulo: "Falsa Central Telefônica", descricao: "Golpistas fingem ser do banco e pedem dados pessoais ou do cartão." },
        { id: 2, titulo: "Falso Empréstimo Consignado", descricao: "Ofertas falsas de empréstimo para roubar informações financeiras." },
        { id: 3, titulo: "Ajuda no Caixa Eletrônico", descricao: "Criminosos oferecem ajuda e trocam cartões de forma disfarçada." },
        { id: 4, titulo: "Falso Presente de Aniversário", descricao: "Mensagens falsas prometendo brindes para coletar dados pessoais." },
        { id: 5, titulo: "Vendas Falsas", descricao: "Sites e anúncios falsos que pedem pagamento e não entregam o produto." },
        { id: 6, titulo: "Golpe do WhatsApp", descricao: "Criminosos clonam contas e pedem dinheiro a contatos da vítima." },
        { id: 7, titulo: "Phishing", descricao: "Links falsos que levam o usuário a sites fraudulentos." },
        { id: 8, titulo: "Falso Motoboy", descricao: "Criminosos se passam por motoboys de bancos para recolher cartões." },
        { id: 9, titulo: "Falso Sequestro", descricao: "Golpistas ligam dizendo que sequestraram alguém da família e pedem resgate." }
    ];
    res.json(flashcard);
});

export default router;