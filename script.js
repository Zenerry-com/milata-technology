// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Copy to clipboard functionality
    const copyElements = document.querySelectorAll('[data-copy]');
    const copyToast = document.getElementById('copy-toast');
    const copyToastText = document.getElementById('copy-toast-text');
    
    copyElements.forEach(element => {
        element.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            
            // Create a temporary input element to copy text
            const tempInput = document.createElement('input');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            // Show toast notification
            showCopyToast('Zkopírováno do schránky!');
            
            // Add visual feedback
            const originalColor = this.style.color;
            this.style.color = '#99FC03';
            this.style.fontWeight = '600';
            
            setTimeout(() => {
                this.style.color = originalColor;
                this.style.fontWeight = 'normal';
            }, 1000);
        });
    });
    
    function showCopyToast(message) {
        copyToastText.textContent = message;
        copyToast.classList.add('show');
        
        setTimeout(() => {
            copyToast.classList.remove('show');
        }, 3000);
    }
    
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.service-card, .stat-card, .contact-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Counter animation for stats
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 20);
    }
    
    // Trigger counter animation when stats come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    animateCounter(stat, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // Add hover effects to advantage items
    const advantageItems = document.querySelectorAll('.advantage-item');
    
    advantageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(74, 92, 94, 0.2)';
            this.style.transform = 'scale(1.05)';
            
            const icon = this.querySelector('.advantage-icon');
            const text = this.querySelector('.advantage-text');
            
            if (icon) icon.style.transform = 'scale(1.25)';
            if (text) text.style.fontWeight = '500';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'scale(1)';
            
            const icon = this.querySelector('.advantage-icon');
            const text = this.querySelector('.advantage-text');
            
            if (icon) icon.style.transform = 'scale(1)';
            if (text) text.style.fontWeight = 'normal';
        });
    });
    
    // Add hover effects to contact sections
    const contactSections = document.querySelectorAll('.contact-section');
    
    contactSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(74, 92, 94, 0.1)';
            
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.backgroundColor = 'rgba(153, 252, 3, 0.2)';
                icon.style.transform = 'scale(1.1)';
            }
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.backgroundColor = 'rgba(153, 252, 3, 0.1)';
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Apply debouncing to scroll-heavy functions
    const debouncedUpdateActiveNav = debounce(updateActiveNav, 100);
    window.addEventListener('scroll', debouncedUpdateActiveNav);
    
    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Initialize all animations and effects
    console.log('MILATA TECHNOLOGY website loaded successfully');
});