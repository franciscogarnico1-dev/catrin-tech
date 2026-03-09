const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const current = document.querySelector(".tab-content.active");
    const next = document.getElementById(tab.dataset.tab);

    if (current === next) return;

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    current.classList.remove("active");

    setTimeout(() => {
      next.classList.add("active");
      const cards = next.querySelectorAll(".card, .contact-card");

      cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
          card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 120);
      });
    }, 150);
  });
});

// --- Structured Data para Catrin Tech ---
(function () {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Catrin Tech",
    url: "https://franciscogarnico1-dev.github.io/catrin-tech/",
    logo: "https://franciscogarnico1-dev.github.io/catrin-tech/img/logo.png",
    sameAs: ["https://www.instagram.com/catrin_tech", "https://www.facebook.com/share/14U4r5vojQ2/"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+525569079900",
      contactType: "customer service",
      areaServed: "Global",
      availableLanguage: ["Spanish", "English"],
    },
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
})();

// efecto de luz que sigue al mouse

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  document.body.style.background = `
radial-gradient(circle at ${x}px ${y}px,
rgba(212,175,55,0.08),
transparent 300px),
#000
`;
});

// animación reveal proyectos

const projectElements = document.querySelectorAll(".project");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

projectElements.forEach((el) => projectObserver.observe(el));

// parallax suave en proyectos

window.addEventListener("scroll", () => {
  const projects = document.querySelectorAll(".project-video");

  projects.forEach((project) => {
    const rect = project.getBoundingClientRect();

    const offset = rect.top * 0.05;

    project.style.transform = `translateY(${offset}px)`;
  });
});

// inclinación suave de laptop

const laptop = document.querySelector(".laptop-mockup");

if (laptop) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    laptop.style.setProperty("--rotateX", `${y}deg`);
    laptop.style.setProperty("--rotateY", `${x}deg`);
  });
}
