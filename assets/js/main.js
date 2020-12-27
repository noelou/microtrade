
window.onload = function () {
	let overlay = document.getElementById("backgroundOverlay");
	let popup = document.getElementById("menu-dp");
	let openButton = document.getElementById("menu-icon");

	document.onclick = function(e) {
		
		if (e.target.id == 'backgroundOverlay') {	
			popup.style.display = "none";
			overlay.style.display = "none";
		} else {
			popup.style.display = "none";
			overlay.style.display = "none";
		}
		if (e.target.id === "menu-icon" ) {
			console.log('test');
			popup.style.display = "block";
			overlay.style.display = "block";
		}
	}
}

