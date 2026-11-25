const carouselSlides = {
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

const contactForm = document.querySelector("#contact-form");
const contactFormNotice = document.querySelector("#contact-form-notice");
const contactSubmitButton = contactForm.querySelector('button[type="submit"]');
const contactRequestIdInput = contactForm.querySelector("#contact-request-id");
const contactResponseFrame = document.querySelector("#contact-response-frame");
const contactEndpoint = contactForm.dataset.endpoint.trim();
const contactEndpointIsConfigured = /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(contactEndpoint);
let pendingContactRequestId = null;
let contactResponseTimer = null;

contactSubmitButton.disabled = !contactEndpointIsConfigured;

if (contactEndpointIsConfigured) {
  contactForm.action = contactEndpoint;
  contactSubmitButton.textContent = "Enviar consulta";
  contactFormNotice.dataset.state = "ready";
  contactFormNotice.textContent = "Tus datos se enviarán a la hoja de Contactos para responder a esta consulta.";
}

function createContactRequestId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactEndpointIsConfigured) {
    contactFormNotice.dataset.state = "error";
    contactFormNotice.textContent = "El formulario todavía no está conectado a Google Sheets; tus datos no se enviaron.";
    return;
  }

  const requestId = createContactRequestId();
  pendingContactRequestId = requestId;
  contactRequestIdInput.value = requestId;
  contactSubmitButton.disabled = true;
  contactSubmitButton.textContent = "Enviando...";
  contactFormNotice.dataset.state = "pending";
  contactFormNotice.textContent = "Enviando tu consulta...";

  contactResponseTimer = window.setTimeout(() => {
    if (pendingContactRequestId !== requestId) return;

    pendingContactRequestId = null;
    contactSubmitButton.disabled = false;
    contactSubmitButton.textContent = "Enviar consulta";
    contactFormNotice.dataset.state = "error";
    contactFormNotice.textContent = "No recibimos confirmación del envío. No podemos verificar si se guardó; antes de reenviar, contáctanos por Instagram para evitar duplicados.";
  }, 15000);

  HTMLFormElement.prototype.submit.call(contactForm);
});

window.addEventListener("message", (event) => {
  const isGoogleOrigin = event.origin === "https://script.google.com" ||
    event.origin.endsWith(".googleusercontent.com");

  if (
    !isGoogleOrigin ||
    !pendingContactRequestId ||
    !event.data ||
    event.data.type !== "contenido-publico-contact-response" ||
    event.data.requestId !== pendingContactRequestId
  ) {
    return;
  }

  window.clearTimeout(contactResponseTimer);
  contactResponseTimer = null;
  pendingContactRequestId = null;
  contactSubmitButton.disabled = false;
  contactSubmitButton.textContent = "Enviar consulta";

  if (event.data.ok) {
    contactForm.reset();
    contactFormNotice.dataset.state = "success";
    contactFormNotice.textContent = event.data.message || "Recibimos tu consulta. Gracias.";
    return;
  }

  contactFormNotice.dataset.state = "error";
  contactFormNotice.textContent = event.data.message || "No se pudo procesar la consulta. Inténtalo nuevamente.";
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
