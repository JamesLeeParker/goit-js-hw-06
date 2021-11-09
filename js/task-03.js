const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");

const imgEl = images.map(({ url, alt }) => {
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", alt);
  img.setAttribute("width", 480);
  img.style.marginBottom = "20px";
  img.style.display = "flex";
  img.style.borderRadius = "10px";

  return img;
});

galleryEl.append(...imgEl);
