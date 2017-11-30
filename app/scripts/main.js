$(document).ready(function(){


// slider начало
$('.slider').slick({  
	slidesToShow: 1,
	vertical: true,
	arrows: true,
	dots: true,
	nextArrow: '<i class="fa fa-angle-down" aria-hidden="true"></i>',
	prevArrow: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
});



$('.links__links-js').slick({ 
	slidesToScroll: 2,
	slidesToShow: 3,
	vertical: false,
	arrows: true,
	dots: false,
	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
	prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	responsive: [
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
		}
	},
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
		}
	},
	]
});
// slider конец




// popup окна начало
$('.popup-content').magnificPopup({
	type: 'inline'
});
// popup окна конец





// mmenu начало
$('.header__menu-nav-js').clone().appendTo('.mmenu-nav');

var $menu = $('.mmenu-nav').mmenu({
	navbar: {
		title: '<img src=\'images/logo.png\' alt=\'\' />'
	},
	extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
	offCanvas: {
		'position': 'right'
	},
	counters: true
});

var $icon = $('.js-navtrigger');
var API = $menu.data('mmenu');

$icon.on('click', function () {
	API.open();
});

API.bind('open:start', function ($panel) {
	$('.js-navtrigger').toggleClass('-active');
});

API.bind('close:start', function ($panel) {
	$('.js-navtrigger').toggleClass('-active');
});

if (Modernizr.mq('(max-width: 1199px)')) {
	$('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
		API.close();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 115
				}, 1000);
				return false;
			}
		}
	});
}
// } else {
// 	$('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 			if (target.length) {
// 				$('html, body').animate({
// 					scrollTop: target.offset().top - 73
// 				}, 1000);
// 				return false;
// 			}
// 		}
// 	});
// }

// if (Modernizr.mq('(max-width: 767px)')) {
// 	var init = function init(data) {
// 		$('#map').html('');
// 		myMap = new ymaps.Map('map', {
// 			controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
// 			center: [55.755814, 37.617635],
// 			behaviors: ['drag'],
// 			zoom: 17
// 		});

// 		if (!data.type) {
// 			myPlacemark = new ymaps.Placemark([55.755814, 37.617635], {
// 				balloonContentHeader: 'KidsLab',
// 				balloonContentBody: 'Москва, ул. 2-я Мякининская, дом 9'
// 			}, {
// 				iconLayout: 'default#image',
// 				iconImageHref: 'images/marker.png',
// 				iconImageSize: [35, 55]
// 			});
// 			myMap.geoObjects.add(myPlacemark);
// 			return true;
// 		};
// 	};

// 	var myMap, myPlacemark;

// 	ymaps.ready(init);
// 	;
// } 
// mmenu конец
















});
