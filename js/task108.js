const formRef = document.querySelector(".login-form");
console.log(formRef.elements);

const credentials = {};

formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formRef.elements[0].value);
  console.log(formRef.elements[1].value);
  const formData = new FormData(e.currentTarget);

  if (formRef.elements[0].value === "" || formRef.elements[1].value === "") {
    alert("all fields must be filled");
  } else {
    credentials.email = formRef.elements[0].value;
    credentials.password = formRef.elements[1].value;
    formRef.reset();
    console.log(credentials);
  }

  //   formData.forEach((value, name) => {
  //     if (formRef.elements[0].value === "") {
  //       alert("all fields must be filled");
  //     }
  //     console.log("value", value);
  //     console.log("name", name);
  //   });
});
