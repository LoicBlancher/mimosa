jQuery(function ($) {
 $(document).ready(function () {

     $("#mg-main-menu-btn a").click(function () {
         $('#mg-external-wrapper-main-menu').fadeToggle(200); 
         $("#mg-wrapper-main-menu").fadeToggle(200);
     });

     $('#mg-wrapper-main-menu').on('click', function () {
         $("#mg-wrapper-main-menu").fadeToggle(200);
         $('#mg-external-wrapper-main-menu').fadeToggle(200);
     });

     $('.mg-menu a').on('click', function () {
         $("#mg-wrapper-main-menu").fadeToggle(200);
         $('#mg-external-wrapper-main-menu').fadeToggle(200);
     });

     $('#ms-slider-clients').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
 }); 
});

