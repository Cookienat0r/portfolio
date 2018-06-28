$(document).ready(function(){	
// SMOOTH PAGE SCROLL
	$('a[href*="#"]:not([href="#"])').click(function() {
  		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    			var target = $(this.hash);
    			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    		if (target.length) {
      			$('html, body').animate({
        			scrollTop: target.offset().top
      			}, 1000);
      			return false;
    		}
  		}
	});

// HAMBURGER MENU
	$("#menu").slicknav({
		label: '',
		duplicate: true,
		duration: true,
		prependTo:"body",
		apendTo: ''
	});
	console.log('something works');
});
