const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const markup = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});

ulEl.append(...markup);
