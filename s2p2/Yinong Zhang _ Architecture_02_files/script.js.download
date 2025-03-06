document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    let cursorVisible = false;
    
    // Hide cursor on page load
    cursor.style.opacity = 0;
    
    // Show custom cursor once mouse moves
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        
        if (!cursorVisible) {
            cursor.classList.add('visible');
            cursorVisible = true;
        }
    });
    
    // Hide cursor when it leaves window
    document.addEventListener('mouseout', () => {
        cursor.classList.remove('visible');
        cursorVisible = false;
    });
    
    // Make cursor bigger when hovering over links
    const links = document.querySelectorAll('a, button, .menu-toggle');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.hero-text, .hero-image, .project, .about-image, .about-content, .contact-content');
    
    animatedElements.forEach((element, index) => {
        // Add different animation classes based on element or position
        if (element.classList.contains('hero-text')) {
            element.classList.add('slide-in-left');
        } else if (element.classList.contains('hero-image')) {
            element.classList.add('slide-in-right');
        } else {
            element.classList.add('fade-in');
            // Add a small delay for each project
            if (element.classList.contains('project')) {
                element.style.transitionDelay = `${index * 0.1}s`;
            }
        }
        
        observer.observe(element);
    });
});