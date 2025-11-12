<div align="center"> 

# **Avós Digitais**

<!-- Ícones das tecnologias -->
[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
[![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
[![JSON](https://img.shields.io/badge/JSON-000?logo=json&logoColor=fff)](#)

</div>

---

## Sobre o Projeto

O **Avós Digitais** é um projeto acadêmico desenvolvido como parte de um itinerário extensionista do curso de **Ciência da Computação**, voltado para promover a conscientização e o aprendizado de **segurança da informação** para o público idoso.  

O site é organizado em seções como **Início**, **Sobre**, **Dicas**, **Notícias** e **Contato**, permitindo uma navegação simples e objetiva. Seu foco principal é **orientar idosos e familiares** sobre práticas seguras no uso de smartphones, redes sociais, aplicativos de mensagens e serviços online.

Além das orientações, o projeto apresenta **exemplos de golpes comuns** aplicados atualmente. Também são citados **casos reais**, demonstrando como esses golpes acontecem na prática e como podem ser evitados com atitudes simples, como verificar remetentes, desconfiar de urgências e nunca compartilhar informações pessoais sem confirmação.

O objetivo é **reduzir a vulnerabilidade digital** entre idosos, oferecendo conhecimento acessível e promovendo autonomia, segurança e bem-estar no ambiente online.

---

## 🧠 Tecnologias Principais

| Categoria     | Tecnologias Utilizadas                                  |
| ------------- | ------------------------------------------------------- |
| **Front-end** | HTML5, CSS3, JavaScript (ES6+)                          |
| **Back-end**  | Node.js, Express.js, JSON                               |
| **Ambiente**  | Visual Studio Code (VS Code)                            |
| **Controle**  | Registro de logs, painel administrativo e rotas seguras |

---

## 🔐 Funcionalidades Administrativas

O sistema conta com uma **área administrativa** protegida por autenticação, permitindo o gerenciamento dinâmico do conteúdo exibido nas páginas principais do site.

* **`login.html`** – Página de acesso restrito, onde o administrador realiza login para acessar o painel de controle.
* **`painel.html`** – Painel principal do administrador, com visualização geral do conteúdo publicado.
* **`painel-editar.html`** – Interface dedicada à **edição, atualização e exclusão** de textos e informações das seções do site, garantindo que o conteúdo esteja sempre atualizado.

Essas funcionalidades proporcionam **autonomia ao administrador**, permitindo modificar e gerenciar o portal de forma intuitiva, mantendo o propósito educativo do projeto sempre relevante e atualizado.

---

## 🌐 Estrutura e Funcionalidades do Projeto

O **Avós Digitais** é um site educativo que utiliza **HTML, CSS e JavaScript** no front-end e **Node.js com Express.js** no back-end. Os dados são armazenados e trocados via **JSON**, e todo o desenvolvimento é feito no **Visual Studio Code (VS Code)**.

O sistema possui **seções interativas**, **painel administrativo** com login e **registro de logs**, garantindo controle e segurança das operações.

---

### 🏠 Início

* **Função:** Apresenta a proposta do projeto e introduz o usuário aos flashcards de aprendizado.
* **Tecnologias:** HTML e CSS para layout; JavaScript para animações e navegação dinâmica.
* **Destaque:** Acesso aos flashcards interativos para testar conhecimentos sobre segurança digital.

---

### 👵 Sobre

* **Função:** Explica a origem acadêmica do projeto e sua missão de inclusão digital para idosos.
* Estrutura estática em HTML e CSS.

---

### 🛡️ Cuidados

* Exibe os principais golpes digitais por meio de flashcards clicáveis.
* JavaScript para interatividade e Express.js para servir os dados dos golpes.
* Cada flashcard é alimentado com informações do arquivo JSON, permitindo fácil atualização.

---

### 💡 Dicas

* Exibe orientações visuais rápidas sobre segurança (senhas, links, Wi-Fi, etc).
* HTML/CSS para design e JavaScript para exibição dinâmica dos cartões.

---

### 📰 Notícias

* Mostra casos reais e alertas de segurança digital.
* Conteúdo atualizado dinamicamente, simulando integração com fontes externas.

---

### 💬 Contato

* Permite o envio de mensagens e agendamentos.
* Formulário HTML conectado ao servidor Express.js, que registra os envios em JSON.
* Todas as mensagens são **armazenadas** e **registradas em log** para controle administrativo.

---

## 📁 Estrutura do Projeto

A estrutura do projeto **Avós Digitais** foi organizada para manter **clareza, modularidade e separação entre front-end e back-end**, facilitando manutenção e expansão futura.

```
AVÓS-DIGITAIS/
│
├── assets/                     # Recursos estáticos do site
│   ├── icons/                  # Ícones e vetores usados na interface
│   └── img/                    # Imagens e ilustrações do projeto
│
├── backend/                    # Estrutura do servidor e lógica de negócio
│   ├── data/                   # Armazena arquivos JSON com dados dinâmicos (notícias, dicas, golpes)
│   ├── middleware/             # Middlewares de autenticação, logs e controle de acesso
│   ├── node_modules/           # Dependências do Node.js instaladas via npm
│   ├── routes/                 # Rotas da aplicação (públicas e administrativas)
│   ├── .env                    # Variáveis de ambiente (configurações e credenciais)
│   ├── package.json            # Lista de dependências e scripts do Node.js
│   ├── package-lock.json       # Controle de versão das dependências
│   └── server.js               # Arquivo principal que inicializa o servidor Express.js
│
├── css/                        # Estilos do front-end
│   ├── login.css               # Estilos da página de login do administrador
│   ├── painel-editar.css       # Estilos do painel de edição
│   ├── painel.css              # Estilos do painel principal de administração
│   ├── style.css               # Estilo global do site (estrutura principal)
│   └── variables.css           # Variáveis de cores, fontes e temas
│
├── js/                         # Scripts de interação e lógica do front-end
│   ├── conteudo.js             # Gerencia o carregamento de conteúdo dinâmico
│   ├── editar.js               # Funções de edição de conteúdo no painel
│   ├── login.js                # Validação e autenticação do administrador
│   ├── main.js                 # Scripts gerais da interface pública
│   ├── painel-editar.js        # Controle da interface de edição de textos e dados
│   └── painel.js               # Gerenciamento da área administrativa principal
│
├── index.html                  # Página inicial (Início)
├── login.html                  # Página de login do administrador
├── painel.html                 # Painel principal de controle
├── painel-editar.html          # Página de edição e atualização de conteúdo
│
└── README.md                   # Documentação do projeto (este arquivo)
```

---

## ⚙️ Execução do Projeto

Siga os passos abaixo para executar o projeto **Avós Digitais** localmente:

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/usuario/AvosDigitais.git
```

### 2️⃣ Acessar o diretório

```bash
cd AvosDigitais
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Executar o servidor

```bash
npm start
```

O servidor será iniciado em:

```
http://localhost:3000
```
---

## 🚀 Objetivo Final

O **Avós Digitais** tem como propósito **promover a educação digital e a segurança online** para o público idoso, unindo tecnologia e impacto social.
Com uma estrutura acessível e conteúdo dinâmico, o projeto busca **ensinar com simplicidade e confiança**, podendo ser expandido para novas funcionalidades no futuro.

## 🙏 Agradecimentos

Agradecimentos ao **time de desenvolvimento** pelo empenho e dedicação em todas as etapas do projeto, e aos **professores** pelo suporte e orientação que tornaram possível a realização deste trabalho.

## 📜 Licença

Este projeto está licenciado sob a **MIT License** — sinta-se à vontade para utilizar, modificar e compartilhar, desde que os devidos créditos sejam mantidos.

## ⭐ Apoie o Projeto

Se este conteúdo foi útil para você, **deixe uma estrela no repositório** e apoie o **Avós Digitais** a continuar promovendo **inclusão digital e segurança da informação** para todos.

---




