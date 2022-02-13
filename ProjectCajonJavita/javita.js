function cosita() {
	
	let cambiap = document.getElementsByTagName("p");
	for( i=0; i<cambiap.length; i++){
		
		cambiap[i].textContent="rojo";
		cambiap[i].style.color="red";
	}
	
	let cambiad = document.getElementsByTagName("div");
	for( i=0; i<cambiad.length ; i++){
		
		cambiad[i].textContent="verde";
		cambiad[i].style.color="green";
	}
}