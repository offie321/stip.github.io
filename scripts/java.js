
/* Preloader */
	$(window).load(function() {
	     $('#preloader').delay(1000).slideUp('slow');
	});

	$('a').click(function(e){
	     e.preventDefault();
	     t = $(this).attr('href');
	     $('#preloader').delay(1050).fadeIn('slow',function(){
	          window.location.href = t;
	     });
	});

/* Animation On Scroll */
	$(function() {
	  AOS.init();
	});

	$(window).on('load', function() {
	  AOS.refresh();
	});


	function showMenu(){
		document.getElementById("overlay-nav").style.display = "block";
		}

			function hideMenu(){
		document.getElementById("overlay-nav").style.display = "none";
		}
