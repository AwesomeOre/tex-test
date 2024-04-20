let slideIndex = 1;

function showSlides(n) {
    let slides = document.querySelectorAll('.slider img');

    if (n > slides.length) { 
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slides[slideIndex - 1].style.display = 'block'; 
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function nextSlide() {
    showSlides(slideIndex += 1);
}


document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

showSlides(slideIndex);
