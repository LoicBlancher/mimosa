(function ($, root, undefined) {
    
    $(function () {
        
        'use strict';   
    });
    
})(jQuery, this);

jQuery(function ($) {
 $(document).ready(function () {
     /* Ms - Main Menu */   
     $("#mg-main-menu-btn a").click(function () {
         $('#mg-external-wrapper-main-menu').fadeToggle(200); 
         $("#mg-wrapper-main-menu").fadeToggle(200);
     });

     $("#mg-close-menu").click(function () {
         $('#mg-external-wrapper-main-menu').fadeToggle(200); 
         $("#mg-wrapper-main-menu").fadeToggle(200);
     });

     $('.mg-menu a').on('click', function () {
         $("#mg-wrapper-main-menu").fadeToggle(200);
         $('#mg-external-wrapper-main-menu').fadeToggle(200);
     });

     $('.menu-link').bigSlide();

     $(".main").onepage_scroll({
        sectionContainer: ".section-scroll",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                         // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                         // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
     });  

      /* MS - Carousel clients logo */  
      $('#ms-slider-clients').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });  
     }); 

     /* MS - Img carousel with pagination */
    function paginate_carousel(){
       let button1 = document.getElementById('ms-imgc-1');
       let button2 = document.getElementById('ms-imgc-2');
       let button3 = document.getElementById('ms-imgc-3');
       let image1 = document.getElementById('ms-content-img1');
       let image2 = document.getElementById('ms-content-img2');
       let image3 = document.getElementById('ms-content-img3');
       button1.addEventListener("click",function(){
           image1.style.display = "block";
           image2.style.display = "none";
           image3.style.display = "none"; 
       });
       button2.addEventListener("click",function(){
           image2.style.display = "block";
           image1.style.display = "none";
           image3.style.display = "none"; 
       });
       button3.addEventListener("click",function(){
           image3.style.display = "block";
           image1.style.display = "none";
           image2.style.display = "none";  
       });
    }
    paginate_carousel();
});