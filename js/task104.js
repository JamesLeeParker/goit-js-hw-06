const blockRef = document.querySelector("#counter");
const btnDecrementEl = blockRef.querySelector("[data-action='decrement']");
const btnIncrementEl = blockRef.querySelector("[data-action='increment']");
const spanEl = blockRef.querySelector("#value");

let counterValue = 0;

btnDecrementEl.addEventListener("click", (e) => {
  counterValue = counterValue - 1;
  spanEl.textContent = counterValue;
  console.dir(counterValue);
});
btnIncrementEl.addEventListener("click", (e) => {
  counterValue += 1;
  spanEl.textContent = counterValue;
  console.dir(counterValue);
});
console.dir(counterValue);
