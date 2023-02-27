'use strict';

const images = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

let imagesContent = '';
let active = 0;

const carousel = document.querySelector('.carousel');

for (let i = 0; i < images.length; i++) {
    console.log(images[i]);
    imagesContent += `<div class="image"><img src="img/${images[i]}" alt=""></div>`;
};

carousel.innerHTML += imagesContent;
document.querySelector('.image').classList.add('show');
