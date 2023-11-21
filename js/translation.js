function dropdown() {
	document.getElementById("language").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn img')) {
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
}