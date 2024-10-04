const slides = document.querySelectorAll('.slides img');
let n = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializer);
function initializer(){
  if (slides.length > 0) {
    slides[n].classList.add("displaySlide");
  intervalId = setInterval(nextSlide, 6000);
  } 
}

function showSlide(i){

  if (i >= slides.length) {
    n = 0;
  } else if(i < slides.length - 1) {
    n++;
  }
   slides.forEach(slide => {
    slide.classList.remove("displaySlide");
   });

   slides[n].classList.add('displaySlide');
}

function prevSlide(){
  n--;
}

function nextSlide(){
  n++;
  showSlide(n);
}
