document.addEventListener("DOMContentLoaded", function (event) {
  const wrapper = document.querySelector(".cards");
  const cards = document.querySelectorAll(".card");

  wrapper.addEventListener("mousemove", function (event) {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();

      const xPos = event.clientX - rect.left;
      const yPos = event.clientY - rect.top;

      card.style.setProperty("--xPos", `${xPos}px`);
      card.style.setProperty("--yPos", `${yPos}px`);
    });
  });
});
