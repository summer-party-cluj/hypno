function appStart(){
	var spiral = document.getElementById("spiral");
	
	document.getElementById("button").style.display = "none";
	
	//var cName = spiral.style.className;
	//document.write(cName.style);
	spiral.className = spiral.className + " rotate";
}

function showContent(){
	document.getElementById("spiral").style.display = "block";
	document.getElementById("button").style.display = "block";
}

function spiralHide(){
	
	document.getElementById("spiral").style.visibility="hidden";
	
}


function spiralShow(){
	
	document.getElementById("spiral").style.visibility="visible";
	
}
