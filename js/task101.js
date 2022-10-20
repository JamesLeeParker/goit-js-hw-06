const ulRef = document.querySelector("#categories");
const ulRefAll = ulRef.querySelectorAll("ul");

console.log("Number of categories:", ulRefAll.length);

const firstLiRef = ulRef.firstElementChild;
const firstLiUlRef = firstLiRef.querySelectorAll("li");
const h2 = firstLiRef.querySelector("h2");
console.log("Category:", h2.textContent);
console.log("Elements:", firstLiUlRef.length);

// const secondLiRef = ulRef.nextElementSibling;
// console.log(secondLiRef);

const lastElemRef = ulRef.lastElementChild;
const h2Last = lastElemRef.querySelector("h2");
const lastLiUlRef = lastElemRef.querySelectorAll("li");
// console.log(lastElemRef);
console.log("Category:", h2Last.textContent);
console.log("Elements:", lastLiUlRef.length);

const secondLiRef = lastElemRef.previousElementSibling;
const h2Second = lastElemRef.querySelector("h2");
const secondLiUlRef = lastElemRef.querySelectorAll("li");
console.log("Category:", h2Second.textContent);
console.log("Elements:", secondLiUlRef.length);
