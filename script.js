const carouselSlides = {
  empleo: [
    { file: "01-portada.png", alt: "Portada del carrusel de empleo: Chile supera el millón de personas desocupadas." },
    { file: "02-desocupados.png", alt: "Lámina 2 del carrusel de empleo de Valparaíso y Chile." },
    { file: "03-tasa-mujeres.png", alt: "Desocupación de mujeres: 10,5% en Valparaíso frente a 9,3% en hombres." },
    { file: "04-jovenes.png", alt: "Desocupación juvenil de 23,5%, frente a una tasa nacional de 9,5%." },
    { file: "05-ocupados-informalidad.png", alt: "Ocupación informal: 26,4% total país, 28,2% mujeres y 25,1% hombres." },
    { file: "06-valparaiso.png", alt: "Desocupación de 9,9% en Valparaíso frente a 9,8% en el país." },
    { file: "07-valparaiso-mujeres-informalidad.png", alt: "Desocupación e informalidad en Valparaíso, desglosadas por sexo y comparadas con el país." },
    { file: "08-opinion-bencinazo-recortes.png", alt: "Lámina de opinión sobre el bencinazo y los recortes." },
    { file: "09-opinion-medidas.png", alt: "Lámina de opinión con propuestas de medidas." },
    { file: "10-cierre.png", alt: "Lámina de cierre del carrusel de empleo." },
  ],
  seguridad: [
    { file: "WhatsApp Image 2026-11-05 at 19.59.20.jpeg", alt: "Portada del carrusel del PNUD sobre miedo al delito en Chile." },
    { file: "WhatsApp Image 2026-11-05 at 19.59.24.jpeg", alt: "El estudio del PNUD y las dimensiones emocional, cognitiva y conductual del miedo." },
    { file: "WhatsApp Image 2026-11-05 at 19.59.28.jpeg", alt: "La percepción de aumento de la delincuencia y la victimización entre 2015 y 2025." },
    { file: "WhatsApp Image 2026-11-05 at 19.59.34.jpeg", alt: "Evolución del riesgo percibido, la evitación de conductas y la sensación de inseguridad." },
    { file: "WhatsApp Image 2026-11-05 at 19.59.36.jpeg", alt: "Comparación de seguridad percibida entre Chile y el mundo y conductas evitadas por temor." },
    { file: "WhatsApp Image 2026-11-05 at 19.59.39.jpeg", alt: "Factores que explican el miedo al delito: barrio, percepción, edad y género." },
    { file: "WhatsApp Image 2026-11-05 at 19.59.44.jpeg", alt: "Lámina 7 del carrusel del PNUD sobre miedo al delito." },
    { file: "WhatsApp Image 2026-11-05 at 19.59.46.jpeg", alt: "Lámina 8 del carrusel del PNUD sobre miedo al delito." },
    { file: "WhatsApp Image 2026-11-05 at 19.59.52.jpeg", alt: "Propuestas para abordar el miedo al delito y fuente PNUD (2026)." },
  ],
};

const carouselPath = {
  empleo: "Redes sociales/Carrusel 1/",
  seguridad: "Redes sociales/Carrusel 2/",
};

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const slides = carouselSlides[carousel.dataset.carousel];
  if (!slides) return;

  const image = carousel.querySelector("[data-carousel-image]");
  const caption = carousel.querySelector("[data-carousel-caption]");
  const status = carousel.querySelector("[data-carousel-status]");
  const openLink = carousel.querySelector("[data-carousel-open]");
  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    const slide = slides[currentIndex];
    const source = `${carouselPath[carousel.dataset.carousel]}${slide.file}`;
    image.src = encodeURI(source);
    image.alt = slide.alt;
    caption.textContent = `Lámina ${currentIndex + 1} de ${slides.length}: ${slide.alt}`;
    status.textContent = `Lámina ${currentIndex + 1} de ${slides.length}`;
    openLink.href = encodeURI(source);
  }

  carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });
});

const formatFilter = document.querySelector("#format-filter");
const disciplineFilter = document.querySelector("#discipline-filter");
const eventCards = [...document.querySelectorAll(".event-card")];
const eventEmpty = document.querySelector("#event-empty");
const eventStatus = document.querySelector("#event-status");

function filterEvents() {
  let visibleCount = 0;

  for (const card of eventCards) {
    const matchesFormat = formatFilter.value === "all" || card.dataset.format === formatFilter.value;
    const matchesDiscipline = disciplineFilter.value === "all" || card.dataset.discipline === disciplineFilter.value;
    const isVisible = matchesFormat && matchesDiscipline;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  }

  eventEmpty.hidden = visibleCount > 0;
  eventStatus.textContent = `${visibleCount} ${visibleCount === 1 ? "actividad publicada" : "actividades publicadas"}`;
}

formatFilter.addEventListener("change", filterEvents);
disciplineFilter.addEventListener("change", filterEvents);

let dialogOpener = null;

document.querySelectorAll("[data-dialog-open]").forEach((trigger) => {
  const dialog = document.getElementById(trigger.dataset.dialogOpen);
  if (!dialog) return;

  trigger.addEventListener("click", () => {
    dialogOpener = trigger;
    dialog.showModal();
    dialog.querySelector("[data-dialog-close]").focus();
  });
});

document.querySelectorAll(".info-dialog").forEach((dialog) => {
  dialog.querySelector("[data-dialog-close]").addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    dialogOpener?.focus();
    dialogOpener = null;
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

function closeMenu({ returnFocus = false } = {}) {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  siteNavigation.classList.remove("is-open");
  if (returnFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
  siteNavigation.classList.toggle("is-open", !isExpanded);
});

siteNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu({ returnFocus: true });
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
