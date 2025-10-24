const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const shareData = {
            title: 'Avós Digitais - Segurança na Internet',
            text: 'Vamos juntos construir uma internet mais segura para todas as gerações. Conheça o Avós Digitais!',
            url: window.location.href
        };


        if (navigator.share) {
            navigator.share(shareData).catch(() => { });
        } else {
            navigator.clipboard?.writeText(window.location.href).then(() => {
                alert('Link copiado para a área de transferência!');
            }).catch(() => {
                window.location.href = window.location.href;
            });
        }
    });
}

// Popup de contato
const popup = document.getElementById("popup-contato");
const fecharPopup = document.getElementById("fechar-popup");

const botoesContato = document.querySelectorAll("#contactBtn, a[href='#contato']");

if (botoesContato.length && popup && fecharPopup) {
    botoesContato.forEach(botao => {
        botao.addEventListener("click", (e) => {
            e.preventDefault();
            popup.style.display = "flex";
        });
    });

    fecharPopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
}

//Envio do formulário ao back
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const resposta = document.getElementById("resposta");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            resposta.textContent = "Preencha todos os campos.";
            return;
        }

        try {
            const response = await fetch("/api/contato", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, mensagem }),
            });

            const data = await response.json();

            if (data.sucesso) {
                resposta.textContent = "Mensagem enviada com sucesso!";
                form.reset();
            } else {
                resposta.textContent = "Ocorreu um erro ao enviar sua mensagem.";
            }
        } catch (error) {
            resposta.textContent = "Falha de conexão com o servidor.";
            console.error("Erro no envio:", error);
        }
    });
});

// ===== Popup de Informações dos Golpes =====
document.addEventListener("DOMContentLoaded", () => {
    const popupInfo = document.getElementById("popup-info");
    const fecharInfo = document.getElementById("fechar-info");
    const tituloGolpe = document.getElementById("titulo-golpe");
    const textoGolpe = document.getElementById("texto-golpe");

    const golpesInfo = {
        "Falsa Central Telefônica": "Criminosos se passam por funcionários de bancos, ligando para confirmar dados ou pedir senhas. O banco nunca solicita senhas por telefone.",
        "Falso Empréstimo Consignado": "Golpistas oferecem empréstimos falsos com juros baixos. Após pegar seus dados, fazem contratos reais em seu nome.",
        "Ajuda no Caixa Eletrônico": "Um criminoso se oferece para ajudar idosos no caixa eletrônico e troca o cartão ou descobre a senha durante o processo.",
        "Falso Presente de Aniversário": "A vítima recebe mensagem de entrega de presente e precisa confirmar dados pessoais - é um golpe para roubar informações.",
        "Vendas Falsas": "Sites ou perfis falsos anunciam produtos com preços baixos. Após o pagamento, o item nunca é entregue.",
        "Golpe do WhatsApp": "Golpistas clonam o número do WhatsApp e pedem dinheiro aos contatos se passando pela vítima.",
        "Phishing": "Emails ou mensagens falsas imitam instituições conhecidas para capturar senhas e informações bancárias.",
        "Falso Motoboy": "Criminosos ligam dizendo que o cartão foi clonado e enviam um motoboy para buscá-lo, levando o cartão verdadeiro.",
        "Falso Sequestro": "Ligações afirmam que um familiar foi sequestrado, exigindo dinheiro imediato para o falso resgate."
    };

    const cards = document.querySelectorAll(".cards .card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const titulo = card.querySelector(".label").textContent.trim();
            tituloGolpe.textContent = titulo;
            textoGolpe.textContent = golpesInfo[titulo] || "Informação não encontrada para este golpe.";
            popupInfo.style.display = "flex";
        });
    });

    if (fecharInfo) {
        fecharInfo.addEventListener("click", () => {
            popupInfo.style.display = "none";
        });
    }

    popupInfo.addEventListener("click", (e) => {
        if (e.target === popupInfo) popupInfo.style.display = "none";
    });
});

// rolagem
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetID = link.getAttribute("href");
            const target = document.querySelector(targetID);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
});