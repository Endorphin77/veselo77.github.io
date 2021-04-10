$(document).ready(function(){
    $('.corusel__wrapper').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slick-prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slick-next.png" alt="next"></button>',
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                arrows: false,
                adaptiveHeight: false,
                dots: true,
                
              }
            }]
    });
  });

  $(document).ready(function(){
    $('.corusel__wrapper-products').slick({
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-caret-left-fill"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-caret-right-fill"></i></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 2,
                
                
              }
            }]
    });
  });

  $(document).scroll(function(){
    if ($(window).scrollTop() > 80){
      $('.header__top-nav').addClass('active');
    }
    else{
      $('.header__top-nav').removeClass('active');
    }
  });