$(document).ready(function(){
  $('.promo__carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    });

  function toggleSlide(item){
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.services__item__content').eq(i).toggleClass('services__item__content_active');
        $('.services__item__list').eq(i).toggleClass('services__item__list_active');
      });
    });
  };

  toggleSlide('.button_mini-report');
  toggleSlide('.button_mini-back');

	let nav = $('nav');
  let scrolMenu = $('.header__menu');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
			nav.addClass("f-nav");
      scrolMenu.addClass('scrol-menu');
		} else {
			nav.removeClass("f-nav");
      scrolMenu.removeClass('scrol-menu');
		}
	});

  $('.clients__carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 1,
        }
      },
    ]
  });

});

