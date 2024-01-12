const sliderContainer = document.getElementById("slider-container");
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderContainer.children.length;
  updateSlider();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + sliderContainer.children.length) %
    sliderContainer.children.length;
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 100 + "%";
  sliderContainer.style.transform = "translateX(" + translateValue + ")";
}

// Automatic sliding 
setInterval(nextSlide, 3000);
