// ================================
// Language Toggle
// ================================
let lang = "en";

function toggleLang() {
  lang = lang === "en" ? "ja" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.style.opacity = 0;

    setTimeout(() => {
      el.textContent = el.getAttribute("data-" + lang);
      el.style.opacity = 1;
    }, 200);
  });
}

// ================================
// Scroll Reveal Animation
// ================================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ================================
// Smooth Page Load
// ================================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
