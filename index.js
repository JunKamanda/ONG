// Script pour faire défiler les images
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${100 * slideIndex}%)`;
  });
}
// Change de slide toutes les cinq secondes
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// Script pour faire défiler les temoignages
const cards = document.querySelectorAll(".testiContent > .card");
let currentSlideCard = 0;

function showSlideCard(slideIndex) {
  cards.forEach((card, index) => {
    card.style.transform = `translateX(-${100 * slideIndex}%)`;
  });
}

// Change de slide toutes les sept secondes
setInterval(() => {
  currentSlideCard = (currentSlideCard + 1) % cards.length;
  showSlideCard(currentSlideCard);
}, 7000);

// NEWSLETTER
// NEWSLETTER
// NEWSLETTER
// NEWSLETTER
const newsInput = document.querySelector(".newsInput");
console.log(newsInput);
btn = document.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(newsInput.value);
  newsInput.value = " ";
});

// TEXTE RECURSIVE
// TEXTE RECURSIVE
// TEXTE RECURSIVE
// TEXTE RECURSIVE
const target = document.getElementById("target");
const tableau = ["changement", "sourire", "future", "espoir"];
let IndexWords = 0;
let IndexLetters = 0;

const MakeLetters = () => {
  let Letters = document.createElement("span");
  Letters.textContent = tableau[IndexWords][IndexLetters];
  Letters.classList.add("Letters");
  target.appendChild(Letters);
  setTimeout(() => {
    Letters.remove();
  }, 3800);
};
const loop = () => {
  setTimeout(() => {
    if (IndexWords >= tableau.length) {
      IndexWords = 0;
    }
    if (IndexLetters < tableau[IndexWords].length) {
      MakeLetters();
      IndexLetters++;
      loop();
    } else {
      IndexWords++;
      IndexLetters = 0;
      setTimeout(() => {
        loop();
      }, 3800);
    }
  }, 100);
};
loop();

//AOS
AOS.init();
