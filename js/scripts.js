(function ($, root, undefined) {
    
    $(function () {
        
        'use strict';   
    });
    
})(jQuery, this);

jQuery(function ($) {
 $(document).ready(function () {

    /* Main Menú */
    (function addHoverForMainMenuItems(){
      $("#mg-wrapper-main-menu #mg-main-menu-content ul li a").addClass("hvr-underline-from-left");
    })();

     $("#mg-main-menu-btn a").click(function () {
        $('#mg-external-wrapper-main-menu').fadeToggle(200); 
        let mainMenu = document.getElementById("mg-wrapper-main-menu");
        mainMenu.style.display = "block";
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
     });   


     $('.menu-link').bigSlide({
       'side': 'left',
       'speed': '550',
       'easyClose' :true 
     });


     /* Animate PopUp menu logo */
     let animationLogoMainPopup = $(() =>{
        $('#mg-main-menu-btn').on("click",function(){
          let animationLogo = new TimelineMax();
          /*animationLogo.staggerFrom(".st0", 3, {drawSVG:0,repeat:-1}, 0.1);*/
          animationLogo.fromTo(".st0", 4, {drawSVG:"0% 0%",fill:"none",opacity:0.1}, {drawSVG:"true", ease:Linear.easeNone,fill:"white",opacity:1});
          animationLogo.repeat(0);
        });
     });


     
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
        /*slidesToScroll: 1,*/
        autoplay: false,
        autoplaySpeed: 200,
        infinite:true,
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
        infinite:true,
        autoplay:true,
        autoplaySpeed:5000  
      });


      $('#ms-slider-team-members').slick({
        autoplay:true,
        autoplaySpeed:4000,
        slidesToShow:3,
        slidesToScroll:1,
        centerPadding:'0',
        centerMode:true,
        infinite:true,
        responsive: [
              {
                  breakpoint: 1400,
                  settings: {
                      autoplay:true,
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


      $('#ms-scroll-tab').hover(function(){
        $('#ms-scroll-ingredients').slick('slickPlay');
      },function(){
        $('#ms-scroll-ingredients').slick('slickPause');
      });
      


/*      
      window.onload = function() {
        if (window.location.href.indexOf('qui-sommes-nous') > -1) {
          eyelashContent();
          paginate_carousel();
        }
      }
*/
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


      /*
      window.onscroll = function hasClass(ele,cls) {
      return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
      if(hasClass(document.querySelector("body"), "viewing-page-3")){
        console.log("Ok");
      };
     }
    */

    /* Add hover effect for items Last Section One Page Footer */
    (function addHoverForLastSectionMenuItems(){
      $("#ms-last-section-home-menu ul li a").addClass("hvr-underline-from-left-last-section");
    })();

      /* Politiques and terms 
      (function politiques_terms_scroll(){
        $header = $('header');
        $button.removeClass('hvr-ripple-out-wt');
        $button.addClass('hvr-ripple-out');
        $header.removeClass('ms-yellow-background-btns');
        $(window).scroll(function(){
          $button.addClass('hvr-ripple-out-wt');
          $button.removeClass('hvr-ripple-out');
          $header.addClass('ms-yellow-background-btns').fadeIn("slow");
        });
      })();
      */
    
    /* Return to top Pages */
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {
            $('#ms-return-to-top').fadeIn(200); 
        } else {
            $('#ms-return-to-top').fadeOut(200); 
        }
    });
    $('#ms-return-to-top').click(function() { 
        $('body,html').animate({
            scrollTop : 0 
        }, 500);
    });  


 }); 
});
