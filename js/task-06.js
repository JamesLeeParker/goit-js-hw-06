const inputLength = document.querySelector("#validation-input");

inputLength.addEventListener("blur", () => {
  if (inputLength.value.length < inputLength.dataset.length) {
    inputLength.classList.add("invalid");
  } else {
    inputLength.classList.remove("invalid");
    inputLength.classList.add("valid");
  }
});
