import * as carousel from './carousel.js';
const icons = document.querySelectorAll('.icons');

let carouselList = [];

icons.forEach(icon => {
    if(icon.children.length > 3) {
        carouselList.push(new carousel.Carousel(icon, {
            slideVisible: 3,
        }));
        
    }
});

carouselList.push(new carousel.Carousel(document.querySelector('.carousel-project'), {
    slideVisible:4
}));

const carouselProject = document.querySelectorAll('.carousel-project .col');

carouselProject.forEach(element => {
    Array.from(element.children).forEach(child => {
        child.style.backgroundImage = 'url(../ressources/preview/'+ child.classList[0]+'.png)';
        child.style.backgroundRepeat = 'no-repeat';
        child.style.backgroundSize = 'cover';
        child.style.backgroundPosition = 'center';
        child.style.filter = 'grayscale(100%)';
        
        let text = document.createElement('a');
        text.appendChild(document.createTextNode(child.classList[0].includes('-') ? child.classList[0].split('-').join(' ') : child.classList[0]));
        text.href = "projectPages/"+child.classList[0]+".html";
        
        child.appendChild(text);
    });
});