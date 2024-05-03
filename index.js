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
  cards.forEach((card) => {
    card.style.transform = `translateX(-${100 * slideIndex}%)`;
  });
}

// Change de slide toutes les sept secondes
setInterval(() => {
  currentSlideCard = (currentSlideCard + 1) % cards.length;
  showSlideCard(currentSlideCard);
}, 7000);


// Slides pour les plantes
const picImgs = document.querySelectorAll(".pic_img");

let currentSlideImg = 0;

function showSlideImg(slideIndex) {
  picImgs.forEach((picImg) => {
    picImg.style.transform = `translateX(-${100 * slideIndex}%)`;
  });
}

// setInterval(() => {
//   currentSlideImg = (currentSlideImg + 1) % picImgs.length;
//   showSlideImg(currentSlideImg);
// }, 4000);

console.log(picImgs);

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
const tableau = ["changement", "sourire", "futur", "espoir"];
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

// BURGERMENU
const navside = document.querySelector(".nav > ul")
console.log(navside);

sideBtn.addEventListener("click", ()=>{
  navside.classList.toggle("showUl")
})

// SCROLLNAVIGATION
const nav = document.querySelector(".navigation")
console.log(nav);
let lastScroll = scrollY;

window.addEventListener("scroll", ()=>{
  if (lastScroll > scrollY) {
      nav.style.top = "0";
      sideBtn.style.top = "10px";
      if (scrollY == 0) {
          nav.style.opacity = 0.88;
      }else{
          nav.style.opacity = 1;
      }
  }else{
      nav.style.top = "-100px";
      sideBtn.style.top = "-70px";
  }
  lastScroll = scrollY;
})

//LesListesDeLaNavbar
//LesListesDeLaNavbar
//LesListesDeLaNavbar
const listes = document.querySelectorAll(".liste")

listes.forEach((liste)=>{
  liste.addEventListener("click", ()=>{
      document.querySelector(".active")?.classList.remove("active");
      liste.classList.add("active");
  });
});