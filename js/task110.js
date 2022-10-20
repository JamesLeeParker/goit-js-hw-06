function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlRef = document.querySelector("#controls");
const inputEl = controlRef.children[0];
const createBtnEl = controlRef.children[1];
const destroyBtnEl = controlRef.children[2];

let valueInput;
inputEl.addEventListener("change", (e) => {
  valueInput = e.target.value;
});

const createBlocks = (value) => {
  const arr = [];
  let widthBlock = 20;
  let heightBlock = 20;
  for (let i = 1; i <= value; i++) {
    widthBlock += 10;
    heightBlock += 10;
    arr.push(
      `<div style="background-color:${getRandomHexColor()}; width:${widthBlock}px; height:${heightBlock}px; margin-bottom: 10px"></div>`
    );
  }

  return arr.map((el) => el).join("");
};

const destroyBlocks = (value) => {
  const divArr = controlRef.querySelectorAll("div");
  console.log(divArr);
  for (let i = 0; i <= value; i++) {
    divArr[i].remove();
  }
};

createBtnEl.addEventListener("click", (e) => {
  controlRef.insertAdjacentHTML("beforeend", createBlocks(valueInput));
});

destroyBtnEl.addEventListener("click", (e) => {
  controlRef.insertAdjacentHTML(destroyBlocks(valueInput));
});
