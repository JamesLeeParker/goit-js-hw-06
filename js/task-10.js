function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxRef = document.querySelector("#boxes");
const controlPanelRef = document.querySelector("#controls");

const createBtnRef = controlPanelRef.querySelector("button[data-create]");
const destroyBtnRef = controlPanelRef.querySelector("button[data-destroy]");

const inputRef = controlPanelRef.querySelector("input");

createBtnRef.addEventListener("click", () => {
  let countOfDiv = inputRef.value;

  for (let i = 0; i <= countOfDiv; i += 1) {
    makeDiv(countOfDiv, getRandomHexColor());
  }

  destroyBtnRef.addEventListener("click", () => {
    inputRef.value = "";
    makeDiv(0);
  });
});

const makeDiv = (value) => {
  const result = [];
  let size = 30;

  for (let i = 0; i < value; i += 1) {
    const markup = `<div class='box' style='margin-top: 20px; display: block; width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}'></div>`;

    result.push(markup);
  }
  updateMarkup(result.join(""));
};

function getValue() {
  const value = inputRef.value;
  if (!value) return;
  makeDiv(value);
}

const updateMarkup = (markup = "") => {
  divBoxRef.innerHTML = markup;
};
