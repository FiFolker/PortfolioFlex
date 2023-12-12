
const flags = document.querySelectorAll('.flag');

let langs = [];

onload = () => {
	flags.forEach(flag => {
		console.log('url(/ressources/icon/lang/'+flag.classList[0]+'.png)');
		flag.style.backgroundImage = 'url(/ressources/icon/lang/'+flag.classList[0]+'.png)';
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
		let xrhFile = new XMLHttpRequest();
		//load content data 
		xrhFile.open("GET", "/ressources/lang/"+this.lng+".json", false);
		xrhFile.onreadystatechange = function ()
		{
			if(xrhFile.readyState === 4)
			{
				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
					let LngObject = JSON.parse(xrhFile.responseText);
					let allDom = document.getElementsByTagName("*");
					for(const element of allDom){
						let elem = element;
						let key = elem.getAttribute(_self.attribute);
						if(key != null) {
							elem.innerHTML = LngObject[key]  ;
						}
					}
				
				}
			}
		}
		xrhFile.send();
    }
}

function translate(lang, tagAttr){
    let translate = new Translate(tagAttr, lang);
    translate.process();
    let currLang = document.querySelector('.languages .flag').classList[0];
	switchFlag(currLang, lang);
	console.log("translation ...");
}


function switchFlag(currLang, nextLang){
	langs[langs.indexOf(nextLang)] = currLang;
	langs[langs.indexOf(currLang)] = nextLang;
	for (let i = 0; i < flags.length; i++) {
		flags[i].classList.replace(flags[i].classList[0], langs[i]);
		flags[i].style.backgroundImage = 'url(./ressources/icon/lang/'+langs[i]+'.png)';
		
	}
}