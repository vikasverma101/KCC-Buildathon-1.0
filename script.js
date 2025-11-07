// Editable configuration
const EVENT_NAME = 'Buildathon 2025';
const EVENT_DATETIME_ISO = '2025-11-22T09:00:00';

// Mobile menu toggle
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
if (menuButton && mobileMenu) {
  const openMenu = () => {
    mobileMenu.classList.remove('hidden');
    menuButton.classList.add('is-open');
    menuButton.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    if (mobileMenu.classList.contains('hidden')) return;
    mobileMenu.classList.add('hidden');
    menuButton.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = (event) => {
    event.stopPropagation();
    if (mobileMenu.classList.contains('hidden')) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  menuButton.addEventListener('click', toggleMenu);

  mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (menuButton.contains(target) || mobileMenu.contains(target)) return;
    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

// Smooth scroll is handled by CSS scroll-behavior in style.css

// Countdown timer
const targetTime = new Date(EVENT_DATETIME_ISO).getTime();
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
    const now = Date.now();
    let distance = Math.max(0, targetTime - now);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    distance -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(distance / (1000 * 60 * 60));
    distance -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(distance / (1000 * 60));
    distance -= minutes * (1000 * 60);
    const seconds = Math.floor(distance / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll reveal animations using IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-reveal-delay');
                    if (delay) {
                        entry.target.style.transitionDelay = `${parseInt(delay, 10)}ms`;
                    }
                    entry.target.classList.remove('opacity-0', 'translate-y-6');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            }
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    revealElements.forEach((el) => observer.observe(el));
} else {
    // Fallback: show immediately
    revealElements.forEach((el) => {
        el.classList.remove('opacity-0', 'translate-y-6');
        el.classList.add('opacity-100', 'translate-y-0');
    });
}

// Active nav link highlight on scroll (desktop nav)
const sectionIds = ['about', 'themes', 'schedule', 'prizes', 'faq', 'registration'];
const navLinks = Array.from(document.querySelectorAll('header nav a[href^="#"]'));

function updateActiveNav() {
    const scrollY = window.scrollY + 140; // offset for header
    let currentId = null;
    for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
            currentId = id;
            break;
        }
    }
    navLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        const isActive = currentId && href === `#${currentId}`;
        link.classList.toggle('text-sky-300', Boolean(isActive));
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('load', updateActiveNav);

// Back to top button
const toTop = document.getElementById('toTop');
if (toTop) {
    const toggleTopBtn = () => {
        if (window.scrollY > 400) toTop.classList.add('show');
        else toTop.classList.remove('show');
    };
    window.addEventListener('scroll', toggleTopBtn, { passive: true });
    window.addEventListener('load', toggleTopBtn);
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}