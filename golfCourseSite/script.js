// open menu overlay
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

// close menu overlay
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// get rewards modal
var modal = document.getElementById("join-modal");
// get the button that opens the modal
var modalBtn = document.getElementById("join-btn");
// get the span element that closes the modal
var modalSpan = document.getElementById("close-modal");

// when user clicks button, open modal
modalBtn.onclick = function() {
    modal.style.display = "block";
}
// when user clicks span ('x'), close the modal
modalSpan.onclick = function() {
    modal.style.display = "none";
}
// when user clicks anywhere outside of modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// when user scrolls down, title section will resize
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        // change title bar background and padding
        document.getElementById("titlebar").style.backgroundColor = "#fafafa";
        document.getElementById("titlebar").style.padding = "5px";
        // change logo size
        document.getElementById("logo").style.height = "70px";
        // change title/h1 size and letter spacing
        document.getElementById("title").style.fontSize = "2em";
        document.getElementById("title").style.letterSpacing = "10px";

    } else { 
        // change back title bar background and padding on scroll up
        document.getElementById("titlebar").style.backgroundColor = "transparent";
        document.getElementById("titlebar").style.padding = "10px";
        // change back logo size on scroll up
        document.getElementById("logo").style.height = "125px";
        // change back title/h1 size and letter spacing on scroll up
        document.getElementById("title").style.fontSize= "3.5em";
        document.getElementById("title").style.letterSpacing = "15px";
        
    }
}

// image slideshow 
var slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
