// Global variables
let currentLanguage = 'de';

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageSwitcher();
    initializeNavigation();
    initializeAnimations();
});

/**
 * Initialize language switcher functionality
 */
function initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const selectedLang = event.target.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    });
}

/**
 * Switch website language
 * @param {string} lang - Language code (de, en, ro, hr, it)
 */
function switchLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language '${lang}' not found in translations`);
        return;
    }
    
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update all translatable elements
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Translation key '${key}' not found for language '${lang}'`);
        }
    });
}

/**
 * Initialize smooth scrolling navigation
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize scroll animations
 */
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initialize animations for cards and sections
    const elementsToAnimate = document.querySelectorAll('.card, .section');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Open location in maps app
 * @param {string} address - Address to open in maps
 */
function openMaps(address) {
    // Detect user agent for mobile vs desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Try Apple Maps first on iOS, Google Maps on Android
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (isIOS) {
            window.open(`maps://maps.apple.com/?q=${encodeURIComponent(address)}&dirflg=d`, '_blank');
        } else {
            window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}&navigate=yes`, '_blank');
        }
    } else {
        // Desktop - open Google Maps
        window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}`, '_blank');
    }
}

/**
 * Search for hotel on Google
 * @param {string} hotelName - Name of the hotel to search
 */
function searchHotel(hotelName) {
    const searchQuery = `${hotelName} booking hotel`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
}

/**
 * Search for restaurant on Google
 * @param {string} restaurantName - Name of the restaurant to search
 */
function searchRestaurant(restaurantName) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(restaurantName)}`, '_blank');
}

/**
 * Search for attraction on Google
 * @param {string} attractionName - Name of the attraction to search
 */
function searchAttraction(attractionName) {
    const searchQuery = `${attractionName} information`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
}

/**
 * Utility function to get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
    return currentLanguage;
}

/**
 * Utility function to get translation for current language
 * @param {string} key - Translation key
 * @returns {string} Translated text or key if not found
 */
function getTranslation(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    console.warn(`Translation key '${key}' not found for language '${currentLanguage}'`);
    return key;
}