function flip(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
function show(id) {
	var e = document.getElementById(id);
	e.style.display = 'block';
}
function hide(id) {
	var e = document.getElementById(id);
	e.style.display = 'none';
}