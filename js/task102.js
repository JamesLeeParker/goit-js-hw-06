const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElem = document.querySelector("#ingredients");

const arrListElems = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.textContent = el;
  liEl.classList.add("item");
  return liEl;
});

ulElem.append(...arrListElems);
