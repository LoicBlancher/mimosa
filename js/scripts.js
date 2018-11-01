(function ($, root, undefined) {
    
    $(function () {
        
        'use strict';   
    });
    
})(jQuery, this);

jQuery(function ($) {
 $(document).ready(function () {

    /* Main Menú */
     $("#mg-main-menu-btn a").click(function () {
         $('#mg-external-wrapper-main-menu').fadeToggle(200); 
         $("#mg-wrapper-main-menu").fadeToggle(200);
     });


     $("#mg-close-menu").click(function () {
         $('#mg-external-wrapper-main-menu').fadeToggle(200); 
         $("#mg-wrapper-main-menu").fadeToggle(200);
     });

     $('#mg-external-wrapper-main-menu').click(function(){
        $(this).fadeToggle(200);
     }); 
    
     $('#mg-wrapper-main-menu').click(function(e){
      e.stopPropagation();
     })   


     $('.menu-link').bigSlide();
     
      $('#ms-slider-clients').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
              {
                  breakpoint: 1400,
                  settings: {
                      slidesToShow: 3,
                      centerPadding: '400px'
                  }
              },
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 3,
                      centerPadding: '300px'
                  }
              },
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 3,
                      centerPadding: '180px'
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      centerPadding: '80px'
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      centerPadding: '25px'
                  }
              },
              {
                  breakpoint: 360,
                  settings: {
                      slidesToShow: 1,
                      centerPadding: '15px'
                  }
              }
          ]
      });

      $('#ms-scroll-ingredients').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 200,
        infinite:false,
        arrows:false,
        responsive: [
              {
                  breakpoint: 1400,
                  settings: {
                      slidesToShow: 3,
                      centerPadding: '400px'
                  }
              },
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 3,
                      centerPadding: '300px'
                  }
              },
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 3,
                      centerPadding: '180px'
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      centerPadding: '80px'
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      centerPadding: '25px'
                  }
              },
              {
                  breakpoint: 360,
                  settings: {
                      slidesToShow: 1,
                      centerPadding: '15px'
                  }
              }
          ]
      });

      $('#ms-slider-testimonials').slick({
        autoplay:true,
        autoplaySpeed:3000
      });


      $('#ms-slider-team-members').slick({
        autoplay:true,
        autoplaySpeed:4000,
        slidesToShow:3,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:'0',
        infinite:true,
        responsive: [
              {
                  breakpoint: 1400,
                  settings: {
                      slidesToShow: 3,
                      centerPadding: '400px'
                  }
              },
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 3,
                      centerPadding: '100px'
                  }
              },
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 1
                  }
              },
              {
                  breakpoint: 736,
                  settings: {
                      slidesToShow: 1
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1
                  }
              },
              {
                  breakpoint: 360,
                  settings: {
                      slidesToShow: 1
                  }
              },
              {
                  breakpoint: 320,
                  settings: {
                      slidesToShow: 1
                  }
              }
          ]
      });


       $("#ms-slider-team-members").on('afterChange',function(){
          var currentImg = $(".slick-current").attr("rel");
          var currentInfo = "#info_" + currentImg;
          $(".ms-wrapper-info.act").fadeOut(500);
          $(currentInfo).fadeIn(500);
          $(currentInfo).addClass("act");
       }) 


      $('#ms-scroll-tab,#pgc-30-4-1').hover(function(){
        $('#ms-scroll-ingredients').slick('slickPlay');
      },function(){
        $('#ms-scroll-ingredients').slick('slickPause');
      });
      
      /* Ms - Carousel Image Qui Sommes */
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

      };

      /* Ms - Eyelashes Qui Sommes  */
      function eyelashContent(){
        let btnEyelash1 = document.getElementById('first-eyelash');
        let btnEyelash2 = document.getElementById('second-eyelash');
        let btnEyelash3 = document.getElementById('third-eyelash');
        let content1 = document.getElementById('ms-eyelash-first-qui-sommes');
        let content2 = document.getElementById('ms-eyelash-second-qui-sommes');
        let content3 = document.getElementById('ms-eyelash-third-qui-sommes');    
        btnEyelash1.addEventListener("click",function(){
            content1.style.display = "block";
            content2.style.display = "none";
            content3.style.display = "none";
        });
        btnEyelash2.addEventListener("click",function(){
            content1.style.display = "none";
            content2.style.display = "block";
            content3.style.display = "none";
        });
        btnEyelash3.addEventListener("click",function(){
            content1.style.display = "none";
            content2.style.display = "none";
            content3.style.display = "block";
        });
      }

      
      window.onload = function() {
        if (window.location.href.indexOf('qui-sommes-nous') > -1) {
          eyelashContent();
          paginate_carousel();
        }
      }

      /* Ms Galerie */
      $('.ms-lightbox-trigger').click(function(e){
        e.preventDefault();
        let imageHref = $(this).attr("href");
        if($('#ms-galerie-lightbox').length > 0){
          $('#ms-content-lightbox').html('<img src="' + imageHref + '" />')
          $('#ms-galerie-lightbox').show();          
        }else{
         let msLightbox = 
         '<div id="ms-galerie-lightbox">' +
            '<div id="ms-content-lightbox">' + 
                '<img src="' + imageHref +'" />' +
            '</div>' +  
          '</div>';
          $('body').append(msLightbox).fadeIn(1000);
        }
      });

      $('#ms-galerie-lightbox').live('click',function(){
        $(this).hide();
      });

      /* MS - Animations general */
      
 }); 
});