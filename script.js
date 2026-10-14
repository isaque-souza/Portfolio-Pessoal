// Para adicionar um novo projeto, basta incluir um item na lista.
// formato: "destaque" (grande, com lista de funcionalidades), "card" ou "linha" (lista de outros projetos).
// cor: cor da marca do projeto, usada no fundo da capa e nos detalhes.
// destaques: [ícone, texto]; os ícones ficam no sprite SVG do index.html (id "i-<nome>").
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
    destaques: [
      ["estoque", "Vendas e estoque"],
      ["preco", "Tabela de preços"],
      ["assistencia", "Assistência técnica e garantias"],
      ["relatorio", "Relatórios"],
    ],
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
      ["checkout", "Landing com checkout e acesso liberado pelo pagamento"],
      ["aula", "Área do aluno com progresso por aula e turmas ao vivo"],
      ["financeiro", "Financeiro integrado ao Asaas"],
      ["certificado", "Certificados em PDF com QR Code e validação pública"],
      ["email-auto", "E-mails automáticos e painel com indicadores"],
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

function criarIcone(nome) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `#i-${nome}`);
  svg.append(use);
  return svg;
}

function criarLink(texto, href) {
  const a = criarElemento("a", "", texto);
  a.href = href;
  if (href.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noopener";
    if (texto) a.append(criarIcone("seta"));
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
  if (projeto.demo) links.append(criarLink("Ver ao vivo", projeto.demo));
  if (projeto.codigo) links.append(criarLink("Código", projeto.codigo));
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
  for (const [icone, texto] of projeto.destaques) {
    const li = criarElemento("li", "", texto);
    li.prepend(criarIcone(icone));
    lista.append(li);
  }
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
  const dica = document.querySelector("#email-dica span");
  const iconeDica = document.querySelector("#email-dica use");
  const dicaOriginal = dica.innerHTML;
  let espera = null;

  botao.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(botao.dataset.email);
      dica.textContent = "E-mail copiado.";
      iconeDica.setAttribute("href", "#i-ok");
      botao.classList.add("copiado");
    } catch (e) {
      window.location.href = `mailto:${botao.dataset.email}`;
      return;
    }
    clearTimeout(espera);
    espera = setTimeout(() => {
      dica.innerHTML = dicaOriginal;
      iconeDica.setAttribute("href", "#i-copiar");
      botao.classList.remove("copiado");
    }, 2400);
  });
}

const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function lerSalvo(chave) {
  try {
    return localStorage.getItem(chave);
  } catch (e) {
    return null;
  }
}

function salvar(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch (e) {}
}

// Reinicia uma animação de CSS removendo e recolocando a classe
function animar(el, classe) {
  el.classList.remove(classe);
  void el.offsetWidth;
  el.classList.add(classe);
}

// Memoji do hero: fala uma frase nova a cada clique e inclina na direção do mouse
function iniciarMemoji() {
  const botao = document.querySelector(".memoji");
  const img = botao.querySelector("img");
  const balao = document.querySelector(".balao");
  const frases = [
    "E aí!",
    "Passa o mouse nas palavras coloridas",
    "Bora ver os projetos?",
    "Vai, Corinthians!",
    "Tem embaixadinha lá embaixo",
    "Aceito café e oportunidade",
  ];
  const rostos = [
    ["img/memoji-oi.webp", "Memoji do Isaque acenando"],
    ["img/memoji-rosto.webp", "Memoji do Isaque sorrindo"],
    ["img/memoji-tchau.webp", "Memoji do Isaque com a mão levantada"],
  ];
  let frase = 0;
  let rosto = 0;

  botao.addEventListener("click", () => {
    frase = (frase + 1) % frases.length;
    rosto = (rosto + 1) % rostos.length;
    balao.textContent = frases[frase];
    [img.src, img.alt] = rostos[rosto];
    animar(balao, "trocou");
    animar(botao, "pulo");
  });

  if (movimentoReduzido || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  let agendado = false;
  window.addEventListener("pointermove", (e) => {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(() => {
      agendado = false;
      const r = botao.getBoundingClientRect();
      if (r.bottom < 0) return;
      const dx = e.clientX - (r.left + r.width / 2);
      const inclinar = Math.max(-8, Math.min(8, dx / 60));
      botao.style.setProperty("--inclinar", `${inclinar}deg`);
      botao.style.setProperty("--desloca", `${inclinar * 0.8}px`);
    });
  });
}

// Embaixadinhas: cada clique na bola é um toque; se ela cair no chão, a contagem zera
function iniciarEmbaixadinhas() {
  const campo = document.querySelector(".campo");
  const bola = campo.querySelector(".bola");
  const contador = document.getElementById("embaixadinhas");
  const marcaRecorde = document.getElementById("recorde");
  const gravidade = 1500;
  const tamanho = 52;
  let recorde = Number(lerSalvo("recorde-embaixadinhas")) || 0;
  let toques = 0;
  let largura = 0, chao = 0;
  let x = 0, y = 0, vx = 0, vy = 0, giro = 0;
  let quadro = null, ultimo = 0;

  marcaRecorde.textContent = recorde;

  const medir = () => {
    largura = campo.clientWidth - tamanho;
    chao = campo.clientHeight - tamanho;
  };

  const desenhar = () => {
    bola.style.transform = `translate(${x}px, ${y}px) rotate(${giro}deg)`;
  };

  const passo = (agora) => {
    const dt = Math.min((agora - ultimo) / 1000, 0.032);
    ultimo = agora;
    vy += gravidade * dt;
    x += vx * dt;
    y += vy * dt;
    giro += vx * dt * 3;

    if (x < 0 || x > largura) {
      x = Math.max(0, Math.min(largura, x));
      vx *= -0.8;
    }
    if (y < 0) {
      y = 0;
      vy = Math.abs(vy) * 0.4;
    }
    if (y >= chao) {
      y = chao;
      if (toques > 0) {
        if (toques > recorde) {
          recorde = toques;
          marcaRecorde.textContent = recorde;
          salvar("recorde-embaixadinhas", recorde);
        }
        toques = 0;
        contador.textContent = 0;
      }
      vy = -vy * 0.45;
      vx *= 0.85;
      if (Math.abs(vy) < 80) vy = 0;
    }

    desenhar();
    const parada = vy === 0 && y === chao && Math.abs(vx) < 5;
    quadro = parada ? null : requestAnimationFrame(passo);
  };

  const chutar = () => {
    vy = -(620 + Math.random() * 140);
    vx = (Math.random() - 0.5) * 360;
    toques += 1;
    contador.textContent = toques;
    if (!quadro) {
      ultimo = performance.now();
      quadro = requestAnimationFrame(passo);
    }
  };

  medir();
  x = largura / 2;
  y = chao;
  desenhar();

  bola.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    chutar();
  });
  // Teclado (Enter/Espaço) dispara click sem pointerdown
  bola.addEventListener("click", (e) => {
    if (e.detail === 0) chutar();
  });
  window.addEventListener("resize", () => {
    medir();
    x = Math.min(x, largura);
    y = Math.min(y, chao);
    desenhar();
  });
}

// Bloco de grama: racha a cada clique e quebra no quinto
function iniciarBloco() {
  const bloco = document.querySelector(".bloco");
  const tile = bloco.closest(".tile");
  const contador = document.getElementById("blocos");
  const cores = ["#5d9b3a", "#6cb043", "#8b5a2b", "#7a4e24", "#9c6a3a"];
  let estagio = 0;
  let quebrados = 0;
  let ocupado = false;

  bloco.addEventListener("click", () => {
    if (ocupado) return;
    estagio += 1;
    if (estagio < 5) {
      bloco.dataset.estagio = estagio;
      animar(bloco, "batida");
      return;
    }

    ocupado = true;
    quebrados += 1;
    contador.textContent = quebrados;
    animar(bloco, "quebrou");

    if (!movimentoReduzido) {
      const r = bloco.getBoundingClientRect();
      const base = tile.getBoundingClientRect();
      for (let i = 0; i < 12; i++) {
        const p = criarElemento("span", "particula");
        p.style.left = `${r.left - base.left + r.width / 2}px`;
        p.style.top = `${r.top - base.top + r.height / 2}px`;
        p.style.background = cores[i % cores.length];
        p.style.setProperty("--px", `${(Math.random() - 0.5) * 180}px`);
        p.style.setProperty("--py", `${(Math.random() - 0.7) * 160}px`);
        p.style.setProperty("--pr", `${Math.random() * 360}deg`);
        tile.append(p);
        p.addEventListener("animationend", () => p.remove());
      }
    }

    setTimeout(() => {
      estagio = 0;
      bloco.dataset.estagio = 0;
      bloco.classList.remove("quebrou");
      animar(bloco, "voltou");
      ocupado = false;
    }, 700);
  });
}

// Cor de destaque escolhida pelo visitante no card de design
function iniciarCores() {
  const raiz = document.documentElement;
  const botoes = document.querySelectorAll(".cores button");
  const marcar = (cor) => {
    botoes.forEach((b) => b.setAttribute("aria-checked", String(b.dataset.cor === cor)));
  };
  marcar(raiz.dataset.cor || "azul");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const cor = botao.dataset.cor;
      if (cor === "azul") delete raiz.dataset.cor;
      else raiz.dataset.cor = cor;
      salvar("cor", cor);
      marcar(cor);
    });
  });
}

// O equalizador só anima com o card na tela; o Memoji do contato acena ao aparecer
function iniciarObservadores() {
  const musica = document.querySelector(".tile-musica");
  const contato = document.querySelector(".contact");
  new IntersectionObserver(([e]) => musica.classList.toggle("tocando", e.isIntersecting)).observe(musica);
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    contato.classList.add("visivel");
    obs.disconnect();
  }, { threshold: 0.4 });
  obs.observe(contato);
}

renderizarProjetos();
iniciarPreview();
iniciarTema();
iniciarCopiarEmail();
iniciarMemoji();
iniciarEmbaixadinhas();
iniciarBloco();
iniciarCores();
iniciarObservadores();
document.getElementById("ano").textContent = new Date().getFullYear();
requestAnimationFrame(() => document.body.classList.add("carregado"));
