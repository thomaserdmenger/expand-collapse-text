// Solution 2
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (!e.target.matches(".expand-button")) return;
    const cardText = card.querySelector(".card-body");
    cardText.classList.toggle("show");

    e.target.textContent = cardText.classList.contains("show")
      ? "Collapse"
      : "Expand";
  });
});

// Solution 1
// const container = document.querySelector("body");

// container.addEventListener("click", (e) => {
//   if (!e.target.matches(".expand-button")) return;

//   const card = e.target.closest(".card");
//   const cardBody = card.querySelector(".card-body");
//   cardBody.classList.toggle("show");
//   e.target.textContent = cardBody.classList.contains("show")
//     ? "Collapse"
//     : "Expand";
// });
