const carouselImages = document.querySelectorAll('.carousel img');

let currentIndex = 0;
carouselImages[currentIndex].classList.add('active');

function nextImage() {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.add('active');
}

setInterval(nextImage, 3000);
