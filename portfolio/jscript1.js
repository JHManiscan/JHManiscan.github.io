// Photo Carousel Auto-Slide
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dots .dot");
let currentSlide = 0;
function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}
// Automatically change slide every 4 seconds
setInterval(nextSlide, 4000)
// ================= SCROLL REVEAL (SHOW ONLY WHILE IN VIEW) =================
const revealElements = document.querySelectorAll("section, .education-card, .experience-card");


const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Shows and pops up when entering this section
            entry.target.classList.add("active");
        } else {
            // Hides when scrolling out of this section
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.15, // Triggers when 15% is visible
    rootMargin: "-40px 0px -40px 0px"
});

// Automatically apply reveal to sections & cards
revealElements.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});
// ================= U-BIX CAROUSEL =================
const ubixSlides = document.querySelectorAll(".ubix-slide");
const ubixDots = document.querySelectorAll(".ubix-dot");
let curUbix = 0;

function showUbix(index) {
    ubixSlides.forEach((s, i) => s.classList.toggle("active", i === index));
    ubixDots.forEach((d, i) => d.classList.toggle("active", i === index));
}

function nextUbix() {
    if (ubixSlides.length === 0) return;
    curUbix = (curUbix + 1) % ubixSlides.length;
    showUbix(curUbix);
}

function goToUbix(index) {
    curUbix = index;
    showUbix(curUbix);
}

if (ubixSlides.length > 0) setInterval(nextUbix, 4000);

// ================= REDQUINIX CAROUSEL =================
const redSlides = document.querySelectorAll(".red-slide");
const redDots = document.querySelectorAll(".red-dot");
let curRed = 0;

function showRed(index) {
    redSlides.forEach((s, i) => s.classList.toggle("active", i === index));
    redDots.forEach((d, i) => d.classList.toggle("active", i === index));
}

function nextRed() {
    if (redSlides.length === 0) return;
    curRed = (curRed + 1) % redSlides.length;
    showRed(curRed);
}

function goToRed(index) {
    curRed = index;
    showRed(curRed);
}

if (redSlides.length > 0) setInterval(nextRed, 4500);
// ================= TYPEWRITER EFFECT =================
const words = [
    "Computer Engineer",
    "Field Service Engineer",
    "Aspiring Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Typing speed: slower when typing, faster when deleting
    let typeSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentWord.length) {
        // Pauses when the full title is typed
        typeSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Moves to the next title
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400; // Small delay before typing the next word
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typewriter animation
typeEffect();
// ================= PROJECT CAROUSEL =================
const projSlides = document.querySelectorAll(".proj-slide");
const projDots = document.querySelectorAll(".proj-dot");
let curProj = 0;

function showProj(index) {
    projSlides.forEach((s, i) => s.classList.toggle("active", i === index));
    projDots.forEach((d, i) => d.classList.toggle("active", i === index));
}

function nextProj() {
    if (projSlides.length === 0) return;
    curProj = (curProj + 1) % projSlides.length;
    showProj(curProj);
}

function goToProj(index) {
    curProj = index;
    showProj(curProj);
}

if (projSlides.length > 0) setInterval(nextProj, 4000);

// ================= MOBILE NAVIGATION DRAWER =================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinksList = document.querySelectorAll(".nav-link");

if (navToggle && navMenu) {
    // Toggle menu open/close on button click
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navMenu.classList.toggle("open");
    });

    // Close menu when a navigation link is clicked
    navLinksList.forEach(link => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("active");
            navMenu.classList.remove("open");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove("active");
            navMenu.classList.remove("open");
        }
    });
}
