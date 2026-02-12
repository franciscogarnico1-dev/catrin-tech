const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    const current = document.querySelector(".tab-content.active");
    const next = document.getElementById(tab.dataset.tab);

    if (current === next) return;

    tabs.forEach(t => t.classList.remove("active"));
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