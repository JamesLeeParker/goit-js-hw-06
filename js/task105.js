const inputEl = document.querySelector("#name-input");
const titleEl = document.querySelector("#name-output");

console.log(inputEl);
let value = "Anonimus";

inputEl.addEventListener("input", (e) => {
  value = e.target.value;
  console.log(e.target.value);
  console.log(value);
  titleEl.textContent = value;
});
