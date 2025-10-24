document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = "Autenticando...";

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (data.sucesso) {
      localStorage.setItem("token", data.token);
      mensagem.textContent = "Login realizado com sucesso!";
      setTimeout(() => (window.location.href = "painel.html"), 1000);
    } else {
      mensagem.textContent = "E-mail ou senha incorretos.";
    }
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    mensagem.textContent = "Erro de conexão com o servidor.";
  }
});
