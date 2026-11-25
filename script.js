const carouselSlides = {
  desempleo: [
    { file: "1 (1).png", alt: "Portada de la columna «Que el desempleo no nos enferme», de Maycol Gómez Vergara." },
    { file: "2 (1).png", alt: "Síntomas de depresión y ansiedad entre personas ocupadas y quienes buscan trabajo." },
    { file: "3 (1).png", alt: "Relación entre la deuda de los hogares, la depresión y el insomnio." },
    { file: "4 (1).png", alt: "Desempleo, duración de la búsqueda laboral y endeudamiento de los hogares." },
    { file: "5 (1).png", alt: "Desempleo regional y diferencias de salud mental entre mujeres y hombres." },
    { file: "6 (1).png", alt: "Propuestas de empleo, alivio financiero y atención de salud mental." },
    { file: "7 (1).png", alt: "Presentación de Maycol Gómez Vergara, autor de la columna." },
  ],
  calle: [
    { file: "1.jpeg", alt: "Portada de la columna de Yanino Riquelme «Noviembre en la calle»." },
    { file: "2.jpeg", alt: "La movilización social como respuesta al costo de la vida y a demandas pendientes." },
    { file: "3.jpeg", alt: "Análisis de las respuestas institucionales ante el descontento y las protestas." },
    { file: "4.jpeg", alt: "Una democracia sólida escucha las demandas y las traduce en respuestas concretas." },
    { file: "5.jpeg", alt: "La responsabilidad del Gobierno frente a las familias trabajadoras y sus demandas." },
    { file: "6.jpeg", alt: "Presentación de Yanino Riquelme, autor de la columna." },
  ],
  combustibles: [
    { file: "1.png", alt: "Portada sobre las alzas del combustible y su impacto en el costo de la vida." },
    { file: "2.png", alt: "Aumentos de gasolina y diésel, y su efecto en el precio de los combustibles." },
    { file: "3.png", alt: "Cómo el MEPCO amortigua las variaciones del precio internacional del petróleo." },
    { file: "4.png", alt: "Efecto del precio del diésel en el transporte, los alimentos y las empresas regionales." },
    { file: "5.png", alt: "Propuesta de tope al precio del combustible y estimaciones de impacto fiscal." },
    { file: "6.png", alt: "Críticas parlamentarias a la propuesta de limitar el alza de los combustibles." },
    { file: "7.png", alt: "Propuestas para proteger los hogares, el transporte y las regiones." },
    { file: "8.png", alt: "Movilización de transportistas en la Ruta 68 por el costo de los combustibles." },
    { file: "9.png", alt: "Indicadores de opinión pública y malestar asociado al costo de la vida." },
    { file: "10.jpg", alt: "Cierre del análisis sobre combustibles y su impacto en la economía regional." },
  ],
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
  desempleo: "Redes sociales/Carrusel 5/",
  calle: "Redes sociales/Carrusel 4/",
  combustibles: "Redes sociales/Carrusel 3/",
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
  if (event.key !== "Escape") return;

  if (menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu({ returnFocus: true });
    return;
  }

  document.querySelector(".info-dialog[open]")?.close();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
