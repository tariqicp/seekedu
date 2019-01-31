$(window).load(function(){
	$("#site-preloader").hide();
	
})


$(document).ready(function($) {
 /*==========================*/	
/* Page Animation */	
/*==========================*/	

 if($(".animsition").length){
		   $(".animsition").animsition({
			    linkElement:'a:not([target="_blank"]):not([href^=#]):not([href^=tel]):not([href^=mailto])',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: false,
			});
	}
	
/*==========================*/	
/* Google Map */	
/*==========================*/
	if($('#map-canvas').length != 0){
		var map;
		function initialize() {
			var mapOptions = {
				zoom: 14,
				scrollwheel: false,
			 	center: new google.maps.LatLng(25.932884, 83.569633),
			 	styles: [
							{"stylers": [{ hue: "#43BFC7" },
							{ saturation: 0 },
							{ lightness: 0 }]},
    					{
					      "featureType": "road",
					      "elementType": "labels",
					      "stylers": [{"visibility": "off"}]
					    },
					    {
					      "featureType": "road",
					      "elementType": "geometry",
					      "stylers": [{"lightness": 100},
					            {"visibility": "simplified"}]
					    }
			 	]
			};
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			var image = 'include/images/map-marker.png';
			var myLatLng = new google.maps.LatLng(25.932884, 83.569633);
			var beachMarker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon: image
			 });
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	}





	
/*==========================*/	
/* Input field */	
/*==========================*/
		$('.form-control').each( function() {
			var $parentEl = $(this).parents('.form-group');
			if( $(this).val() !== '' ) {
				$.trim($(this).val());
				$parentEl.addClass('input-filled');
			}
			$(this).on('focus', function() {
				$parentEl.addClass('input-focused input-filled');
			});
			$(this).on('blur', function() {
				$parentEl.removeClass('input-focused');
				if( $.trim($(this).val()) === '' ) {
					$parentEl.removeClass('input-filled');
				}
			});
		});

	
	
/*==========================*/	
/* Masonry */	
/*==========================*/
$(function () {
	var self = $("#masonry");

	
  // init Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
	gutter: '.gutter-sizer',
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  

	$("ul.project-category li a").click(function(e) {
		e.preventDefault();
		$('ul.project-category li a').removeClass('active');
		$(this).addClass('active');
		var filter = $(this).attr("data-filter");

		self.masonryFilter({
			filter: function () {
				if (!filter) return true;
				return $(this).attr("data-filter") == filter;
			}
		});
	});
});
	
	



	
	
/*==========================*/	
/* Project Slider */	
/*==========================*/

$('#projectModal').on('shown.bs.modal', function () {
ModalSlider();
})


function ModalSlider() {
	$('.project-slider').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: true,
  pauseOnHover: false,
  autoplaySpeed: 4000
});
};




	
});



$(window).load(function() {
    $('.flexslider').flexslider({
		slideshow: true
		
	});
	
	
	 $('.flexslider2').flexslider({
		 animation: "slide",
		animationLoop: true,
		itemWidth: 210,
		itemMargin: 5,
		minItems: 2,
		maxItems: 5,
		directionNav: false,
		
	});
  });
  


    (function($){
        $(window).load(function(){
            $(".scroll-container").mCustomScrollbar({
				scrollButtons:{enable:true},
					theme:"3d-thick"
				
				});
        });
    })(jQuery);





