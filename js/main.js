'use strict';

const images = [
    '01.webp', 
    '02.webp',
    '03.webp', 
    '04.webp', 
    '05.webp'
];
const carousel = document.querySelector('.carousel');
let imagesContent = '';
let active = 0;

for (let i = 0; i < images.length; i++) {
    imagesContent += `<div class="image"><img src="img/${images[i]}" alt=""></div>`;
};

carousel.innerHTML += imagesContent;
document.querySelector('.image').classList.add('show');

const up = document.querySelector('.up');
const down = document.querySelector('.down');
const image = document.querySelectorAll('.image');

up.addEventListener('click', function() {
    image[active].classList.remove('show');
    if (active > 0) {
        active--;
    } else if (active === 0) {
        active = images.length - 1;
    }
    image[active].classList.add('show');
});

down.addEventListener('click', function() {
    image[active].classList.remove('show');
    if (active < images.length - 1) {
        active++;
    } else if (active === image.length - 1) {
        active = 0;
    }
    image[active].classList.add('show');
});