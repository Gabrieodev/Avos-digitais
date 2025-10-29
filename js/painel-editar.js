document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("form-edicao");
  const resposta = document.getElementById("resposta");

  // Carregar textos atuais
  try {
    const res = await fetch("/api/conteudo", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    document.getElementById("heroTitle").value = data.heroTitle || "";
    document.getElementById("heroDescription").value = data.heroDescription || "";
    document.getElementById("aboutText").value = data.aboutText || "";
    document.getElementById("galleryIntro").value = data.galleryIntro || "";
  } catch (err) {
    console.error("Erro ao carregar conteúdo:", err);
  }

  // Salvar alterações
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      heroTitle: form.heroTitle.value,
      heroDescription: form.heroDescription.value,
      aboutText: form.aboutText.value,
      galleryIntro: form.galleryIntro.value,
    };

    try {
      const res = await fetch("/api/conteudo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      resposta.textContent = data.mensagem || "Conteúdo atualizado com sucesso!";
    } catch {
      resposta.textContent = "Erro ao salvar as alterações.";
    }
  });
});

// --- Logout ---
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    alert("Sessão encerrada!");
    window.location.href = "login.html";
  });
}