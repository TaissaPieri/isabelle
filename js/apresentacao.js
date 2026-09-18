// ======================================================
// TOTVS START — JAVASCRIPT DA APRESENTAÇÃO
// ======================================================
// Este arquivo controla:
// 1. Barra de progresso
// 2. Indicador do slide atual
// 3. Nome do apresentador
// 4. Animações dos elementos
// 5. Cronômetro regressivo de 8 minutos
// 6. Navegação pelo teclado
//
// ATALHOS:
// ↓ ou PageDown = próximo slide
// ↑ ou PageUp   = slide anterior
// F             = tela cheia
// R             = reiniciar cronômetro em 08:00
// ======================================================


// ======================================================
// 1. ELEMENTOS DA APRESENTAÇÃO
// ======================================================

const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dots a")];

const progress = document.getElementById("progress");
const who = document.getElementById("who");
const counter = document.getElementById("counter");


// ======================================================
// 2. IDENTIFICA QUAL SLIDE ESTÁ SENDO EXIBIDO
// ======================================================

function getCurrentSlideIndex() {
  let index = 0;

  slides.forEach((slide, i) => {
    if (slide.getBoundingClientRect().top <= window.innerHeight * 0.46) {
      index = i;
    }
  });

  return index;
}


// ======================================================
// 3. ATUALIZA BARRA, APRESENTADOR E CONTADOR DE SLIDES
// ======================================================

function updatePresentation() {

  // ------------------------------------------
  // Barra de progresso da apresentação
  // ------------------------------------------

  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage =
    maxScroll > 0
      ? (window.scrollY / maxScroll) * 100
      : 0;

  if (progress) {
    progress.style.width = percentage + "%";
  }


  // ------------------------------------------
  // Descobre o slide atual
  // ------------------------------------------

  const index = getCurrentSlideIndex();


  // ------------------------------------------
  // Atualiza os pontos laterais
  // ------------------------------------------

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });


  // ------------------------------------------
  // Atualiza o nome do apresentador
  // O nome vem do atributo:
  // data-presenter="INTEGRANTE 1"
  // ------------------------------------------

  if (who && slides[index]) {
    who.textContent =
      slides[index].dataset.presenter || "GRUPO";
  }


  // ------------------------------------------
  // Atualiza contador:
  // exemplo: 3 / 9
  // ------------------------------------------

  if (counter) {
    counter.textContent =
      `${index + 1} / ${slides.length}`;
  }
}


// Atualiza ao rolar a página
window.addEventListener(
  "scroll",
  updatePresentation,
  { passive: true }
);


// Atualiza ao redimensionar a tela
window.addEventListener(
  "resize",
  updatePresentation
);


// Atualiza assim que a apresentação abre
updatePresentation();


// ======================================================
// 4. ANIMAÇÃO DOS ELEMENTOS DOS SLIDES
// ======================================================

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        const elements =
          entry.target.querySelectorAll(".reveal");

        elements.forEach((element, index) => {

          setTimeout(() => {
            element.classList.add("show");
          }, index * 45);

        });

      }

    });

  },
  {
    threshold: 0.24
  }
);


// Observa todos os slides
slides.forEach((slide) => {
  observer.observe(slide);
});


// ======================================================
// 5. CRONÔMETRO REGRESSIVO — 8 MINUTOS
// ======================================================

// ALTERE SOMENTE ESTE NÚMERO caso o professor mude
// o tempo da apresentação.
//
// Exemplo:
// 8 * 60  = 8 minutos
// 10 * 60 = 10 minutos
// 15 * 60 = 15 minutos

const TOTAL_TIME = 8 * 60;


// Tempo atual do cronômetro
let seconds = TOTAL_TIME;


// Elemento que mostra o tempo
const timer = document.getElementById("timer");


// ======================================================
// 6. MOSTRA O TEMPO NA TELA
// ======================================================

function renderTimer() {

  if (!timer) return;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  timer.textContent =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(remainingSeconds).padStart(2, "0")}`;
}


// Mostra 08:00 imediatamente
renderTimer();


// ======================================================
// 7. FAZ A CONTAGEM REGRESSIVA
// ======================================================

setInterval(() => {

  // Só diminui enquanto houver tempo
  if (seconds > 0) {
    seconds--;
    renderTimer();
  }

  // Ao chegar a zero permanece em 00:00

}, 1000);


// ======================================================
// 8. REINICIA O CRONÔMETRO
// ======================================================

function resetTimer() {

  seconds = TOTAL_TIME;

  renderTimer();

}


// ======================================================
// 9. NAVEGAÇÃO PELO TECLADO
// ======================================================

document.addEventListener("keydown", (event) => {

  const index = getCurrentSlideIndex();


  // ------------------------------------------
  // PRÓXIMO SLIDE
  // Seta para baixo ou PageDown
  // ------------------------------------------

  if (
    event.key === "ArrowDown" ||
    event.key === "PageDown"
  ) {

    event.preventDefault();

    const nextIndex =
      Math.min(index + 1, slides.length - 1);

    slides[nextIndex].scrollIntoView({
      behavior: "smooth"
    });

  }


  // ------------------------------------------
  // SLIDE ANTERIOR
  // Seta para cima ou PageUp
  // ------------------------------------------

  if (
    event.key === "ArrowUp" ||
    event.key === "PageUp"
  ) {

    event.preventDefault();

    const previousIndex =
      Math.max(index - 1, 0);

    slides[previousIndex].scrollIntoView({
      behavior: "smooth"
    });

  }


  // ------------------------------------------
  // TELA CHEIA
  // Tecla F
  // ------------------------------------------

  if (event.key.toLowerCase() === "f") {

    if (!document.fullscreenElement) {

      document.documentElement
        .requestFullscreen()
        .catch(() => {});

    } else {

      document
        .exitFullscreen()
        .catch(() => {});

    }

  }


  // ------------------------------------------
  // REINICIAR CRONÔMETRO
  // Tecla R
  // ------------------------------------------

  if (event.key.toLowerCase() === "r") {

    resetTimer();

  }

});
