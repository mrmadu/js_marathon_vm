"use strict";


const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearAllActiveClasses();
        slide.classList.add('active');
    });
}

function clearAllActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}