// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (e) => {
  if (e.target.value.length < 6) {
    inputEl.style.borderColor = `#f44336`;
  } else {
    inputEl.style.borderColor = `#4caf50`;
  }
});

// inputEl.style.backgroundColor = `red`;
