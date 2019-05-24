var slideEl = $(".slide--parent");

slideEl.flickity({
	imagesLoaded: false,
	wrapAround: true,
	autoPlay: 2500,
	prevNextButtons:false,
});

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
