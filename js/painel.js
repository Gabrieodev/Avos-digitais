//Redirecionar se não estiver logado
if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}

//Função para logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});

// ======== Funções principais ========

//Estatísticas
async function carregarVisitas() {
  try {
    const response = await fetch("/api/admin/visitas", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    const data = await response.json();

    const stats = document.getElementById("stats-info");
    stats.textContent = `Total de acessos: ${data.totalAcessos} | Visitantes únicos: ${data.visitantesUnicos}`;
  } catch (error) {
    console.error("Erro ao carregar estatísticas:", error);
  }
}

//Mensagens
async function carregarMensagens() {
  try {
    const response = await fetch("/api/admin/mensagens", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    const data = await response.json();

    const container = document.getElementById("mensagens-container");
    container.innerHTML = "";

    if (!data.mensagens || data.mensagens.length === 0) {
      container.innerHTML = "<p>Nenhuma mensagem recebida ainda.</p>";
      return;
    }

    data.mensagens.slice(-10).reverse().forEach((msg) => {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${msg.nome}</strong> (${msg.email})<br>${msg.mensagem}<br><small>${msg.data}</small>`;
      container.appendChild(p);
    });
  } catch (error) {
    console.error("Erro ao carregar mensagens:", error);
  }
}

//Logs
async function carregarLogs() {
  try {
    const response = await fetch("/api/admin/logs", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    const data = await response.json();

    const container = document.getElementById("logs-container");
    container.innerHTML = "";

    if (!data.logs || data.logs.length === 0) {
      container.innerHTML = "<p>Nenhum log registrado ainda.</p>";
      return;
    }

    data.logs.slice(-10).reverse().forEach((log) => {
      const p = document.createElement("p");
      p.textContent = `${log.data} — ${log.email} (${log.acao})`;
      container.appendChild(p);
    });
  } catch (error) {
    console.error("Erro ao carregar logs:", error);
  }
}
async function carregarGrafico() {
  try {
    const response = await fetch("/api/admin/visitas/historico", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    const data = await response.json();

    const labels = data.map((item) => item.data);
    const acessos = data.map((item) => item.acessos);

    const ctx = document.getElementById("graficoAcessos").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Acessos por dia",
            data: acessos,
            borderColor: "#c81e1e",
            backgroundColor: "rgba(200,30,30,0.2)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  } catch (error) {
    console.error("Erro ao carregar gráfico:", error);
  }
}

carregarGrafico();
carregarVisitas();
carregarMensagens();
carregarLogs();
