// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        navbar.classList.add('scrolled'); 
    } else if (window.scrollY <= 50) {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();