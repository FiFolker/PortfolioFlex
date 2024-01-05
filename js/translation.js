
const flags = document.querySelectorAll('.flag');

let langs = [];

onload = () => {
	flags.forEach(flag => {
		console.log('url(/PortfolioFlex/docs/assets/icon/lang/'+flag.classList[0]+'.png)');
		flag.style.backgroundImage = 'url(/PortfolioFlex/docs/assets/icon/lang/'+flag.classList[0]+'.png)';
		console.log(flag);
		langs.push(flag.classList[0]);
		if(flag.classList[flag.classList.length-1] != 'dropbtn') {
			flag.addEventListener('click', () => {
				translate(flag.classList[0], 'data-lang');
			});
		}
	});
	translate('fr', 'data-lang');
}

class Translate{ 
	//initialization
	constructor(attribute, lang){
		this.attribute = attribute;
		this.lng = lang;	
	}
	
	//translate 
	process(){
		let _self = this;
		//load content data 
		fetch("/PortfolioFlex/docs/assets/lang/"+this.lng+".json")
		.then(response => response.json())
		.then(data => {
			let allDom = document.getElementsByTagName("*");
			for(const element of allDom){
				let elem = element;
				let key = elem.getAttribute(_self.attribute);
				if(key != null) {
					elem.innerHTML = data[key]  ;
				}
			}
		})
	}
}

function translate(lang, tagAttr){
	let translate = new Translate(tagAttr, lang);
	translate.process();
	let currLang = document.querySelector('.languages .flag').classList[0];
	switchFlag(currLang, lang);
}


function switchFlag(currLang, nextLang){
	langs[langs.indexOf(nextLang)] = currLang;
	langs[langs.indexOf(currLang)] = nextLang;
	for (let i = 0; i < flags.length; i++) {
		flags[i].classList.replace(flags[i].classList[0], langs[i]);
		flags[i].style.backgroundImage = 'url(./PortfolioFlex/docs/assets/icon/lang/'+langs[i]+'.png)';
		
	}
}