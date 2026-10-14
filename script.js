// Para adicionar um novo projeto, basta incluir um item na lista.
const projetos = [
  {
    titulo: "Fluxoly",
    imagem: "img/fluxoly.jpg",
    ano: "2026",
    descricao: "Plataforma de gestão para lojas de dispositivos móveis premium: vendas, estoque, tabela de preços, assistência técnica, garantias e relatórios em um único fluxo.",
    status: "producao",
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
    titulo: "Rascunho",
    imagem: "img/rascunho.jpg",
    ano: "2026",
    descricao: "Plataforma da Rascunho, escola de marketing: landing com checkout e acesso liberado pelo pagamento, área do aluno com progresso por aula, turmas ao vivo, financeiro integrado ao Asaas, certificados em PDF com QR Code e validação pública, e-mails automáticos e painel com indicadores.",
    status: "producao",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Railway"],
    demo: "https://rascunho.app.br",
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
    descricao: "Sistema de gestão para uma barbearia: agenda, atendimento, financeiro, comissão automática, estoque e fidelização. Monorepo com contrato de API em OpenAPI compartilhado entre front e back.",
    status: "desenvolvimento",
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


// Linhas do objeto exibido no hero: cada trecho é [classe de cor, texto]
const codigoHero = [
  [["tk-kw", "const "], ["tk-var", "isaque"], ["tk-pun", " = {"]],
  [["", "  "], ["tk-key", "cargo"], ["tk-pun", ": "], ["tk-str", '"Desenvolvedor Júnior"'], ["tk-pun", ","]],
  [["", "  "], ["tk-key", "local"], ["tk-pun", ": "], ["tk-str", '"Guarulhos, SP"'], ["tk-pun", ","]],
  [["", "  "], ["tk-key", "stack"], ["tk-pun", ": ["], ["tk-str", '"React"'], ["tk-pun", ", "], ["tk-str", '"Next.js"'], ["tk-pun", ", "], ["tk-str", '"TypeScript"'], ["tk-pun", ", "], ["tk-str", '"Python"'], ["tk-pun", "],"]],
  [["", "  "], ["tk-key", "emProducao"], ["tk-pun", ": ["], ["tk-str", '"Fluxoly"'], ["tk-pun", ", "], ["tk-str", '"Rascunho"'], ["tk-pun", "],"]],
  [["", "  "], ["tk-key", "buscando"], ["tk-pun", ": "], ["tk-str", '"minha primeira vaga"'], ["tk-pun", ","]],
  [["tk-pun", "};"]],
];

const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const ponteiroFino = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

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
    card.dataset.producao = String(projeto.status === "producao");
    card.dataset.aberto = String(Boolean(projeto.codigo));

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
    if (projeto.status === "producao") capa.append(criarElemento("span", "badge badge-live", "Em produção"));
    if (projeto.status === "desenvolvimento") capa.append(criarElemento("span", "badge", "Em desenvolvimento"));

    const corpo = criarElemento("div", "project-body");
    corpo.append(topo, criarElemento("p", "", projeto.descricao), tags, links);
    card.append(capa, corpo);
    lista.append(card);
  }

  document.getElementById("qtd-projetos").textContent = projetos.length;
  document.getElementById("qtd-producao").textContent = projetos.filter((p) => p.status === "producao").length;
}

function renderizarFaixa() {
  const faixa = document.getElementById("faixa-tecnologias");
  // Lista duplicada para o loop da animação ficar contínuo
  for (const tec of [...tecnologias, ...tecnologias]) faixa.append(criarElemento("span", "", tec));
}

// Digita o objeto do hero caractere por caractere, mantendo as cores
function digitarCodigo() {
  const alvo = document.getElementById("codigo-hero");
  const trechos = [];
  codigoHero.forEach((linha, i) => {
    trechos.push(...linha);
    if (i < codigoHero.length - 1) trechos.push(["", "\n"]);
  });
  const total = trechos.reduce((soma, [, texto]) => soma + texto.length, 0);

  const desenhar = (qtd) => {
    alvo.textContent = "";
    let restante = qtd;
    for (const [classe, texto] of trechos) {
      if (restante <= 0) break;
      const parte = texto.slice(0, restante);
      restante -= parte.length;
      alvo.append(classe ? criarElemento("span", classe, parte) : document.createTextNode(parte));
    }
  };

  if (movimentoReduzido) return desenhar(total);

  let qtd = 0;
  setTimeout(function passo() {
    qtd += 1;
    desenhar(qtd);
    if (qtd < total) setTimeout(passo, 14 + Math.random() * 26);
  }, 900);
}

// Grade de pontos do hero que acende perto do cursor
function iniciarGradeHero() {
  const hero = document.querySelector(".hero");
  const canvas = hero.querySelector(".hero-grid");
  const glow = hero.querySelector(".hero-glow");
  const ctx = canvas.getContext("2d");
  const espaco = 28;
  const raio = 160;
  let largura = 0, altura = 0, cor = "", corForte = "";
  let mouse = { x: -9999, y: -9999 };
  let visivel = true;
  let quadro = null;

  const lerCores = () => {
    const estilo = getComputedStyle(document.documentElement);
    cor = estilo.getPropertyValue("--muted").trim();
    corForte = estilo.getPropertyValue("--accent").trim();
  };

  const redimensionar = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    largura = hero.clientWidth;
    altura = hero.clientHeight;
    canvas.width = largura * dpr;
    canvas.height = altura * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const desenhar = (tempo) => {
    ctx.clearRect(0, 0, largura, altura);
    for (let x = espaco / 2; x < largura; x += espaco) {
      for (let y = espaco / 2; y < altura; y += espaco) {
        const dist = Math.hypot(x - mouse.x, y - mouse.y);
        const perto = Math.max(0, 1 - dist / raio);
        const onda = movimentoReduzido ? 0 : (Math.sin(x * 0.012 + y * 0.018 + tempo * 0.0012) + 1) / 2;
        ctx.globalAlpha = 0.14 + onda * 0.12 + perto * 0.75;
        ctx.fillStyle = perto > 0.05 ? corForte : cor;
        ctx.beginPath();
        ctx.arc(x, y, 1 + perto * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  };

  const loop = (tempo) => {
    desenhar(tempo);
    quadro = visivel && !movimentoReduzido ? requestAnimationFrame(loop) : null;
  };

  const retomar = () => {
    if (!quadro && visivel) quadro = requestAnimationFrame(loop);
  };

  lerCores();
  redimensionar();
  if (movimentoReduzido) desenhar(0);
  else retomar();

  window.addEventListener("resize", () => {
    redimensionar();
    desenhar(performance.now());
  });

  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    glow.style.setProperty("--gx", `${mouse.x}px`);
    glow.style.setProperty("--gy", `${mouse.y}px`);
    if (movimentoReduzido) desenhar(0);
  });
  hero.addEventListener("pointerleave", () => {
    mouse = { x: -9999, y: -9999 };
    if (movimentoReduzido) desenhar(0);
  });

  // Pausa a animação quando o hero sai da tela
  new IntersectionObserver(([entrada]) => {
    visivel = entrada.isIntersecting;
    if (visivel && !movimentoReduzido) retomar();
  }).observe(hero);

  return () => {
    lerCores();
    desenhar(performance.now());
  };
}

function iniciarTema(aoTrocar) {
  const raiz = document.documentElement;
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const tema = raiz.dataset.theme === "dark" ? "light" : "dark";
    raiz.dataset.theme = tema;
    try {
      localStorage.setItem("tema", tema);
    } catch (e) {}
    aoTrocar();
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

// Spotlight na borda e leve inclinação 3D nos cards
function iniciarCards() {
  if (!ponteiroFino) return;
  document.querySelectorAll(".project").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      if (movimentoReduzido) return;
      const rx = (y / r.height - 0.5) * -4;
      const ry = (x / r.width - 0.5) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function iniciarFiltros() {
  const botoes = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".project");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const filtro = botao.dataset.filtro;
      botoes.forEach((b) => {
        b.classList.toggle("active", b === botao);
        b.setAttribute("aria-pressed", String(b === botao));
      });

      let atraso = 0;
      cards.forEach((card) => {
        const mostrar = filtro === "todos" || card.dataset[filtro] === "true";
        card.classList.toggle("oculto", !mostrar);
        if (!mostrar || movimentoReduzido) return;
        card.classList.add("visible", "entrando");
        card.style.transitionDelay = `${atraso}ms`;
        atraso += 60;
        requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove("entrando")));
        setTimeout(() => (card.style.transitionDelay = ""), atraso + 400);
      });
    });
  });
}

// Botões que seguem levemente o cursor
function iniciarMagneticos() {
  if (!ponteiroFino || movimentoReduzido) return;
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
}

function iniciarCopiarEmail() {
  const botao = document.querySelector(".copy-email");
  const rotulo = botao.querySelector(".copy-label");
  const original = rotulo.textContent;
  botao.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(botao.dataset.email);
      rotulo.textContent = "E-mail copiado ✓";
      botao.classList.add("copiado");
    } catch (e) {
      rotulo.textContent = "Não foi possível copiar";
    }
    setTimeout(() => {
      rotulo.textContent = original;
      botao.classList.remove("copiado");
    }, 2200);
  });
}

// Barra de progresso no topo e linha da formação que se preenche ao rolar
function iniciarRolagem() {
  const header = document.querySelector(".site-header");
  const raiz = document.documentElement;
  const timelines = document.querySelectorAll(".timeline");
  let agendado = false;

  const atualizar = () => {
    agendado = false;
    const max = raiz.scrollHeight - window.innerHeight;
    raiz.style.setProperty("--progresso", max > 0 ? (window.scrollY / max).toFixed(4) : 0);
    header.classList.toggle("scrolled", window.scrollY > 8);

    const linhaDeLeitura = window.innerHeight * 0.7;
    timelines.forEach((lista) => {
      const r = lista.getBoundingClientRect();
      const fracao = Math.min(1, Math.max(0, (linhaDeLeitura - r.top) / r.height));
      lista.style.setProperty("--preenchido", fracao.toFixed(3));
      lista.querySelectorAll("li").forEach((item) => {
        item.classList.toggle("ativo", item.getBoundingClientRect().top + 12 < linhaDeLeitura);
      });
    });
  };

  window.addEventListener("scroll", () => {
    if (!agendado) {
      agendado = true;
      requestAnimationFrame(atualizar);
    }
  }, { passive: true });
  window.addEventListener("resize", atualizar);
  atualizar();
}

function iniciarMenu() {
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
  document.addEventListener("keydown", (e) => e.key === "Escape" && fechar());

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
const redesenharGrade = iniciarGradeHero();
iniciarTema(redesenharGrade);
iniciarAnimacoes();
iniciarCards();
iniciarFiltros();
iniciarMagneticos();
iniciarCopiarEmail();
iniciarRolagem();
iniciarMenu();
digitarCodigo();
document.getElementById("ano").textContent = new Date().getFullYear();
requestAnimationFrame(() => document.body.classList.add("carregado"));
