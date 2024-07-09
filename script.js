window.onload = function() {
  currentSlide(1);
};
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); 
}

// FAQ
function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains('active');
  const allFaqItems = document.querySelectorAll('.faq-item');

  allFaqItems.forEach(item => item.classList.remove('active'));

  if (!isActive) {
    faqItem.classList.add('active');
  }
}
