// MAIN.JS – Funciones principales del sitio

// ----- BOTÓN "SCROLL TO TOP" -----

// Detecta el botón
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Muestra u oculta el botón según el scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

// Al hacer click → vuelve arriba
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ----- ANIMACIONES SUAVES PARA SECCIONES -----

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in"); // agrega clase para animar
        observer.unobserve(entry.target); // deja de observar la sección
      }
    });
  },
  { threshold: 0.2 } // activa cuando el 20% de la sección es visible
);

// Observar cada sección
sections.forEach((section) => observer.observe(section));

