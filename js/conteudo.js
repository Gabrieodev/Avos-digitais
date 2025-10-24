async function carregarConteudo() {
  try {
    const resposta = await fetch("/api/conteudo");
    const dados = await resposta.json();

    // Atualiza textos do hero
    const heroTitle = document.querySelector(".hero-title");
    const heroDescription = document.querySelector(".hero-description");

    if (heroTitle && dados.heroTitle) heroTitle.textContent = dados.heroTitle;
    if (heroDescription && dados.heroDescription)
      heroDescription.textContent = dados.heroDescription;

    // Atualiza texto "sobre nós"
    const aboutSection = document.querySelector(".about-section p");
    if (aboutSection && dados.aboutText)
      aboutSection.textContent = dados.aboutText;

    // Atualiza subtítulo das dicas visuais
    const gallerySubtitle = document.querySelector(".section-subtitle");
    if (gallerySubtitle && dados.galleryIntro)
      gallerySubtitle.textContent = dados.galleryIntro;
  } catch (erro) {
    console.error("Erro ao carregar conteúdo dinâmico:", erro);
  }
}

document.addEventListener("DOMContentLoaded", carregarConteudo);
