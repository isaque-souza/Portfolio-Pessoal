// Para adicionar um novo projeto, basta incluir um item na lista.
// formato: "destaque" (grande, com lista de funcionalidades), "card" ou "linha" (lista de outros projetos).
// cor: cor da marca do projeto, usada no fundo da capa e nos detalhes.
const projetos = [
  {
    id: "fluxoly",
    titulo: "Fluxoly",
    formato: "destaque",
    cliente: "Lojas de dispositivos móveis premium",
    cor: "#e8344e",
    imagem: "img/fluxoly.jpg",
    ano: "2026",
    descricao: "Plataforma de gestão que junta a operação da loja em um único fluxo, do balcão à assistência técnica.",
    destaques: ["Vendas e estoque", "Tabela de preços", "Assistência técnica e garantias", "Relatórios"],
    status: "producao",
    tecnologias: ["React", "Vite", "Tailwind CSS", "Python", "Flask", "SQLite", "pytest", "Playwright"],
    demo: "https://assistencia-system.vercel.app",
    codigo: "https://github.com/isaque-souza/assistencia_system",
  },
  {
    id: "rascunho",
    titulo: "Rascunho",
    formato: "destaque",
    cliente: "Escola de marketing",
    cor: "#4b25a8",
    imagem: "img/rascunho.jpg",
    ano: "2026",
    descricao: "Plataforma da escola, da página de venda ao certificado: o aluno compra, ganha acesso, assiste às aulas e recebe o certificado.",
    destaques: [
      "Landing com checkout e acesso liberado pelo pagamento",
      "Área do aluno com progresso por aula e turmas ao vivo",
      "Financeiro integrado ao Asaas",
      "Certificados em PDF com QR Code e validação pública",
      "E-mails automáticos e painel com indicadores",
    ],
    status: "producao",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Railway"],
    demo: "https://rascunho.app.br",
    codigo: "",
    privado: true,
  },
  {
    id: "carimbo",
    titulo: "Carimbo",
    formato: "card",
    cliente: "Agências de marketing e social media",
    cor: "#6d3ae0",
    imagem: "img/carimbo.jpg",
    ano: "2026",
    descricao: "Sistema multiempresa com clientes, contratos, cobranças por boleto/Pix com baixa automática, calendário de conteúdo, portal de aprovação do cliente, tarefas, métricas e legendas geradas por IA.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Claude API"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    id: "meu-sabor",
    titulo: "Meu Sabor",
    formato: "card",
    cliente: "Distribuidora de temperos",
    cor: "#8a5410",
    imagem: "img/meu-sabor.jpg",
    ano: "2026",
    descricao: "ERP interno e enxuto: o vendedor tira o pedido no celular, a separação vê a demanda consolidada dos pedidos contra o estoque e o gerente acompanha o dia.",
    tecnologias: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Vitest"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    id: "dezflow",
    titulo: "DEZFLOW",
    formato: "card",
    cliente: "Barbearia",
    cor: "#b4232a",
    imagem: "img/dezflow.jpg",
    foto: true,
    ano: "2026",
    descricao: "Agenda, atendimento, financeiro, comissão automática, estoque e fidelização. Monorepo com contrato de API em OpenAPI compartilhado entre front e back.",
    status: "desenvolvimento",
    tecnologias: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    id: "souza-tech-os",
    titulo: "Souza Tech OS",
    formato: "card",
    cliente: "Uso interno da Souza Tech",
    cor: "#2563eb",
    imagem: "img/souza-tech-os.jpg",
    ano: "2026",
    descricao: "Centraliza clientes, sistemas, projetos, tarefas, roadmap, contratos, licenças, financeiro e infraestrutura. Monorepo com testes E2E e deploy em VPS com Docker.",
    tecnologias: ["React", "Vite", "Express", "Prisma", "PostgreSQL", "Turborepo", "Docker"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    id: "taldo-manager",
    titulo: "Taldo Manager",
    formato: "linha",
    cliente: "Projeto de estudo",
    cor: "#0284c7",
    imagem: "img/taldo-manager.jpg",
    ano: "2026",
    descricao: "Simulador de futebol estilo Football Manager feito para estudar orientação a objetos e arquitetura em camadas. Temporadas completas e 153 testes.",
    tecnologias: ["Python", "FastAPI", "SQLite", "JavaScript", "pytest"],
    demo: "",
    codigo: "https://github.com/isaque-souza/TaldoManager",
  },
  {
    id: "souza-tech",
    titulo: "Souza Tech",
    formato: "linha",
    cliente: "Landing page",
    cor: "#00a3ff",
    imagem: "img/souza-tech.jpg",
    ano: "2026",
    descricao: "Site da Souza Tech com a logo animada em HTML/CSS, respeitando prefers-reduced-motion, e um kit de logo em SVG.",
    tecnologias: ["HTML", "CSS", "SVG"],
    demo: "https://isaque-souza.github.io/souza-tech/",
    codigo: "https://github.com/isaque-souza/souza-tech",
  },
  {
    id: "bekind",
    titulo: "BeKind",
    formato: "linha",
    cliente: "TCC na ETEC Guarulhos",
    cor: "#2f6fd6",
    imagem: "img/bekind.jpg",
    ano: "2023",
    descricao: "3º melhor projeto na FECEG e semifinalista na FEBRACE.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://isaque-souza.github.io/TCC-Bekind/",
    codigo: "https://github.com/isaque-souza/TCC-Bekind",
  },
];

const statusTexto = { producao: "Em produção", desenvolvimento: "Em desenvolvimento" };

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

function pintar(el, projeto) {
  el.classList.add("com-cor");
  el.style.setProperty("--cor", projeto.cor);
  el.dataset.preview = projeto.imagem;
}

// A capa é um link para a demo quando existe; senão, só a imagem
function criarCapa(projeto) {
  const capa = projeto.demo ? criarLink("", projeto.demo) : criarElemento("div");
  capa.className = projeto.foto ? "cover cover-foto" : "cover";
  if (projeto.demo) capa.setAttribute("aria-label", `Abrir ${projeto.titulo}`);
  const img = criarElemento("img");
  img.src = projeto.imagem;
  img.alt = projeto.foto ? "" : `Tela do ${projeto.titulo}`;
  img.loading = "lazy";
  capa.append(img);
  return capa;
}

function criarLinks(projeto) {
  const links = criarElemento("div", "project-links");
  if (projeto.demo) links.append(criarLink("Ver ao vivo ↗", projeto.demo));
  if (projeto.codigo) links.append(criarLink("Código ↗", projeto.codigo));
  if (projeto.privado) links.append(criarElemento("span", "project-private", "Código privado"));
  return links;
}

function criarStatus(projeto) {
  return projeto.status ? criarElemento("span", `status status-${projeto.status}`, statusTexto[projeto.status]) : null;
}

function criarDestaque(projeto) {
  const item = criarElemento("article", "featured-item");
  item.id = projeto.id;
  pintar(item, projeto);

  const cabeca = criarElemento("div");
  cabeca.append(criarElemento("h3", "", projeto.titulo), criarElemento("p", "client", projeto.cliente));
  const status = criarStatus(projeto);
  if (status) cabeca.append(status);

  const desc = criarElemento("div", "featured-desc");
  const lista = criarElemento("ul", "highlights");
  for (const d of projeto.destaques) lista.append(criarElemento("li", "", d));
  desc.append(criarElemento("p", "", projeto.descricao), lista);

  const lado = criarElemento("div", "featured-side");
  lado.append(criarElemento("p", "stack", projeto.tecnologias.join(", ")), criarLinks(projeto));

  const info = criarElemento("div", "featured-info");
  info.append(cabeca, desc, lado);
  item.append(criarCapa(projeto), info);
  return item;
}

function criarCard(projeto) {
  const card = criarElemento("article", "card");
  card.id = projeto.id;
  pintar(card, projeto);

  const topo = criarElemento("div", "card-top");
  topo.append(criarElemento("h3", "", projeto.titulo), criarStatus(projeto) || criarElemento("span", "stack", projeto.ano));

  card.append(
    criarCapa(projeto),
    topo,
    criarElemento("p", "client", projeto.cliente),
    criarElemento("p", "card-desc", projeto.descricao),
    criarElemento("p", "stack", projeto.tecnologias.join(", ")),
    criarLinks(projeto)
  );
  return card;
}

function criarLinha(projeto) {
  const linha = criarElemento("li");
  linha.id = projeto.id;
  pintar(linha, projeto);

  const nome = criarElemento("div", "nome", projeto.titulo);
  nome.append(criarElemento("span", "", `${projeto.cliente} · ${projeto.ano}`));
  linha.append(nome, criarElemento("p", "", projeto.descricao), criarLinks(projeto));
  return linha;
}

function renderizarProjetos() {
  const alvos = {
    destaque: [document.getElementById("projetos-destaque"), criarDestaque],
    card: [document.getElementById("projetos-cards"), criarCard],
    linha: [document.getElementById("projetos-lista"), criarLinha],
  };
  for (const projeto of projetos) {
    const [lista, criar] = alvos[projeto.formato];
    lista.append(criar(projeto));
  }

  // As palavras do título herdam a cor e o print do projeto correspondente
  document.querySelectorAll(".nicho").forEach((link) => {
    const projeto = projetos.find((p) => p.id === link.dataset.projeto);
    if (projeto) pintar(link, projeto);
  });
}

// Print que segue o cursor sobre as palavras do título e a lista de outros projetos
function iniciarPreview() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const caixa = document.querySelector(".preview");
  const img = caixa.querySelector("img");
  let alvo = { x: 0, y: 0 };
  let atual = { x: 0, y: 0 };
  let quadro = null;

  const mover = () => {
    atual.x += (alvo.x - atual.x) * 0.2;
    atual.y += (alvo.y - atual.y) * 0.2;
    caixa.style.transform = `translate(${atual.x}px, ${atual.y}px)`;
    quadro = Math.abs(alvo.x - atual.x) + Math.abs(alvo.y - atual.y) > 0.5 ? requestAnimationFrame(mover) : null;
  };

  const posicionar = (e) => {
    // Fica à direita do cursor, ou à esquerda perto da borda da tela
    const largura = caixa.offsetWidth;
    const altura = caixa.offsetHeight;
    const x = e.clientX + 24 + largura > window.innerWidth ? e.clientX - largura - 24 : e.clientX + 24;
    alvo = { x, y: Math.min(e.clientY - altura / 2, window.innerHeight - altura - 16) };
    if (reduzido) {
      atual = { ...alvo };
      caixa.style.transform = `translate(${atual.x}px, ${atual.y}px)`;
    } else if (!quadro) {
      quadro = requestAnimationFrame(mover);
    }
  };

  document.querySelectorAll(".nicho, .others-list li").forEach((el) => {
    el.addEventListener("pointerenter", (e) => {
      img.src = el.dataset.preview;
      posicionar(e);
      atual = { ...alvo };
      caixa.style.transform = `translate(${atual.x}px, ${atual.y}px)`;
      caixa.classList.add("ativo");
    });
    el.addEventListener("pointermove", posicionar);
    el.addEventListener("pointerleave", () => caixa.classList.remove("ativo"));
  });
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

function iniciarCopiarEmail() {
  const botao = document.querySelector(".email");
  const dica = document.getElementById("email-dica");
  const dicaOriginal = dica.innerHTML;
  let espera = null;

  botao.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(botao.dataset.email);
      dica.textContent = "E-mail copiado.";
      botao.classList.add("copiado");
    } catch (e) {
      window.location.href = `mailto:${botao.dataset.email}`;
      return;
    }
    clearTimeout(espera);
    espera = setTimeout(() => {
      dica.innerHTML = dicaOriginal;
      botao.classList.remove("copiado");
    }, 2400);
  });
}

renderizarProjetos();
iniciarPreview();
iniciarTema();
iniciarCopiarEmail();
document.getElementById("ano").textContent = new Date().getFullYear();
