# Portfólio — Isaque Souza

Portfólio pessoal de Isaque Souza, desenvolvedor júnior e estudante de Engenharia de Computação em Guarulhos, SP.

**No ar:** https://isaque-souza.github.io/Portfolio-Pessoal/

## Sobre o projeto

Site estático feito só com HTML, CSS e JavaScript, sem frameworks nem etapa de build. Reúne apresentação, habilidades, projetos, formação e contato.

Destaques:

- Tema claro e escuro, seguindo a preferência do sistema e lembrando a escolha do visitante
- Hero com grade de pontos interativa em canvas e uma janela de código que se digita sozinha
- Cards de projeto com spotlight na borda, leve inclinação 3D, selos de status e filtro (Todos, Em produção, Código aberto)
- Linha do tempo da formação que se preenche conforme a rolagem
- Barra de progresso de leitura, botões magnéticos e botão para copiar o e-mail
- Layout responsivo, foco visível no teclado e animações desligadas para quem usa `prefers-reduced-motion`

## Estrutura

```
index.html   # estrutura e conteúdo das seções
styles.css   # tokens de cor/tipografia, temas e animações
script.js    # lista de projetos e todas as interações
img/         # capturas de tela dos projetos
```

## Adicionando um projeto

Os projetos são renderizados a partir da lista `projetos` no início de `script.js`. Basta incluir um novo item:

```js
{
  titulo: "Nome do projeto",
  imagem: "img/nome-do-projeto.jpg", // opcional; sem imagem, o card mostra o nome
  ano: "2026",
  descricao: "O que o sistema faz e para quem.",
  status: "producao",                 // opcional: "producao" ou "desenvolvimento"
  tecnologias: ["React", "TypeScript"],
  demo: "https://...",                // opcional
  codigo: "https://github.com/...",   // opcional; com link, entra no filtro "Código aberto"
  privado: true,                      // opcional; mostra "Código privado"
},
```

Os números da seção Sobre (projetos construídos e em produção) são calculados automaticamente a partir dessa lista.

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
