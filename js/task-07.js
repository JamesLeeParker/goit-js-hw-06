const rangeElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");

rangeElem.addEventListener("input", () => {
  textElem.style.fontSize = rangeElem.value + "px";
});
