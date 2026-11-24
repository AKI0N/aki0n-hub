document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  let timer = null;

  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");

  if (!slides.length) return;

  function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length - 1;
    else slideIndex = index;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active-dot"));

    slides[slideIndex].classList.add("active");
    if (dots[slideIndex]) dots[slideIndex].classList.add("active-dot");
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(() => {
      slideIndex++;
      showSlide(slideIndex);
    }, 5000); // Cambio automático cada 5 segundos
  }

  function stopAutoPlay() {
    if (timer) clearInterval(timer);
  }

  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      slideIndex--;
      showSlide(slideIndex);
      startAutoPlay();
    });

    nextBtn.addEventListener("click", () => {
      slideIndex++;
      showSlide(slideIndex);
      startAutoPlay();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showSlide(idx);
      startAutoPlay();
    });
  });

  const container = document.querySelector(".carousel-container");
  if (container) {
    container.addEventListener("mouseenter", stopAutoPlay);
    container.addEventListener("mouseleave", startAutoPlay);
  }

  showSlide(slideIndex);
  startAutoPlay();
});