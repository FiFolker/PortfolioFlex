function dropdown(id) {
	document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		let dropdowns = document.querySelectorAll(".dropdown-content");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
				console.log("hide");
			}
		}
	}
    if (event.target.matches('.search-btn') && !event.target.matches('#filter-items *')) {
		let dropdowns = document.querySelectorAll(".dropdown-search-content");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
				console.log("hide");
			}
		}
	}
}

function filterFunction(id) {
    let input, filter, item, i;
    input = document.getElementById(id);
    filter = input.value.toUpperCase();
    let div = document.getElementById("filter-items");
    item = div.querySelectorAll("div");
    for (i = 0; i < item.length; i++) {
      let txtValue = item[i].querySelector("label").textContent || item[i].querySelector("label").innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
    }
} 

function check(currElem){
    if(event.target != currElem.children[1]){
        currElem.children[1].checked = !currElem.children[1].checked; 

    }
}