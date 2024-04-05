let playonce = true;
const closeBtn = document.getElementById("closeBtn");
window.document.addEventListener("scroll", () => {
  let scrollCards = (window.scrollY + innerHeight) / document.body.offsetHeight;
  console.log(scrollCards);
  if (scrollCards > 0.91 && playonce) {
    cardsNewsletters.style.transform = "translateX(0px)";
    cardsNewsletters.style.visibility = "visible";
    playonce = false;
  }

  closeBtn.addEventListener("click", () => {
    cardsNewsletters.style.transform = "translateX(385px)";
    cardsNewsletters.style.visibility = "visible";
  });
});

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
