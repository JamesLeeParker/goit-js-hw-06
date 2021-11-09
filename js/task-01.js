const listClass = document.querySelectorAll(".item");

console.log("Number of categories: ", listClass.length);

[...listClass].forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});
