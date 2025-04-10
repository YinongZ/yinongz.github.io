document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.project-card, .assignment-card, .reading-card');
    
    const fadeOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const fadeOnScroll = new IntersectionObserver(function(entries, fadeOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in');
                fadeOnScroll.unobserve(entry.target);
            }
        });
    }, fadeOptions);
    
    fadeElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
        element.style.transform = "translateY(20px)";
        fadeOnScroll.observe(element);
    });
    
    document.addEventListener('scroll', function() {
        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Check if element is in viewport
            if(position.top < window.innerHeight && position.bottom >= 0) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    });
});

// Add the fade-in class for CSS
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);