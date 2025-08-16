// Language translations
const translations = {
    // Navbar
    home: { en: 'Home', cz: 'Domů' },
    services: { en: 'Services', cz: 'Služby' },
    about: { en: 'About', cz: 'O nás' },
    contact: { en: 'Contact', cz: 'Kontakt' },
    getQuote: { en: 'Get a Quote +420 777 919 642', cz: 'Získat nabídku +420 777 919 642' },
    
    // Hero
    heroTitle1: { en: 'Advanced Solutions for', cz: 'Pokročilá řešení pro' },
    heroTitle2: { en: 'Road & Land Management', cz: 'Správu silnic a pozemků' },
    heroDesc: { 
        en: 'Innovative technology and sustainable practices for highway maintenance, forestry management, and environmental stability.',
        cz: 'Inovativní technologie a udržitelné postupy pro údržbu silnic, lesní hospodářství a ekologickou stabilitu.'
    },
    exploreServices: { en: 'Contact Us +420 777 919 642', cz: 'Kontaktujte nás +420 777 919 642' },
    contactUs: { en: 'Contact Us', cz: 'Kontaktujte nás' },
    yearsExp: { en: 'Years of Experience', cz: 'Let zkušeností' },
    projectsCompleted: { en: 'Projects Completed', cz: 'Dokončených projektů' },
    specializedVehicles: { en: 'Specialized Vehicles', cz: 'Specializovaných vozidel' },
    
    // Services
    ourServices: { en: 'Our', cz: 'Naše' },
    services2: { en: 'Services', cz: 'Služby' },
    servicesDesc: { 
        en: 'Leveraging cutting-edge technology and sustainable practices to deliver exceptional results across multiple sectors.',
        cz: 'Využívání špičkových technologií a udržitelných postupů k dosažení výjimečných výsledků v různých odvětvích.'
    },
    
    // Services titles
    roadMaintenance: { 
        en: 'Road & Highway Maintenance', 
        cz: 'Údržba silnic a dálnic' 
    },
    treeManagement: { 
        en: 'Tree Management & Forestry', 
        cz: 'Správa stromů a lesnictví' 
    },
    snowRemoval: { 
        en: 'Snow Removal & Winter Services', 
        cz: 'Odstraňování sněhu a zimní služby' 
    },
    soilStabilization: { 
        en: 'Soil Stabilization', 
        cz: 'Stabilizace půdy' 
    },
    roadwayRecycling: { 
        en: 'Roadway Recycling', 
        cz: 'Recyklace vozovek' 
    },
    constructionPrep: { 
        en: 'Construction Preparation', 
        cz: 'Příprava stavby' 
    },
    
    // Services descriptions
    roadMaintenanceDesc: {
        en: 'Comprehensive maintenance solutions including grass cutting, safety monitoring, and surface repairs for highways and roads.',
        cz: 'Komplexní údržbová řešení včetně sekání trávy, bezpečnostního monitorování a oprav povrchů silnic a dálnic.'
    },
    treeManagementDesc: {
        en: 'Professional tree felling, stump milling, and forest maintenance using advanced milling technology.',
        cz: 'Profesionální kácení stromů, frézování pařezů a údržba lesů pomocí pokročilé frézovací technologie.'
    },
    snowRemovalDesc: {
        en: 'Rapid and efficient removal of snow cover from roadways, parking areas, and commercial properties.',
        cz: 'Rychlé a účinné odstraňování sněhové pokrývky z vozovek, parkovišť a komerčních nemovitostí.'
    },
    soilStabilizationDesc: {
        en: 'Innovative soil stabilization using mixed binders to ensure solid foundations for construction projects.',
        cz: 'Inovativní stabilizace půdy pomocí smíšených pojiv pro zajištění pevných základů stavebních projektů.'
    },
    roadwayRecyclingDesc: {
        en: 'Sustainable recycling of road materials, reducing waste and environmental impact while creating new usable materials.',
        cz: 'Udržitelná recyklace silničních materiálů, snižování odpadu a dopadu na životní prostředí při vytváření nových použitelných materiálů.'
    },
    constructionPrepDesc: {
        en: 'Complete land preparation services including deforestation, clearing, and grading for construction projects.',
        cz: 'Kompletní služby přípravy pozemků včetně odlesnění, čištění a terénních úprav pro stavební projekty.'
    },
    
    // About
    aboutTitle: { en: 'About', cz: 'O' },
    aboutTitle2: { en: 'Us', cz: 'nás' },
    
    // Contact
    getInTouch: { en: 'Get In', cz: 'Spojte se' },
    touchTitle2: { en: 'Touch', cz: 's námi' },
    contactDesc: {
        en: 'Have a project in mind or questions about our services? Reach out to our team for professional consultation.',
        cz: 'Máte v plánu projekt nebo otázky ohledně našich služeb? Kontaktujte náš tým pro profesionální konzultaci.'
    },
    contactInfo: { en: 'Contact Information', cz: 'Kontaktní údaje' },
    emailUs: { en: 'Email Us', cz: 'Napište nám' },
    callUs: { en: 'Call Us', cz: 'Zavolejte nám' },
    visitUs: { en: 'Visit Us', cz: 'Navštivte nás' },
    workingHours: { en: 'Working Hours', cz: 'Otevírací doba' },
    workingHoursWeekday: { en: 'Monday - Friday: 8:00 AM - 6:00 PM', cz: 'Pondělí - Pátek: 8:00 - 18:00' },
    workingHoursSaturday: { en: 'Saturday: 9:00 AM - 1:00 PM', cz: 'Sobota: 9:00 - 13:00' },
    workingHoursSunday: { en: 'Sunday: Closed', cz: 'Neděle: Zavřeno' },
    
    // Footer
    companyDesc: {
        en: 'Providing advanced technology solutions for road and land management with a focus on sustainability and innovation.',
        cz: 'Poskytujeme pokročilá technologická řešení pro správu silnic a pozemků se zaměřením na udržitelnost a inovace.'
    },
    quickLinks: { en: 'Quick Links', cz: 'Rychlé odkazy' },
    careers: { en: 'Careers', cz: 'Kariéra' },
    copyright: { en: 'All rights reserved.', cz: 'Všechna práva vyhrazena.' },
    privacyPolicy: { en: 'Privacy Policy', cz: 'Zásady ochrany osobních údajů' },
    termsOfService: { en: 'Terms of Service', cz: 'Obchodní podmínky' },
    cookiePolicy: { en: 'Cookie Policy', cz: 'Zásady používání cookies' }
};

// Current language state
let currentLanguage = 'cz';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeLanguage();
    initializeScrollEffects();
    initializeAnimations();
    initializeCopyToClipboard();
    initializeSmoothScrolling();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Desktop services dropdown
    const servicesToggle = document.getElementById('servicesToggle');
    const servicesMenu = document.getElementById('servicesMenu');
    
    if (servicesToggle && servicesMenu) {
        const servicesDropdown = servicesToggle.closest('.dropdown');
        
        servicesToggle.addEventListener('click', function(e) {
            e.preventDefault();
            servicesDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!servicesDropdown.contains(e.target)) {
                servicesDropdown.classList.remove('active');
            }
        });
    }
    
    // Mobile services dropdown
    const mobileServicesToggle = document.getElementById('mobileServicesToggle');
    const mobileServicesMenu = document.getElementById('mobileServicesMenu');
    
    if (mobileServicesToggle && mobileServicesMenu) {
        const mobileServicesDropdown = mobileServicesToggle.closest('.mobile-dropdown');
        
        mobileServicesToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileServicesDropdown.classList.toggle('active');
        });
    }
    
    // Language dropdown
    const languageToggle = document.getElementById('languageToggle');
    const languageMenu = document.getElementById('languageMenu');
    
    if (languageToggle && languageMenu) {
        const languageDropdown = languageToggle.closest('.dropdown');
        
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            languageDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('active');
            }
        });
    }
    
    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-item');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (!link.classList.contains('mobile-dropdown-toggle')) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });
}

// Language functionality
function initializeLanguage() {
    // Set initial language
    updateLanguage(currentLanguage);
    
    // Update language buttons
    updateLanguageButtons();
}

function setLanguage(lang) {
    currentLanguage = lang;
    updateLanguage(lang);
    updateLanguageButtons();
    
    // Close language dropdown
    const languageDropdown = document.querySelector('.dropdown');
    if (languageDropdown) {
        languageDropdown.classList.remove('active');
    }
}

function updateLanguage(lang) {
    // Update current language display
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
    
    // Update all elements with data-en and data-cz attributes
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-cz]');
    elementsToTranslate.forEach(element => {
        const translation = element.getAttribute('data-' + lang);
        if (translation) {
            element.textContent = translation;
        }
    });
}

function updateLanguageButtons() {
    // Update language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        const lang = button.getAttribute('onclick').includes('cz') ? 'cz' : 'en';
        if (lang === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(51, 65, 85, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(51, 65, 85, 0.9)';
        }
    });
    
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animations
function initializeAnimations() {
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
    
    // Observe sections for scroll animations
    const sectionsToAnimate = document.querySelectorAll('.services, .about, .contact');
    sectionsToAnimate.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
    
    // Service cards hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Copy to clipboard functionality
function initializeCopyToClipboard() {
    // This function is called from HTML onclick attributes
    window.copyToClipboard = function(text, type) {
        navigator.clipboard.writeText(text).then(function() {
            // Show copy indicator
            const indicator = document.getElementById('copy' + type.charAt(0).toUpperCase() + type.slice(1));
            if (indicator) {
                indicator.classList.add('show');
                setTimeout(function() {
                    indicator.classList.remove('show');
                }, 2000);
            }
            
            // Show toast notification
            showToast('Copied to clipboard: ' + text);
        }).catch(function(err) {
            console.error('Failed to copy text: ', err);
            showToast('Failed to copy to clipboard');
        });
    };
}

// Toast notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background-color: var(--milata-limeGreen);
        color: var(--milata-darkGraphite);
        padding: 12px 20px;
        border-radius: 6px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.addEventListener('click', function(e) {
        const target = e.target;
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const id = target.getAttribute('href').substring(1);
            const element = document.getElementById(id);
            if (element) {
                const navbarHeight = 80;
                const elementPosition = element.offsetTop - navbarHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// Expose setLanguage function globally for onclick handlers
window.setLanguage = setLanguage;