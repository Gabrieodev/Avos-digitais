const token = localStorage.getItem("token");
const resposta = document.getElementById("resposta");
const form = document.getElementById("form-editar");

async function carregarConteudo() {
    try {
        const res = await fetch("/api/conteudo");
        const data = await res.json();

        document.getElementById("heroTitle").value = data.heroTitle;
        document.getElementById("heroDescription").value = data.heroDescription;
        document.getElementById("aboutText").value = data.aboutText;
        document.getElementById("galleryIntro").value = data.galleryIntro;
    } catch (err) {
        resposta.textContent = "Erro ao carregar conteúdo.";
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const conteudoAtualizado = {
        heroTitle: document.getElementById("heroTitle").value,
        heroDescription: document.getElementById("heroDescription").value,
        aboutText: document.getElementById("aboutText").value,
        galleryIntro: document.getElementById("galleryIntro").value,
    };

    try {
        const res = await fetch("/api/conteudo", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(conteudoAtualizado),
        });

        const data = await res.json();
        resposta.textContent = data.mensagem || "Erro ao salvar.";
    } catch (err) {
        resposta.textContent = "Erro de conexão com o servidor.";
    }
});

carregarConteudo();
