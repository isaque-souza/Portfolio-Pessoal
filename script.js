// Para adicionar um novo projeto, basta incluir um item na lista.
const projetos = [
  {
    titulo: "Fluxoly",
    imagem: "img/fluxoly.jpg",
    ano: "2026",
    descricao: "Plataforma de gestão para lojas de dispositivos móveis premium: vendas, estoque, tabela de preços, assistência técnica, garantias e relatórios em um único fluxo. Em produção.",
    tecnologias: ["React", "Vite", "Tailwind CSS", "Python", "Flask", "SQLite", "pytest", "Playwright"],
    demo: "https://assistencia-system.vercel.app",
    codigo: "https://github.com/isaque-souza/assistencia_system",
  },
  {
    titulo: "Carimbo",
    imagem: "img/carimbo.jpg",
    ano: "2026",
    descricao: "Sistema multiempresa para agências de marketing e social media: clientes, contratos, cobranças por boleto/Pix com baixa automática, calendário de conteúdo, portal de aprovação do cliente, tarefas, métricas e legendas geradas por IA.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Claude API"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "Meu Sabor",
    imagem: "img/meu-sabor.jpg",
    ano: "2026",
    descricao: "ERP interno e enxuto para uma distribuidora de temperos: o vendedor tira o pedido no celular, a separação vê a demanda consolidada dos pedidos contra o estoque e o gerente acompanha o dia.",
    tecnologias: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Vitest"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "André Feliph",
    imagem: "img/andre-feliph.jpg",
    ano: "2026",
    descricao: "Plataforma de cursos com acesso liberado por plano pago: alunos, cursos, aulas, turmas, progresso, checkout, certificados em PDF com QR Code e validação pública, além de automações por WhatsApp e e-mail.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "Souza Tech OS",
    imagem: "img/souza-tech-os.jpg",
    ano: "2026",
    descricao: "Sistema interno da Souza Tech que centraliza clientes, sistemas, projetos, tarefas, roadmap, contratos, licenças, financeiro e infraestrutura. Monorepo com testes E2E e deploy em VPS com Docker.",
    tecnologias: ["React", "Vite", "Express", "Prisma", "PostgreSQL", "Turborepo", "Docker"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "DEZFLOW",
    imagem: "img/dezflow.jpg",
    ano: "2026",
    descricao: "Em desenvolvimento. Sistema de gestão para uma barbearia: agenda, atendimento, financeiro, comissão automática, estoque e fidelização. Monorepo com contrato de API em OpenAPI compartilhado entre front e back.",
    tecnologias: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "Taldo Manager",
    imagem: "img/taldo-manager.jpg",
    ano: "2026",
    descricao: "Simulador de futebol estilo Football Manager feito do zero para estudar orientação a objetos e arquitetura: temporadas completas com escalação, lesões, suspensões e estatísticas. Arquitetura em camadas e 153 testes.",
    tecnologias: ["Python", "FastAPI", "SQLite", "JavaScript", "pytest"],
    demo: "",
    codigo: "https://github.com/isaque-souza/TaldoManager",
  },
  {
    titulo: "Souza Tech",
    imagem: "img/souza-tech.jpg",
    ano: "2026",
    descricao: "Landing page da Souza Tech, com a logo animada em HTML/CSS (respeitando prefers-reduced-motion) e um kit de logo em SVG.",
    tecnologias: ["HTML", "CSS", "SVG"],
    demo: "https://isaque-souza.github.io/souza-tech/",
    codigo: "https://github.com/isaque-souza/souza-tech",
  },
  {
    titulo: "BeKind",
    imagem: "img/bekind.jpg",
    ano: "2023",
    descricao: "Projeto de TCC do curso técnico na ETEC Guarulhos. 3º melhor projeto na FECEG e semifinalista na FEBRACE.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://isaque-souza.github.io/TCC-Bekind/",
    codigo: "https://github.com/isaque-souza/TCC-Bekind",
  },
];

const tecnologias = [
  "React", "Next.js", "TypeScript", "Python", "Flask", "FastAPI", "Node.js", "Express",
  "PHP", "HTML", "CSS", "Tailwind CSS", "SQL", "PostgreSQL", "MySQL", "SQLite", "Prisma",
  "APIs REST", "Docker", "pytest", "Playwright", "Git", "GitHub",
];

function criarElemento(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto) el.textContent = texto;
  return el;
}

function criarLink(texto, href) {
  const a = criarElemento("a", "", texto);
  a.href = href;
  if (href.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noopener";
  }
  return a;
}

function renderizarProjetos() {
  const lista = document.getElementById("lista-projetos");

  for (const projeto of projetos) {
    const card = criarElemento("article", "project reveal");

    const topo = criarElemento("div", "project-top");
    topo.append(criarElemento("h3", "", projeto.titulo), criarElemento("span", "project-year", projeto.ano));

    const tags = criarElemento("ul", "tags");
    for (const tec of projeto.tecnologias) tags.append(criarElemento("li", "", tec));

    const links = criarElemento("div", "project-links");
    if (projeto.demo) links.append(criarLink("Ver demo ↗", projeto.demo));
    if (projeto.codigo) links.append(criarLink("Código ↗", projeto.codigo));
    if (projeto.privado) links.append(criarElemento("span", "project-private", "Código privado"));

    // Sem imagem, o card mostra o nome do projeto no lugar da captura
    const capa = criarElemento("div", "project-cover");
    if (projeto.imagem) {
      const img = criarElemento("img");
      img.src = projeto.imagem;
      img.alt = `Tela do projeto ${projeto.titulo}`;
      img.loading = "lazy";
      capa.append(img);
    } else {
      capa.append(criarElemento("span", "", projeto.titulo));
    }

    const corpo = criarElemento("div", "project-body");
    corpo.append(topo, criarElemento("p", "", projeto.descricao), tags, links);
    card.append(capa, corpo);
    lista.append(card);
  }
}

function renderizarFaixa() {
  const faixa = document.getElementById("faixa-tecnologias");
  // Lista duplicada para o loop da animação ficar contínuo
  for (const tec of [...tecnologias, ...tecnologias]) faixa.append(criarElemento("span", "", tec));
}

function iniciarTema() {
  const raiz = document.documentElement;
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const tema = raiz.dataset.theme === "dark" ? "light" : "dark";
    raiz.dataset.theme = tema;
    try {
      localStorage.setItem("tema", tema);
    } catch (e) {}
  });
}

function iniciarAnimacoes() {
  const itens = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    itens.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observer.unobserve(entrada.target);
        }
      }
    },
    { threshold: 0.1 }
  );
  itens.forEach((el) => observer.observe(el));
}

function iniciarMenu() {
  const header = document.querySelector(".site-header");
  const botao = document.querySelector(".nav-toggle");
  const nav = document.getElementById("menu");
  const links = nav.querySelectorAll("a");

  const fechar = () => {
    nav.classList.remove("open");
    botao.setAttribute("aria-expanded", "false");
  };

  botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("open");
    botao.setAttribute("aria-expanded", String(aberto));
  });
  links.forEach((link) => link.addEventListener("click", fechar));

  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 8), { passive: true });

  // Destaca no menu a seção visível
  const observer = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entrada.target.id}`));
      }
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((secao) => observer.observe(secao));
}

renderizarProjetos();
renderizarFaixa();
iniciarTema();
iniciarAnimacoes();
iniciarMenu();
document.getElementById("ano").textContent = new Date().getFullYear();
