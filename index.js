const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    hamburger.classList.toggle('nav-open');
    navToggle.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        hamburger.classList.remove('nav-open');
        navToggle.classList.remove('nav-open');
    }); 
});