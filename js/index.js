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
	slideVisible:Math.floor((window.innerWidth-500)/document.querySelector('.carousel-project .col a').offsetWidth) == 0 ? 1 : Math.floor((window.innerWidth-500)/document.querySelector('.carousel-project .col a').offsetWidth),
}));

const carouselProject = document.querySelectorAll('.carousel-project .col');

carouselProject.forEach(element => {
	Array.from(element.children).forEach(child => {
		if(child.classList.length > 0) {
			child.href = "projectsPages/"+child.classList[0]+".html";
			
			let text = document.createElement('div');
			text.appendChild(document.createTextNode(child.classList[0].includes('-') ? child.classList[0].split('-').join(' ') : child.classList[0]));
			child.style.backgroundImage = 'url(/ressources/preview/'+ child.classList[0]+'.png)';
			child.style.backgroundRepeat = 'no-repeat';
			child.style.backgroundSize = 'cover';
			child.style.backgroundPosition = 'center';
			child.style.filter = 'grayscale(100%)';
			
			child.appendChild(text);
		}
	});
});