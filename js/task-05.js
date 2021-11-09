const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (event) => {
  if (!inputElem.value) {
    return (outputElem.textContent = "Anonymous");
  }
  outputElem.textContent = event.currentTarget.value;
});
