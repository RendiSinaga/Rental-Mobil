// ===========================
// RENDY RENTAL BATAM — MOTION & INTERACTIVITY ENGINE
// ===========================

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// ===========================
// TOAST FEEDBACK HELPER
// ===========================
window.showRentalToast = function (message) {
    const existing = document.getElementById('rental-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'rental-toast';
    toast.className = 'toast-pop fixed bottom-24 left-1/2 z-[120] px-5 py-3 rounded-full bg-primary/95 border border-gold/60 text-white text-sm font-semibold shadow-2xl shadow-gold/20 backdrop-blur-md flex items-center gap-2 pointer-events-none';
    toast.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-gold inline-block"></span><span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, 2650);
};

window.copyRentalAddress = function () {
    const addr = 'Perum Taman Lestari Blok C18, Batu Aji, Batam';
    const msg = window.RendyI18n ? window.RendyI18n.t('toast.addrCopied') : 'Alamat disalin: Batu Aji, Batam';
    const done = () => window.showRentalToast(msg);

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(done).catch(() => {
            fallbackCopy(addr);
            done();
        });
    } else {
        fallbackCopy(addr);
        done();
    }
};

function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    ta.remove();
}

// ===========================
// SMOOTH SCROLL FOR ANCHORS
// ===========================
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: REDUCED_MOTION ? 'auto' : 'smooth'
        });
    }
});

// ===========================
// DELEGATED CLICK RIPPLE + GOLDEN SPARKS
// ===========================
function spawnClickRipple(el, clientX, clientY) {
    if (REDUCED_MOTION) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    // Ensure overflow clipping only when safe
    const style = window.getComputedStyle(el);
    if (style.position === 'static') {
        el.style.position = 'relative';
    }
    if (style.overflow !== 'hidden') {
        el.style.overflow = 'hidden';
    }

    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    const isLightBg = el.classList.contains('from-gold') ||
        el.classList.contains('bg-gold') ||
        el.classList.contains('bg-white') ||
        el.classList.contains('text-primary');

    ripple.className = isLightBg ? 'click-ripple click-ripple-dark' : 'click-ripple';
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${clientX - rect.left}px`;
    ripple.style.top = `${clientY - rect.top}px`;

    el.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    setTimeout(() => { if (ripple.parentNode) ripple.remove(); }, 700);
}

function spawnSparks(clientX, clientY, count = 8) {
    if (REDUCED_MOTION) return;
    const colors = ['#fbbf24', '#fef08a', '#f59e0b', '#ffffff'];
    for (let i = 0; i < count; i++) {
        const spark = document.createElement('span');
        spark.className = 'click-spark';
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
        const dist = 26 + Math.random() * 34;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        const color = colors[i % colors.length];
        const size = 4 + Math.random() * 4;

        spark.style.left = `${clientX}px`;
        spark.style.top = `${clientY}px`;
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        spark.style.backgroundColor = color;
        spark.style.color = color;
        spark.style.setProperty('--tx', `${tx.toFixed(1)}px`);
        spark.style.setProperty('--ty', `${ty.toFixed(1)}px`);

        document.body.appendChild(spark);
        spark.addEventListener('animationend', () => spark.remove(), { once: true });
        setTimeout(() => { if (spark.parentNode) spark.remove(); }, 700);
    }
}

document.addEventListener('pointerdown', (e) => {
    const target = e.target.closest('button, .btn-tactile, .btn-sheen, [data-ripple], a[class*="rounded-full"], a[class*="rounded-xl"]');
    if (!target || target.disabled || target.hasAttribute('data-no-ripple')) return;

    const x = e.clientX || (target.getBoundingClientRect().left + target.offsetWidth / 2);
    const y = e.clientY || (target.getBoundingClientRect().top + target.offsetHeight / 2);

    spawnClickRipple(target, x, y);

    if (target.hasAttribute('data-spark') || target.classList.contains('btn-sheen') || target.classList.contains('spark-on-click')) {
        spawnSparks(x, y, 8);
    }
});

// ===========================
// DELEGATED SPOTLIGHT & 3D CARD TILT
// ===========================
if (FINE_POINTER && !REDUCED_MOTION) {
    let activeTiltCard = null;
    let activeMagnetic = null;

    document.addEventListener('pointermove', (e) => {
        // Spotlight + optional 3D tilt
        const card = e.target.closest('.spotlight-card, [data-tilt]');
        if (activeTiltCard && activeTiltCard !== card) {
            if (activeTiltCard.hasAttribute('data-tilt')) {
                activeTiltCard.style.transform = '';
            }
            activeTiltCard = null;
        }
        if (card) {
            activeTiltCard = card;
            const rect = card.getBoundingClientRect();
            const px = e.clientX - rect.left;
            const py = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${px}px`);
            card.style.setProperty('--mouse-y', `${py}px`);

            if (card.hasAttribute('data-tilt') && rect.width > 0 && rect.height > 0) {
                const maxTilt = parseFloat(card.dataset.tiltMax || '4.5');
                const rx = ((py / rect.height) - 0.5) * -maxTilt * 2;
                const ry = ((px / rect.width) - 0.5) * maxTilt * 2;
                card.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-6px)`;
            }
        }

        // Magnetic CTA hover pull
        const mag = e.target.closest('[data-magnetic]');
        if (activeMagnetic && activeMagnetic !== mag) {
            activeMagnetic.style.transform = '';
            activeMagnetic = null;
        }
        if (mag) {
            activeMagnetic = mag;
            const rect = mag.getBoundingClientRect();
            const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
            const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 7;
            mag.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) scale(1.04)`;
        }
    }, { passive: true });

    document.addEventListener('pointerout', (e) => {
        if (activeTiltCard && !activeTiltCard.contains(e.relatedTarget)) {
            if (activeTiltCard.hasAttribute('data-tilt')) {
                activeTiltCard.style.transform = '';
            }
            activeTiltCard = null;
        }
        if (activeMagnetic && !activeMagnetic.contains(e.relatedTarget)) {
            activeMagnetic.style.transform = '';
            activeMagnetic = null;
        }
    }, { passive: true });
}

// ===========================
// STATS COUNT-UP ANIMATION
// ===========================
function animateCounter(el) {
    if (el.dataset.counted === '1') return;
    el.dataset.counted = '1';

    const originalText = el.textContent.trim();
    const match = originalText.match(/^(\d+)(.*)$/);
    if (!match) return;

    const targetVal = parseInt(match[1], 10);
    const suffix = match[2] || '';
    if (REDUCED_MOTION) {
        el.textContent = originalText;
        return;
    }

    const startVal = targetVal > 1900 ? targetVal - 25 : 0;
    const duration = 1600;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.floor(startVal + easeProgress * (targetVal - startVal));

        el.textContent = currentVal + suffix;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            el.textContent = originalText;
            el.classList.add('price-pop');
            setTimeout(() => el.classList.remove('price-pop'), 400);
        }
    }
    window.requestAnimationFrame(step);
}

// ===========================
// INTERSECTION OBSERVER (Scroll Reveals)
// ===========================
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.style.opacity = '';

            const animClass = el.dataset.animClass;
            if (animClass) {
                el.classList.add(animClass);
            }
            el.classList.add('active');

            if (el.classList.contains('count-up')) {
                animateCounter(el);
            }

            observer.unobserve(el);
        }
    });
}, observerOptions);

// ===========================
// AMBIENT HERO PARTICLES CANVAS
// ===========================
function initAmbientParticles() {
    const canvas = document.getElementById('ambient-particles');
    if (!canvas || REDUCED_MOTION) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rafId = null;
    let isVisible = true;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
        const parent = canvas.parentElement;
        width = canvas.width = parent ? parent.clientWidth : window.innerWidth;
        height = canvas.height = parent ? parent.clientHeight : window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const count = window.innerWidth < 768 ? 16 : 28;
    const motes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 1.2 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.18 - Math.random() * 0.42,
        alpha: 0.25 + Math.random() * 0.5,
        gold: Math.random() > 0.22
    }));

    if (FINE_POINTER) {
        canvas.parentElement?.addEventListener('pointermove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        }, { passive: true });
        canvas.parentElement?.addEventListener('pointerleave', () => {
            mouse.x = -9999;
            mouse.y = -9999;
        }, { passive: true });
    }

    const heroObs = new IntersectionObserver((entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
        if (isVisible && !rafId && !document.hidden) {
            rafId = requestAnimationFrame(draw);
        }
    }, { threshold: 0.01 });
    heroObs.observe(canvas);

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        } else if (!document.hidden && isVisible && !rafId) {
            rafId = requestAnimationFrame(draw);
        }
    });

    function draw() {
        if (!isVisible || document.hidden) {
            rafId = null;
            return;
        }
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < motes.length; i++) {
            const m = motes[i];
            m.x += m.vx;
            m.y += m.vy;

            // Gentle pointer repulsion
            const dx = m.x - mouse.x;
            const dy = m.y - mouse.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 11000 && distSq > 1) {
                const force = (1 - distSq / 11000) * 0.9;
                m.x += (dx / Math.sqrt(distSq)) * force;
                m.y += (dy / Math.sqrt(distSq)) * force;
            }

            if (m.y < -10) {
                m.y = height + 10;
                m.x = Math.random() * width;
            }
            if (m.x < -10) m.x = width + 10;
            if (m.x > width + 10) m.x = -10;

            ctx.beginPath();
            ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
            ctx.fillStyle = m.gold
                ? `rgba(251, 191, 36, ${m.alpha})`
                : `rgba(147, 197, 253, ${m.alpha * 0.7})`;
            ctx.fill();
        }

        rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
}

// ===========================
// SCROLL PROGRESS, BACK TO TOP & SCROLLSPY
// ===========================
function initScrollUI() {
    let progressEl = document.getElementById('scroll-progress');
    if (!progressEl) {
        progressEl = document.createElement('div');
        progressEl.id = 'scroll-progress';
        document.body.prepend(progressEl);
    }

    const cordWrap = document.getElementById('pull-cord-wrap');
    const cordLine = document.getElementById('pull-cord-line');
    const cordAnchor = document.getElementById('pull-cord-anchor');
    const backToTop = document.getElementById('back-to-top');
    const navLinks = Array.from(document.querySelectorAll('header nav a[href^="#"]'));
    const sections = navLinks
        .map(link => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return null;
            const target = document.querySelector(href);
            return target ? { link, target } : null;
        })
        .filter(Boolean);

    const parallaxElements = Array.from(document.querySelectorAll('.parallax'));
    let scrollTick = false;
    let lastShownCord = null;

    function onScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

        progressEl.style.transform = `scaleX(${ratio.toFixed(4)})`;

        const cordTarget = cordWrap || backToTop;
        if (cordTarget) {
            const shouldShow = scrollTop > 380;
            if (shouldShow !== lastShownCord) {
                lastShownCord = shouldShow;
                if (shouldShow) {
                    cordTarget.classList.remove('opacity-0', '-translate-y-8', 'translate-y-4', 'pointer-events-none');
                    cordTarget.classList.add('opacity-100', 'translate-y-0');
                } else {
                    cordTarget.classList.add('opacity-0', '-translate-y-8', 'pointer-events-none');
                    cordTarget.classList.remove('opacity-100', 'translate-y-0');
                }
            }
        }

        if (sections.length) {
            const probe = scrollTop + 180;
            let activeLink = null;
            for (const item of sections) {
                if (item.target.offsetTop <= probe) {
                    activeLink = item.link;
                }
            }
            const homeLink = navLinks.find(l => l.getAttribute('href') === '#');
            navLinks.forEach(l => l.classList.remove('nav-link-active'));
            if (activeLink) {
                activeLink.classList.add('nav-link-active');
            } else if (homeLink && scrollTop < 300) {
                homeLink.classList.add('nav-link-active');
            }
        }

        // Parallax elements
        if (parallaxElements.length) {
            for (const element of parallaxElements) {
                const speed = parseFloat(element.dataset.speed || '0.5');
                const yPos = -(scrollTop * speed);
                element.style.transform = `translateY(${yPos}px) translateZ(0)`;
            }
        }

        scrollTick = false;
    }

    window.addEventListener('scroll', () => {
        if (!scrollTick) {
            window.requestAnimationFrame(onScroll);
            scrollTick = true;
        }
    }, { passive: true });

    if (backToTop) {
        const BASE_CORD = 40;
        let isDragging = false;
        let startY = 0;
        let maxStretch = 0;
        let pointerHandled = false;
        let animTimer = null;

        function triggerSnapScrollUp() {
            clearTimeout(animTimer);
            if (cordWrap && cordLine && !REDUCED_MOTION) {
                cordWrap.classList.remove('is-dragging');
                cordWrap.classList.add('is-pulling', 'is-snapping');
                cordLine.style.height = '';

                if (cordAnchor) {
                    cordAnchor.classList.remove('is-armed');
                    cordAnchor.classList.add('is-snapped');
                    const aRect = cordAnchor.getBoundingClientRect();
                    spawnSparks(aRect.left + aRect.width / 2, aRect.top + aRect.height / 2, 10);
                }

                const hRect = backToTop.getBoundingClientRect();
                spawnSparks(hRect.left + hRect.width / 2, hRect.top + hRect.height / 2, 7);

                window.scrollTo({ top: 0, behavior: 'smooth' });

                animTimer = setTimeout(() => {
                    cordWrap.classList.remove('is-snapping', 'is-pulling');
                    if (cordAnchor) cordAnchor.classList.remove('is-snapped');
                }, 420);
            } else {
                window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
            }
        }

        function playAutoPullAndSnap() {
            if (!cordWrap || !cordLine || REDUCED_MOTION) {
                triggerSnapScrollUp();
                return;
            }
            clearTimeout(animTimer);
            cordWrap.classList.add('is-pulling');
            // Step 1: Tarik tali ke bawah sejenak seperti menyalakan/mematikan tali lampu
            cordLine.style.height = '64px';
            if (cordAnchor) cordAnchor.classList.add('is-armed');

            animTimer = setTimeout(() => {
                // Step 2: Lepas & melesat ke atas bersama halaman
                triggerSnapScrollUp();
            }, 170);
        }

        backToTop.addEventListener('pointerdown', (e) => {
            if (e.button !== 0 && e.pointerType === 'mouse') return;
            isDragging = true;
            startY = e.clientY;
            maxStretch = 0;
            pointerHandled = false;
            try { backToTop.setPointerCapture(e.pointerId); } catch (_) {}
            if (cordWrap) cordWrap.classList.add('is-pulling', 'is-dragging');
        });

        backToTop.addEventListener('pointermove', (e) => {
            if (!isDragging || !cordLine) return;
            const dy = e.clientY - startY;
            const stretch = dy > 0 ? Math.min(30, dy * 0.72) : 0;
            maxStretch = Math.max(maxStretch, stretch);
            cordLine.style.height = `${(BASE_CORD + stretch).toFixed(1)}px`;

            if (cordAnchor) {
                if (stretch >= 12) cordAnchor.classList.add('is-armed');
                else cordAnchor.classList.remove('is-armed');
            }
        });

        function finishDrag(e) {
            if (!isDragging) return;
            isDragging = false;
            pointerHandled = true;
            setTimeout(() => { pointerHandled = false; }, 120);
            try { backToTop.releasePointerCapture(e.pointerId); } catch (_) {}

            if (cordWrap) cordWrap.classList.remove('is-dragging');
            const finalDy = e.clientY - startY;
            const finalStretch = finalDy > 0 ? Math.min(30, finalDy * 0.72) : 0;

            if (finalStretch >= 12) {
                // User menarik tali cukup jauh lalu lepas -> langsung melesat ke atas!
                triggerSnapScrollUp();
            } else if (maxStretch < 5) {
                // Klik/tap cepat -> putar animasi tarik ke bawah lalu tarik ke atas
                playAutoPullAndSnap();
            } else {
                // Tarikan pendek batal -> pantulkan tali kembali
                if (cordLine) cordLine.style.height = '';
                if (cordAnchor) cordAnchor.classList.remove('is-armed');
                if (cordWrap) cordWrap.classList.remove('is-pulling');
            }
        }

        backToTop.addEventListener('pointerup', finishDrag);
        backToTop.addEventListener('pointercancel', () => {
            isDragging = false;
            if (cordLine) cordLine.style.height = '';
            if (cordAnchor) cordAnchor.classList.remove('is-armed');
            if (cordWrap) cordWrap.classList.remove('is-dragging', 'is-pulling');
        });

        // Aksesibilitas keyboard (Enter/Space)
        backToTop.addEventListener('click', (e) => {
            if (pointerHandled) {
                pointerHandled = false;
                return;
            }
            playAutoPullAndSnap();
        });
    }

    onScroll();
}

// ===========================
// HERO CAR STAGE INTERACTIVE BOOST
// ===========================
function initCarStageBoost() {
    const stage = document.getElementById('hero-car-stage');
    if (!stage) return;

    const lottie = stage.querySelector('lottie-player');
    let timer = null;
    let stageVisible = true;

    if (lottie) {
        const syncLottiePlayback = () => {
            try {
                if (REDUCED_MOTION || document.hidden || !stageVisible) {
                    if (typeof lottie.pause === 'function') lottie.pause();
                } else if (typeof lottie.play === 'function') {
                    lottie.play();
                }
            } catch (_) {}
        };

        const lottieObs = new IntersectionObserver((entries) => {
            stageVisible = entries[0]?.isIntersecting ?? true;
            syncLottiePlayback();
        }, { threshold: 0.05 });
        lottieObs.observe(stage);
        document.addEventListener('visibilitychange', syncLottiePlayback);
    }

    stage.addEventListener('click', (e) => {
        const rect = stage.getBoundingClientRect();
        spawnSparks(e.clientX || rect.left + rect.width / 2, e.clientY || rect.top + rect.height / 2, 10);

        stage.classList.add('car-stage-boosting');
        if (lottie && typeof lottie.setSpeed === 'function') {
            try { lottie.setSpeed(2.2); } catch (_) {}
        }

        const boostMsg = window.RendyI18n ? window.RendyI18n.t('toast.carBoost') : 'Unit matic bersih siap jalan di Batam!';
        window.showRentalToast(boostMsg);

        clearTimeout(timer);
        timer = setTimeout(() => {
            stage.classList.remove('car-stage-boosting');
            if (lottie && typeof lottie.setSpeed === 'function') {
                try { lottie.setSpeed(1); } catch (_) {}
            }
        }, 1300);
    });
}

// ===========================
// MICRO-INTERACTIONS (COLOR SWAP, ESTIMATOR POP, BOOKING STEP)
// ===========================
function triggerOneShotAnim(el, className, fallbackMs = 550) {
    if (!el || REDUCED_MOTION) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
    let cleared = false;
    const cleanup = () => {
        if (cleared) return;
        cleared = true;
        el.classList.remove(className);
    };
    el.addEventListener('animationend', cleanup, { once: true });
    setTimeout(cleanup, fallbackMs);
}

function initMicroInteractions() {
    if (REDUCED_MOTION) return;

    document.querySelectorAll('[data-car-photo]').forEach(img => {
        img.dataset.lastSrc = img.getAttribute('src') || '';
    });

    const recordSwatchSrc = (e) => {
        const swatch = e.target.closest('[data-car-swatch]');
        if (!swatch) return;
        const img = swatch.closest('[data-car-stage]')?.querySelector('[data-car-photo]');
        if (img) {
            img.dataset.lastSrc = img.getAttribute('src') || '';
        }
    };
    document.addEventListener('pointerdown', recordSwatchSrc, { passive: true });
    document.addEventListener('focusin', recordSwatchSrc, { passive: true });

    document.addEventListener('click', (e) => {
        // 1. Crossfade saat ganti warna mobil (kartu armada & modal)
        const swatch = e.target.closest('[data-car-swatch]');
        if (swatch) {
            const stage = swatch.closest('[data-car-stage]');
            const img = stage?.querySelector('[data-car-photo]');
            if (img) {
                const prevSrc = img.dataset.lastSrc || img.getAttribute('src') || '';
                window.requestAnimationFrame(() => {
                    const nextSrc = img.getAttribute('src') || '';
                    if (!nextSrc || nextSrc === prevSrc) return;
                    img.dataset.lastSrc = nextSrc;

                    if (img.complete && img.naturalWidth > 0) {
                        img.classList.remove('car-img-loading');
                        triggerOneShotAnim(img, 'car-img-swapping', 360);
                    } else {
                        img.classList.add('car-img-loading');
                        const onReady = () => {
                            img.classList.remove('car-img-loading');
                            triggerOneShotAnim(img, 'car-img-swapping', 360);
                        };
                        img.addEventListener('load', onReady, { once: true });
                        img.addEventListener('error', onReady, { once: true });
                    }
                });
            }
        }

        // 2. Pop harga total, durasi hari & highlight GRATIS di kalkulator modal
        const simTrigger = e.target.closest('[data-sim-trigger]');
        if (simTrigger) {
            const simBox = simTrigger.closest('[data-sim-box]');
            if (simBox) {
                const totalEl = simBox.querySelector('[data-sim-total]');
                const daysEl = simBox.querySelector('[data-sim-days]');
                const badgeEl = simBox.querySelector('[data-sim-pickup-badge]');
                const prevTotal = totalEl ? totalEl.textContent : '';
                const prevDays = daysEl ? daysEl.textContent : '';
                const prevBadge = badgeEl ? badgeEl.textContent : '';

                window.requestAnimationFrame(() => {
                    if (totalEl && totalEl.textContent !== prevTotal) {
                        triggerOneShotAnim(totalEl, 'price-pop', 420);
                    }
                    if (daysEl && daysEl.textContent !== prevDays) {
                        triggerOneShotAnim(daysEl, 'qty-pop', 340);
                    }
                    const isFreeTxt = (t) => t === 'GRATIS' || t === 'FREE';
                    if (badgeEl && isFreeTxt(badgeEl.textContent) && !isFreeTxt(prevBadge)) {
                        triggerOneShotAnim(badgeEl, 'badge-free-pop', 540);
                    }
                });
            }
        }

        // 3. Transisi halus kotak detail Cara Booking
        const bookingTrigger = e.target.closest('[data-booking-trigger]');
        if (bookingTrigger) {
            const bookingStage = bookingTrigger.closest('[data-booking-stage]');
            const detailBox = bookingStage?.querySelector('[data-booking-detail]');
            if (detailBox) {
                const prevText = detailBox.textContent;
                window.requestAnimationFrame(() => {
                    if (detailBox.textContent !== prevText) {
                        triggerOneShotAnim(detailBox, 'booking-step-in', 320);
                    }
                });
            }
        }
    });
}

// ===========================
// BOOTSTRAP ON DOM READY
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const revealClasses = ['fade-in-up', 'fade-in-left', 'fade-in-right', 'reveal'];
    const selectors = revealClasses.map(c => `.${c}`).concat('.count-up').join(', ');
    const animateElements = document.querySelectorAll(selectors);

    animateElements.forEach(el => {
        // Never trap Alpine dynamic template/modal nodes at opacity: 0
        if (el.closest('template, [x-show], [x-for]')) {
            if (el.classList.contains('count-up')) animateCounter(el);
            return;
        }

        revealClasses.forEach(c => {
            if (el.classList.contains(c)) {
                el.dataset.animClass = c;
                el.classList.remove(c);
            }
        });

        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
            if (el.dataset.animClass) el.classList.add(el.dataset.animClass);
            el.classList.add('active');
            if (el.classList.contains('count-up')) animateCounter(el);
        } else {
            if (!REDUCED_MOTION) {
                el.style.opacity = '0';
            } else {
                if (el.dataset.animClass) el.classList.add(el.dataset.animClass);
                el.classList.add('active');
            }
            observer.observe(el);
        }
    });

    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    initAmbientParticles();
    initScrollUI();
    initCarStageBoost();
    initMicroInteractions();
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
