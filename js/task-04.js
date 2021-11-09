let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector("#value");

const increment = () => {
  counterValue += 1;
  updatePage();
};

const decrement = () => {
  counterValue -= 1;
  updatePage();
};

const updatePage = () => {
  counterEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
