# Portfólio — Isaque Souza

Portfólio pessoal de Isaque Souza, desenvolvedor júnior e estudante de Engenharia de Computação em Guarulhos, SP.

**No ar:** https://isaque-souza.github.io/Portfolio-Pessoal/

## Sobre o projeto

Site estático feito só com HTML, CSS e JavaScript, sem frameworks nem etapa de build. Reúne apresentação, habilidades, projetos, formação e contato.

Destaques:

- Os projetos são o centro da página, apresentados como estudos de caso em três tamanhos: destaques, cards e uma lista de outros projetos
- O título do hero cita os tipos de negócio atendidos; cada palavra tem a cor da marca do projeto correspondente e mostra o print do sistema ao passar o mouse
- Cada capa usa a cor real da marca do projeto; o resto do site usa neutros frios com o azul da Souza Tech como acento
- Ícones e logos das tecnologias num sprite SVG embutido no `index.html` (Iconify: simple-icons, devicon, mdi e lucide)
- Tema claro e escuro, seguindo a preferência do sistema e lembrando a escolha do visitante
- Memoji no hero que acena ao carregar, inclina na direção do mouse e troca de frase a cada clique
- Seção "Fora do código" com minijogo de embaixadinhas (recorde salvo no navegador), bloco de Minecraft que quebra, equalizador da playlist e seletor da cor de destaque do site
- E-mail que copia com um clique
- Movimento só em resposta à interação, layout responsivo, foco visível no teclado e respeito a `prefers-reduced-motion`

## Estrutura

```
index.html   # estrutura e conteúdo das seções
styles.css   # tokens de cor/tipografia, temas e layout
script.js    # lista de projetos e todas as interações
img/         # capturas de tela dos projetos
```

## Adicionando um projeto

Os projetos são renderizados a partir da lista `projetos` no início de `script.js`. Basta incluir um novo item:

```js
{
  id: "nome-do-projeto",              // âncora do projeto (#nome-do-projeto)
  titulo: "Nome do projeto",
  formato: "card",                    // "destaque", "card" ou "linha"
  cliente: "Para quem foi feito",
  cor: "#2563eb",                     // cor da marca do projeto
  imagem: "img/nome-do-projeto.jpg",
  foto: true,                         // opcional; use quando a imagem for foto e não print de tela
  ano: "2026",
  descricao: "O que o sistema faz.",
  destaques: [["estoque", "Vendas e estoque"]], // [ícone do sprite, texto]; formato "destaque"
  status: "producao",                 // opcional: "producao" ou "desenvolvimento"
  tecnologias: ["React", "TypeScript"],
  demo: "https://...",                // opcional
  codigo: "https://github.com/...",   // opcional
  privado: true,                      // opcional; mostra "Código privado"
},
```

Para ligar uma palavra do título do hero a um projeto, use `data-projeto="<id>"` no link em `index.html`.

## Rodando localmente

Abra o `index.html` no navegador ou sirva a pasta:

```bash
python -m http.server
```

e acesse http://localhost:8000.

## Contato

- E-mail: souzaa0901@gmail.com
- GitHub: [isaque-souza](https://github.com/isaque-souza)
- LinkedIn: [Isaque Souza](https://www.linkedin.com/in/isaque-souza-a32a81268/)
