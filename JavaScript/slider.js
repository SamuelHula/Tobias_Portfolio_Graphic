document.addEventListener("DOMContentLoaded", () => {
   const sliders = document.querySelectorAll(".slideshow-container");

   sliders.forEach((slider) => {
         let currentIndex = 0;
         const slides = slider.querySelectorAll(".mySlides");
         const prevButton = slider.querySelector(".prev");
         const nextButton = slider.querySelector(".next");
         const slideInterval = 3000; 
         const showSlide = (index) => {
            slides.forEach((slide, i) => {
                  slide.style.display = i === index ? "block" : "none";
            });
         };
         const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
         };
         const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
         };
         if (prevButton) prevButton.addEventListener("click", () => {
            clearInterval(autoSlideInterval); 
            prevSlide();
            startAutoSlide();
         });
         if (nextButton) nextButton.addEventListener("click", () => {
            clearInterval(autoSlideInterval); 
            nextSlide();
            startAutoSlide(); 
         });
         const startAutoSlide = () => {
            return setInterval(() => {
                  nextSlide();
            }, slideInterval);
         };
         showSlide(currentIndex);
         let autoSlideInterval = startAutoSlide(); 
   });
});
