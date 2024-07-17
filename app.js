// Initialize Bootstrap ScrollSpy
const spy = new bootstrap.ScrollSpy(document.body, {
  target: ".conav",
});

const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  const dots = elem.getAttribute("data-dots");
  const marked = elem.getAttribute("data-percent");
  const percent = Math.floor((dots * marked) / 100);
  let points = "";
  const rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    const isMarked = i < percent;
    points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg; color:#fff"></div>`;
  }
  elem.innerHTML = points;
});

// Add this to your script.js

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });

  const scrollElements = document.querySelectorAll(".scroll-animation");
  scrollElements.forEach((el) => observer.observe(el));
});

