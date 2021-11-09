const form = document.querySelector(".login-form");
const mailElem = form.querySelector("input[name=email]");
const passElem = form.querySelector("input[name=password]");

form.addEventListener("submit", getSubmit);

passElem.addEventListener("submit", () => passElem.value);

function getSubmit(event) {
  event.preventDefault();

  if (mailElem.value === "" || passElem.value === "")
    alert("Все поля должны быть заполнены!");

  const formElem = event.currentTarget.elements;

  const mail = formElem.email.value;
  const pass = formElem.password.value;

  console.log("Почта:", mail, "  Пароль:", pass);

  //   if (mailElem.value || passElem.value) {
  //     mailElem.value = "";
  //     passElem.value = "";
  //   }
  form.reset();
}
