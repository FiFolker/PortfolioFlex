import * as carousel from './carousel.js';

const carouselRetexImage = document.querySelector('.carousel-retex-image');

const path = carouselRetexImage.classList[1];

let size = carouselRetexImage.classList[2];

let smallWidth = 0;
let smallHeight = 0;

function GCF(a, b) {
    return (b == 0) ? a : GCF(b, a%b);
}

function aspectRatio(a, b) {
    let gcf = GCF(a, b);
    return [a/gcf, b/gcf];
}

function isLikeSquare(width, height) {
    return width >= height - 35 && width <= height + 35;
}


for(let i = 0; i < size; i++) {
    let img = document.createElement('img');
    img.src = `/PortfolioFlex/ressources/retex/${path}/${i}.png`;
    img.onload = function() {
        if(this.width < smallWidth || smallWidth == 0) {
            smallWidth = this.width;
        }        
    }
    
}

for(let i = 0; i < size; i++) {
    let img = document.createElement('img');
    img.src = `/ressources/retex/${path}/${i}.png`;
    img.alt = `retex ${i}`;
    img.onload = function() {
        let aspectRatioCalc = aspectRatio(this.width, this.height);
        isLikeSquare(aspectRatioCalc[0], aspectRatioCalc[1]);
        if(isLikeSquare(aspectRatioCalc[0], aspectRatioCalc[1])) {
            img.width = this.width > 800 || this.width == 0 ? 800 : smallWidth;
        }else{
            img.width = 800;

        }
    }
    carouselRetexImage.appendChild(img);
}


let carouselList = [];


carouselList.push(new carousel.Carousel(carouselRetexImage));
