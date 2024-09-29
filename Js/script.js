
// Slide Calendar
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlides(n) {
  slideIndex += n;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  const offset = -slideIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  showSlides(1);
});

document.querySelector(".prev").addEventListener("click", () => {
  showSlides(-1);
});

// Auto slide
if (window.innerWidth < 768) {
  // no interval
} else {
  setInterval(() => {
    showSlides(1);
  }, 10000);
}

// Menu

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navSections = document.getElementById('nav-sections');

  hamburger.addEventListener('click', function() {
      if (navSections.style.display === 'block') {
          navSections.style.display = 'none';
      } else {
          navSections.style.display = 'block';
      }
  });
});
