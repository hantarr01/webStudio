	$(document).ready(function(){
    $('.sidenav').sidenav();
  });

var ele = document.getElementById('menu-min');



if ($(window).width() < 700) {
	var element = document.getElementById('menu');
	element.remove();
	$(ele).css('display', 'block');
} else {
	console.log('false');
}