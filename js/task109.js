function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.body;
const btnEl = bodyRef.querySelector(".change-color");
const spanEl = bodyRef.querySelector(".color");

btnEl.addEventListener("click", (e) => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
});
