const myslide = document.querySelectorAll('.myslides')
const dot = document.querySelectorAll('.dot')

let slideIndex = 1;
showSlides(slideIndex);

let timer = setInterval(autoslide, 5000);
function autoslide() {
    slideIndex += 1;
    showSlides(slideIndex);
}
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetTimer();
}
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    resetTimer();
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 5000);
}

function showSlides(n) {
    let i;
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for (i = 0; i<dot.length; i++) {
        dot[i].classList.remove('active');
    }
    if (n > myslide.length) {
        slideIndex = 1;
    }
    if ( n < 1) {
        slideIndex = myslide.length;
    }
    myslide[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].classList.add('active'); 
}