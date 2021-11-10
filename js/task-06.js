const inputLength = document.querySelector("#validation-input");

inputLength.addEventListener("blur", () => {
  const forActionsWhithClass = inputLength.classList;

  if (inputLength.value.length < inputLength.dataset.length) {
    forActionsWhithClass.add("invalid");
  } else {
    forActionsWhithClass.remove("invalid");
    forActionsWhithClass.add("valid");
  }
});
