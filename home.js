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
    
    // Navbar bg logic for visibility
    if (mobileMenu.classList.contains('active')) {
        navbar.classList.add('scrolled');
    } else if (window.scrollY <= 50) {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Scroll Reveal Animation
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

// Top Right Button Handler
function handleTopRightAction() {
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Booking Handler (Mock)
function handleBooking() {
    const btn = document.querySelector('#bookingForm button');
    const inputs = document.querySelectorAll('#bookingForm input');
    let valid = true;

    inputs.forEach(input => {
        if(!input.value) valid = false;
    });

    if(valid) {
        const originalText = btn.innerText;
        btn.innerText = "Request Sent Successfully";
        btn.classList.add('btn-success');
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('btn-success');
            inputs.forEach(i => i.value = '');
        }, 3000);
    } else {
        alert("Please fill in all fields.");
    }
}

/* ---------------------------------------------------
   HERO BACKGROUND IMAGE SLIDESHOW (ADDED)
--------------------------------------------------- */
const slides = document.querySelectorAll(".hero-slideshow .slide");
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Auto slide every 4 sec
if (slides.length > 0) {
    slides[0].classList.add("active"); // Initial state
    setInterval(changeSlide, 4000);
}

/* ---------------------------------------------------
   PRODUCTS DROPDOWN CLICK FUNCTIONALITY
--------------------------------------------------- */
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const dropbtn = document.querySelector('.dropbtn');

if (dropdown && dropdownContent && dropbtn) {
    // Toggle dropdown on click
    dropbtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });

    // Allow clicking on dropdown items to navigate
    const dropdownLinks = dropdownContent.querySelectorAll('a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Let the link navigate normally
            dropdownContent.style.display = 'none';
        });
    });
}
