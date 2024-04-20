const darkModeToggle = document.getElementById('dark-mode-toggle');
const navbar = document.getElementById('navbar');
const body = document.body;
const sliderContainer = document.querySelector('.slider-container');

darkModeToggle.addEventListener('click', function() {
    navbar.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode'); 
    sliderContainer.classList.toggle('dark-mode'); 
});
