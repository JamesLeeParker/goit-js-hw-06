function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
const btnRef = bodyRef.querySelector(".change-color");
const colorRef = bodyRef.querySelector(".color");

const aa = btnRef.addEventListener("click", () => {
  colorRef.textContent = getRandomHexColor();

  bodyRef.style.backgroundColor = getRandomHexColor();
});
