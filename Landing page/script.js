/*js for seach icon*/
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('search-active');
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}
// javascipt for slider2
var array=["item1","item2","item3"]
var slidermain = document.getElementById("slider-main");
var item= slidermain.getElementsByClassName("item")
function next(){
slidermain.append(item[0])
}