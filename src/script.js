// ===========================
// SMOOTH SCROLL FOR ANCHORS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// STATS COUNT-UP ANIMATION
// ===========================
function animateCounter(el) {
    const originalText = el.textContent.trim();
    const match = originalText.match(/^(\d+)(.*)$/);
    if (!match) return;

    const targetVal = parseInt(match[1]);
    const suffix = match[2] || '';
    const duration = 2000; // 2 seconds
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function: easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.floor(easeProgress * targetVal);
        
        el.textContent = currentVal + suffix;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            el.textContent = originalText;
        }
    }
    window.requestAnimationFrame(step);
}

// ===========================
// INTERSECTION OBSERVER (Scroll Animations)
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            
            // Restore visibility and play anim
            el.style.opacity = '';
            
            // Retrieve target animation class and re-apply it
            const animClass = el.dataset.animClass;
            if (animClass) {
                el.classList.add(animClass);
            }
            el.classList.add('active');

            // Trigger counter animation if applicable
            if (el.classList.contains('count-up')) {
                animateCounter(el);
            }

            observer.unobserve(el);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Select elements to reveal
    const revealClasses = ['fade-in-up', 'fade-in-left', 'fade-in-right', 'reveal'];
    const selectors = revealClasses.map(c => `.${c}`).concat('.count-up').join(', ');
    const animateElements = document.querySelectorAll(selectors);

    animateElements.forEach(el => {
        // Save the animation class to data-attribute and remove it to prevent immediate play
        revealClasses.forEach(c => {
            if (el.classList.contains(c)) {
                el.dataset.animClass = c;
                el.classList.remove(c);
            }
        });
        
        // Initially hide elements until they scroll into view
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Copyright year dynamic
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});

// ===========================
// PARALLAX EFFECT
// ===========================
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px) translateZ(0)`;
    });

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// ===========================
// PAGE LOADED CLASS
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});