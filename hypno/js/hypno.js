function appStart() {
  var button = document.getElementById('button');
  var spiral = document.getElementById('spiral');
  var sound = document.getElementById('sound');
  
  sound.play();
  sound.loop = true;
	button.style.display = 'none';
	spiral.className = spiral.className + ' rotate';
}

function showContent() {
  var button = document.getElementById('button');
  var spiral = document.getElementById('spiral');
  
  button.addEventListener('click', appStart);
	spiral.style.display = 'block';
	button.style.display = 'block';
}

