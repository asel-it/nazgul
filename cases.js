document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slideshow-buttons .prev');
    const nextButton = document.querySelector('.slideshow-buttons .next');
    let currentIndex = 0;
  
    function updateSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    }
  
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide(currentIndex);
    }
  
    // Добавляем обработчики событий для кнопок
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', showPrevSlide);
      nextButton.addEventListener('click', showNextSlide);
    }
  
    // Инициализация первого слайда
    updateSlide(currentIndex);
  });
  