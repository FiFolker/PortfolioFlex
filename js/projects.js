import * as carousel from './carousel.js';

const carouselRetexImage = document.querySelector('.carousel-retex-image');

const path = carouselRetexImage.classList[1];

let size = carouselRetexImage.classList[2];

for(let i = 0; i < size; i++) {
    let img = document.createElement('img');
    img.src = `/ressources/retex/${path}/${i}.png`;
    img.alt = `retex ${i}`;
    img.width = 800;
    carouselRetexImage.appendChild(img);
}

let carouselList = [];


carouselList.push(new carousel.Carousel(carouselRetexImage));
