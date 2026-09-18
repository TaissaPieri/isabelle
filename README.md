# TOTVS Start — Trabalho de CIMV

Apresentação acadêmica em HTML desenvolvida para a disciplina **Comunicação Integrada a Marketing e Vendas — UNIP**.

> **Importante:** “TOTVS Start”, os valores, o período de teste e demais condições comerciais apresentados são propostas acadêmicas do grupo e não representam produto ou oferta oficial da TOTVS.

## Para editar sem complicação

Na maioria das vezes, você só precisa abrir **`index.html`**.

- **Trocar textos:** `index.html`
- **Mudar cores, tamanhos ou aparência:** `css/style.css`
- **Alterar navegação, animações ou cronômetro:** `js/apresentacao.js`

O `index.html` possui comentários como `SLIDE 1 — CAPA`, `SLIDE 2 — ROTEIRO` etc. Procure o slide desejado e altere apenas o texto entre as tags.

### Exemplo

```html
<h2 class="display title-md">A TOTVS já atende pequenos negócios.</h2>
```

Para trocar o título, altere somente o texto:

```html
<h2 class="display title-md">Seu novo título aqui.</h2>
```

**Evite apagar ou modificar** `class="..."`, `id="..."` e outras partes dentro de `< >`, pois elas controlam o visual e o funcionamento.

## Quem apresenta cada slide

No começo de cada slide existe algo semelhante a:

```html
<section id="s3" class="slide white" data-presenter="INTEGRANTE 1">
```

Para trocar o nome mostrado no canto da apresentação, altere apenas:

```html
data-presenter="RAFAELA"
```

## Como abrir no computador

Basta abrir `index.html` no navegador. Não é necessário instalar nada.

### Atalhos da apresentação

- `↓` ou `PageDown`: próximo slide
- `↑` ou `PageUp`: slide anterior
- `F`: entrar/sair da tela cheia
- `R`: zerar o cronômetro

## Estrutura do projeto

```text
trabalho-cimv-totvs/
├── index.html              # conteúdo dos slides — principal arquivo para edição
├── css/
│   └── style.css           # identidade visual e layout
├── js/
│   └── apresentacao.js     # navegação, animações e cronômetro
└── README.md               # este guia
```

## Publicar pelo GitHub Pages

1. Abra o repositório no GitHub.
2. Entre em **Settings**.
3. No menu lateral, abra **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch **main** e a pasta **/(root)**.
6. Clique em **Save**.

Depois da publicação, o GitHub mostrará o endereço público da apresentação.

## Identidade visual

A apresentação usa a identidade visual pesquisada para a TOTVS, com base azul-escuro, azul-ciano e cores de apoio. A composição do trabalho é acadêmica e não pretende se passar por comunicação oficial da empresa.
