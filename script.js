// MENU MOBILE
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.style.display === "flex";
    navMenu.style.display = isOpen ? "none" : "flex";
  });
}

// SMOOTH SCROLL PARA LINKS DO MENU
document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (window.innerWidth < 768 && navMenu) {
      navMenu.style.display = "none";
    }
  });
});

// AGENDA DA SEMANA (CARD DO HERO)
const agendaSemana = document.getElementById("agendaSemana");
if (agendaSemana) {
  const horarios = [
    { dia: "Segunda", status: "Poucas vagas" },
    { dia: "Terça", status: "Livre à tarde" },
    { dia: "Quarta", status: "2 horários" },
    { dia: "Quinta", status: "Lotado" },
    { dia: "Sexta", status: "Livre manhã" },
  ];

  horarios.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.dia}</span><span>${item.status}</span>`;
    agendaSemana.appendChild(li);
  });
}

// AGENDA TABELA
const agendaTabelaBody = document.getElementById("agendaTabelaBody");
if (agendaTabelaBody) {
  const linhas = [
    { dia: "Segunda", periodo: "14h às 18h", obs: "Alongamento e manutenção" },
    { dia: "Terça", periodo: "09h às 12h", obs: "Blindagem e esmaltação" },
    { dia: "Quarta", periodo: "13h às 19h", obs: "Nail art e especiais" },
    { dia: "Quinta", periodo: "14h às 20h", obs: "Agenda cheia com lista de espera" },
    { dia: "Sexta", periodo: "09h às 16h", obs: "Atendimento geral" },
  ];

  linhas.forEach((linha) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${linha.dia}</td>
      <td>${linha.periodo}</td>
      <td>${linha.obs}</td>
    `;
    agendaTabelaBody.appendChild(tr);
  });
}

// PORTFÓLIO – FILTRO SIMPLES
const filtroBotoes = document.querySelectorAll(".btn-chip");
const portfolioItens = document.querySelectorAll(".portfolio-item");

filtroBotoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const filtro = botao.getAttribute("data-filter");

    filtroBotoes.forEach((b) => b.classList.remove("active"));
    botao.classList.add("active");

    portfolioItens.forEach((item) => {
      const categoria = item.getAttribute("data-category");
      if (filtro === "todas" || categoria === filtro) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// FORMULÁRIO – SIMULAÇÃO DE ENVIO
const contatoForm = document.getElementById("contatoForm");
const formMsg = document.getElementById("formMsg");

if (contatoForm && formMsg) {
  contatoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const servico = document.getElementById("servico").value;

    if (!nome || !whatsapp || !servico) {
      formMsg.textContent = "Por favor, preencha os campos obrigatórios.";
      formMsg.style.color = "#e34f8c";
      return;
    }

    formMsg.textContent =
      "Mensagem enviada com sucesso (simulação). Entre em contato pelo WhatsApp para agilizar o atendimento 💕";
    formMsg.style.color = "#2a2032";

    contatoForm.reset();
  });
}

// ANO DO FOOTER
const anoAtualSpan = document.getElementById("anoAtual");
if (anoAtualSpan) {
  anoAtualSpan.textContent = new Date().getFullYear();
}
