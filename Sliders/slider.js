let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const sliderWrapper = document.getElementById('slider-wrapper');

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlidePosition();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentSlide * 300; // 300 is the width of each slide
    sliderWrapper.style.transform = `translateX(${offset}px)`;
}
