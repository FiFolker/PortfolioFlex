export class Carousel{

	

	constructor(elem, options = {}){
		this.elem = elem;
		this.currentSlide = 0;
		this.nItems = Array.from(this.elem.children).length;
		this.options = { 
			slideToScroll: 1,
			slideVisible: 1,
			...options};

	   this.init()

	}

	init(){
		for (const child of Array.from(this.elem.children).slice(this.options.slideVisible)) {
			child.style.display = 'none';
		}

		let arrowRight = this.createArrow('>', () => this.right());
		this.elem.appendChild(arrowRight);


		let arrowLeft = this.createArrow('<', () => this.left());
		this.elem.prepend(arrowLeft);
		let arr = Array.from(this.elem.children);
		console.log(arr);
		let leftArrow = arr[0];
		let rightArrow = arr[arr.length-1];
		leftArrow.style.height = arr[this.currentSlide+1].clientWidth/2+"px";

		rightArrow.style.height = arr[this.currentSlide + this.options.slideVisible].clientWidth/2+"px";
	}


	left(){
		if(this.currentSlide <= 0){
			this.currentSlide = this.nItems - this.options.slideVisible; // ou slideToScroll dépend de ce qu'on veut
		}else{
			this.currentSlide -= this.options.slideToScroll;
		}
		this.display();
	}

	right(){
		if(this.currentSlide + 1 + this.options.slideVisible > this.nItems){ // this.nItems-1 
			this.currentSlide = 0; // ou slideToScroll dépend de ce qu'on veut
		}else{
			this.currentSlide += this.options.slideToScroll;
		}
		this.display();
	}


	display(){
		let arr = Array.from(this.elem.children);
		let leftArrow = arr[0];
		let rightArrow = arr[arr.length-1];

		for (let i = 1; i < arr.length-1; i++) {
			if(i >= this.currentSlide+1 && i < this.currentSlide+1 + this.options.slideVisible){
				arr[i].style.display = 'block';
			}else{
				arr[i].style.display = 'none';
			}
			
		}
		leftArrow.style.height = arr[this.currentSlide+1].clientHeight+"px";
		rightArrow.style.height = arr[this.currentSlide + this.options.slideVisible].clientHeight+"px";
		
	}


 
	createArrow(direction, action){
		let arrow = document.createElement('button');
		arrow.appendChild(document.createTextNode(direction));
		arrow.classList.add('arrow');
		arrow.addEventListener('click', action);
		return arrow;
	}

}