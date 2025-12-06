// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

function setActiveNav() {
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPosition >= top && scrollPosition < top + height) {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );
      });
    }
  });
}

window.addEventListener("scroll", setActiveNav);
window.addEventListener("load", setActiveNav);

// Simple contact form feedback (frontend only)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent =
        "Pakicomplete muna lahat ng fields bago mag‑send. 🙂";
      formStatus.classList.remove("d-none");
      formStatus.style.color = "#ffd6e9";
      return;
    }

    formStatus.textContent =
      "Salamat! This is a demo only, pero ready na itong i-connect sa backend or email service.";
    formStatus.classList.remove("d-none");
    formStatus.style.color = "#c8ffdd";

    contactForm.reset();
  });
}

// Dark / Light mode toggle
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

function applyTheme(theme) {
  const body = document.body;
  const isLight = theme === "light";

  body.classList.toggle("light-mode", isLight);

  if (themeIcon) {
    themeIcon.classList.toggle("bi-sun", isLight);
    themeIcon.classList.toggle("bi-moon-stars", !isLight);
  }

  if (themeLabel) {
    themeLabel.textContent = isLight ? "Light" : "Dark";
  }
}

// Load saved theme
const savedTheme = window.localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  applyTheme(savedTheme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-mode");
    const nextTheme = isLight ? "dark" : "light";
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  });
}


