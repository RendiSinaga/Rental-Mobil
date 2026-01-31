// ===========================
// TYPING ANIMATION
// ===========================

const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');

// Array kata-kata yang akan di-rotate
const words = [
    'Berkendara',
    'Berpetualang',
    'Menjelajah',
    'Berlibur',
    'Bertualang'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150; // Speed ketik
let erasingDelay = 100; // Speed hapus
let newWordDelay = 2000; // Delay setelah kata selesai

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Hapus karakter
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Ketik karakter
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Logika switching
    if (!isDeleting && charIndex === currentWord.length) {
        // Kata selesai diketik, pause sebelum hapus
        isDeleting = true;
        setTimeout(type, newWordDelay);
        return;
    } else if (isDeleting && charIndex === 0) {
        // Kata selesai dihapus, pindah ke kata berikutnya
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
        return;
    }

    // Tentukan delay berikutnya
    const delay = isDeleting ? erasingDelay : typingDelay;
    setTimeout(type, delay);
}

// Mulai typing setelah 1 detik (kasih waktu page load)
setTimeout(() => {
    type();
}, 1000);

// Cursor blinking animation
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);

// ===========================
// CAR DRIVING ANIMATION
// ===========================

const heroCar = document.getElementById('hero-car');

if (heroCar) {
    let position = 0;
    let direction = 1; // 1 = kanan, -1 = kiri
    let isAnimating = false;

    function driveCar() {
        if (!isAnimating) return;

        // Update position
        position += direction * 0.5;

        // Batasan gerakan (jangan sampai keluar frame)
        if (position > 20) {
            direction = -1; // Balik kiri
        } else if (position < -20) {
            direction = 1; // Balik kanan
        }

        // Apply transform dengan smooth movement
        heroCar.style.transform = `translateX(${position}px) scale(${direction === -1 ? -1 : 1}, 1)`;

        requestAnimationFrame(driveCar);
    }

    // Start animation saat hover
    heroCar.addEventListener('mouseenter', () => {
        isAnimating = true;
        driveCar();
    });

    // Stop animation saat mouse leave
    heroCar.addEventListener('mouseleave', () => {
        isAnimating = false;
        // Reset position smoothly
        heroCar.style.transition = 'transform 0.5s ease';
        heroCar.style.transform = 'translateX(0) scale(1, 1)';
        setTimeout(() => {
            heroCar.style.transition = '';
            position = 0;
            direction = 1;
        }, 500);
    });

    // Auto-play animation on page load (optional)
    // Uncomment jika mau mobil langsung jalan saat page load
    /*
    setTimeout(() => {
        isAnimating = true;
        driveCar();
        // Stop after 3 seconds
        setTimeout(() => {
            isAnimating = false;
            heroCar.style.transition = 'transform 0.5s ease';
            heroCar.style.transform = 'translateX(0) scale(1, 1)';
        }, 3000);
    }, 2000);
    */
}

// ===========================
// ALTERNATIVE: Continuous Driving Animation
// ===========================

// Jika mau mobil selalu jalan tanpa henti (background effect)
function continuousDrive() {
    const car = document.getElementById('hero-car');
    if (!car) return;

    let pos = -100; // Mulai dari kiri (off-screen)
    const speed = 0.3;

    function animate() {
        pos += speed;

        // Reset ketika mobil keluar frame kanan
        if (pos > window.innerWidth + 100) {
            pos = -100;
        }

        car.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(animate);
    }

    // Uncomment untuk activate continuous drive
    // animate();
}

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// INTERSECTION OBSERVER (Fade In Animations)
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.fade-in-up, .fade-in-right');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
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
        element.style.transform = `translateY(${yPos}px)`;
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
// MOBILE MENU AUTO CLOSE
// ===========================
document.querySelectorAll('[x-data] a').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            window.scrollBy(0, -1);
            window.scrollBy(0, 1);
        }, 100);
    });
});

// ===========================
// CONSOLE MESSAGE
// ===========================
console.log(
    '%cRendy Rental 🚗',
    'color: #fbbf24; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 0px #0a0e27'
);
console.log(
    '%cWebsite dengan Typing & Driving Animation!',
    'color: #9ca3af; font-size: 14px;'
);

// ===========================
// PAGE LOADED
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('Rendy Rental website loaded successfully! 🚗✨');
});