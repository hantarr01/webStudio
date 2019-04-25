
	$(document).ready(function(){
    $('.sidenav').sidenav();
  });

// var ele = document.getElementById('menu-min');



// if ($(window).width() < 700) {
// 	var element = document.getElementById('menu');
// 	element.remove();
// 	$(ele).css('display', 'block');
// } else {
// 	console.log('false');
// }

var slideEl = $(".slide--parent");

slideEl.flickity({
	imagesLoaded: true,
	wrapAround: true,
	autoPlay: 8000,
	prevNextButtons:false,
});

