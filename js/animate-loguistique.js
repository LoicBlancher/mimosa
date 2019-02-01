jQuery(function ($) {
 $(document).ready(function () {
      function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
        var mql = window.matchMedia(mediaQuery);
        mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
        layoutChangedCallback(mql.matches);
      }


      /* Header transition Loguistique Atelier */
      (function transitionMenuDemo(){
        $(window).scroll(function() {
           var hT = $('#ms-atelier-second-section').offset().top,
               hH = $('#ms-atelier-second-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           let $header = $('header');
           let $button = $('header a.yellowBtn');
           if (wS > (hT+hH-wH)){
            $header.removeClass('ms-yellow-background-btns');
            $button.removeClass('hvr-ripple-out-wt');
            $header.addClass('ms-white-background-social-icons');
            $button.addClass('hvr-ripple-out');
           }
        }); 

        $(window).scroll(function() {
           var hT = $('#ms-atelier-six-section').offset().top,
               hH = $('#ms-atelier-six-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           let $header = $('header');
           let $button = $('header a.yellowBtn');
           if (wS > (hT+hH-wH)){
            $header.removeClass('ms-white-background-social-icons');
            $button.removeClass('hvr-ripple-out');
            $header.addClass('ms-yellow-background-btns');
            $button.addClass('hvr-ripple-out-wt');
           }
        }); 


        $(window).scroll(function() {
           var hT = $('#ms-atelier-seven-section').offset().top,
               hH = $('#ms-atelier-seven-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           let $header = $('header');
           let $button = $('header a.yellowBtn');
           if (wS > (hT+hH-wH)){
            $header.removeClass('ms-yellow-background-btns');
            $button.removeClass('hvr-ripple-out-wt');
            $header.addClass('ms-white-background-social-icons');
            $button.addClass('hvr-ripple-out');
           }
        }); 

        $(window).scroll(function() {
           var hT = $('#ms-atelier-gallery-section').offset().top,
               hH = $('#ms-atelier-gallery-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           let $header = $('header');
           let $button = $('header a.yellowBtn');
           if (wS > (hT+hH-wH)){
            $header.removeClass('ms-white-background-social-icons');
            $button.removeClass('hvr-ripple-out');
            $header.addClass('ms-yellow-background-btns');
            $button.addClass('hvr-ripple-out-wt');
           }
        }); 

        $(window).scroll(function() {
           var hT = $('#ms-atelier-nine-section').offset().top,
               hH = $('#ms-atelier-nine-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           let $header = $('header');
           let $button = $('header a.yellowBtn');
           if (wS > (hT+hH-wH)){
            $header.removeClass('ms-yellow-background-btns');
            $button.removeClass('hvr-ripple-out-wt');
            $header.addClass('ms-white-background-social-icons');
            $button.addClass('hvr-ripple-out');
           }
        }); 
      })();



      /*------------------------------------*\
        BEGIN Animations Loguistique Culinaire
      \*------------------------------------*/
        
        /* IF Scroll ID == ms-demo-fourth-section */
        $(window).scroll(function() {
           var hT = $('#ms-loguistique-third-section').offset().top,
               hH = $('#ms-loguistique-third-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           if (wS > (hT+hH-wH)){

              installMediaQueryWatcher("(min-width: 1800px)", function(matches) { 
                if (matches) {
                  (function animateCarSmoke(){
                    let car = document.getElementById("ms-camion-logistique");
                    let smokeCar = document.querySelector(".ms-container-smoke-car");
                    TweenMax.to(car, 3, {
                          x: -770,
                          ease: Power0.easeNone
                        });
                    TweenMax.to(smokeCar, 3, {
                          x: -930,
                          ease: Power0.easeNone
                        });
                  })();

                } else {
                 
                }
              }); 
           }
        });

        $(window).scroll(function() {
           var hT = $('#ms-loguistique-fourth-section').offset().top,
               hH = $('#ms-loguistique-fourth-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           if (wS > (hT+hH-wH)){

              installMediaQueryWatcher("(min-width: 1800px)", function(matches) { 
                if (matches) {
                  (function animate02Logistique(){
                    let el = document.getElementById("ms-logistique-ser2-tool1");
                    TweenMax.to(el, 1, {
                          x: 650,
                          ease: Sine.easeOut
                        });
                    let el1 = document.getElementById("ms-logistique-ser2-tool3");
                    TweenMax.to(el1, 3,{
                          delay:2,
                          x: 430,
                          rotation:360,
                          ease: Sine.easeOut
                        });
                    let el2 = document.getElementById("ms-logistique-ser2-tool4");
                    TweenMax.to(el2, 3, {
                          delay:2,
                          x: -190,
                          ease: Sine.easeOut
                        });
                    let el3 = document.getElementById("ms-logistique-ser2-tool5");
                    TweenMax.to(el3, 3, {
                          delay:2,
                          rotation: 0,
                          ease: Sine.easeOut
                        });
                    let el4 = document.getElementById("ms-logistique-ser2-tool2");
                    TweenMax.to(el4, 1, {
                          y:140,
                          rotation: 0,
                          ease: Sine.easeOut
                        });
                  })();   
                } else {
                 
                }
              }); 
           }
        });

        
        (function animate03Loguistique(){
          let image = document.getElementById("ms-services-logistique-3");
            let radiusImage = 10;
            TweenLite.set(image,{ 
              x: -radiusImage, 
              y: -radiusImage
            });
            TweenMax.to(image, 7, {
              y: radiusImage,
              ease: Sine.easeInOut,
              repeat: -1,
              yoyo: true
            });
            TweenMax.to(image, 6, {
              x: radiusImage,
              ease: Sine.easeInOut,
              repeat: -1,
              yoyo: true
            }).progress(0.5);
        })();

        (function animateAvocado(){
          let ctaControlez = document.getElementById("ms-cta-atelier-btn");
          ctaControlez.addEventListener("mouseover",function(){
            let light = document.getElementById("ms-avocado-demo");
            TweenLite.fromTo(light, 0.3, {
              x:-1}, {
                x:1, 
                ease:RoughEase.ease.config({
                  strength:8, 
                  points:20, 
                  template:Linear.easeNone, 
                  randomize:false}) , 
              clearProps:"x"})
          }); 
        })();
/*
        (function animateSevenSection(){
          let imageTopCta = document.getElementById("ms-img-header-left-seven-section");
          let radiusImageTop = 20;
          TweenLite.set(imageTopCta,{ 
            x: 0, 
            y: -radiusImageTop
          });
          TweenMax.to(imageTopCta, 7, {
            y: radiusImageTop,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
          });
          TweenMax.to(imageTopCta, 6, {
            x: radiusImageTop,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
          }).progress(0.5); 
        })();

*/
        (function animationPlantsLastSection(){
          $('#ms-cta-devis-loguistique').one('mouseover',function(){
            let img1 = document.getElementById("ms-image-header-nine-section-1");
            let img2 = document.getElementById("ms-image-header-nine-section-2");
            let img3 = document.getElementById("ms-image-header-nine-section-3");            
            let img4 = document.getElementById("ms-image-header-nine-section-4");  
            let img5 = document.getElementById("ms-image-header-nine-section-5");
            let img6 = document.getElementById("ms-image-header-nine-section-6");
            let img7 = document.getElementById("ms-image-header-nine-section-7");                                                                                        
            let img8 = document.getElementById("ms-image-header-nine-section-8");
            let img9 = document.getElementById("ms-image-header-nine-section-9");
            let img10 = document.getElementById("ms-image-header-nine-section-10");
            let img11 = document.getElementById("ms-image-header-nine-section-11");                                                                                                                                                                                                                                                                                                                                                                
            let img12 = document.getElementById("ms-image-header-nine-section-12");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            let pathImg1 = [{x:"200",y:"100"},
                {x:"100",y:"300"},
                {x:"-1170",y:"0"}
                ];
            let pathImg2 = [{x:"200",y:"100"},
                {x:"300",y:"500"},
                {x:"-1175",y:"-5"}
                ];
            let pathImg3 = [{x:"200",y:"100"},
                {x:"-200",y:"300"},
                {x:"-1245",y:"5"}
                ];
            let pathImg4 = [{x:"200",y:"100"},
                {x:"-100",y:"300"},
                {x:"-1375",y:"14"}
                ];
            let pathImg5 = [{x:"200",y:"100"},
                {x:"-100",y:"300"},
                {x:"-1295",y:"14"}
                ];
            let pathImg6 = [{x:"200",y:"100"},
                {x:"200",y:"600"},
                {x:"-1395",y:"14"}
                ];
            let pathImg7 = [{x:"200",y:"100"},
                {x:"100",y:"300"},
                {x:"-1495",y:"14"}
                ];
            let pathImg8 = [{x:"200",y:"100"},
                {x:"100",y:"300"},
                {x:"-1435",y:"14"}
                ];
            let pathImg9 = [{x:"200",y:"100"},
                {x:"-100",y:"300"},
                {x:"-1540",y:"14"}
                ];
            let pathImg10 = [{x:"300",y:"200"},
                {x:"-200",y:"400"},
                {x:"-1530",y:"14"}
                ];
            let pathImg11 = [{x:"300",y:"200"},
                {x:"-100",y:"400"},
                {x:"-1430",y:"14"}
                ];
            let pathImg12 = [{x:"300",y:"200"},
                {x:"-100",y:"400"},
                {x:"-1280",y:"14"}
                ];                                                      
            TweenMax.to(img1,3,{bezier:{curviness:4,values:pathImg1}},"");
            TweenMax.to(img2,3.2,{bezier:{curviness:4,values:pathImg2}},"");
            TweenMax.to(img3,3.5,{bezier:{curviness:3,values:pathImg3}},"");  
            TweenMax.to(img4,4,{bezier:{curviness:3,values:pathImg4}},"");
            TweenMax.to(img5,5,{bezier:{curviness:3,values:pathImg5}},"");    
            TweenMax.to(img6,5.5,{bezier:{curviness:3,values:pathImg6}},"");
            TweenMax.to(img7,5.8,{bezier:{curviness:5,values:pathImg7}},"");        
            TweenMax.to(img8,6,{bezier:{curviness:6,values:pathImg8}},""); 
            TweenMax.to(img9,6.5,{bezier:{curviness:6,values:pathImg9}},"");
            TweenMax.to(img10,7,{bezier:{curviness:5,values:pathImg10}},"");                
            TweenMax.to(img11,8,{bezier:{curviness:6,values:pathImg11}},"");
            TweenMax.to(img12,8.5,{bezier:{curviness:6,values:pathImg12}},"");                                      
          });
          $('#ms-cta-contact-loguistique').one('mouseover',function(){
            let img1 = document.getElementById("ms-image-header-nine-section-1");
            let img2 = document.getElementById("ms-image-header-nine-section-2");
            let img3 = document.getElementById("ms-image-header-nine-section-3");            
            let img4 = document.getElementById("ms-image-header-nine-section-4");  
            let img5 = document.getElementById("ms-image-header-nine-section-5");
            let img6 = document.getElementById("ms-image-header-nine-section-6");
            let img7 = document.getElementById("ms-image-header-nine-section-7");                                                                                        
            let img8 = document.getElementById("ms-image-header-nine-section-8");
            let img9 = document.getElementById("ms-image-header-nine-section-9");
            let img10 = document.getElementById("ms-image-header-nine-section-10");
            let img11 = document.getElementById("ms-image-header-nine-section-11");                                                                                                                                                                                                                                                                                                                                                                
            let img12 = document.getElementById("ms-image-header-nine-section-12");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            let pathImg1 = [{x:"200",y:"100"},
                {x:"100",y:"300"},
                {x:"-1170",y:"0"}
                ];
            let pathImg2 = [{x:"200",y:"100"},
                {x:"300",y:"500"},
                {x:"-1175",y:"-5"}
                ];
            let pathImg3 = [{x:"200",y:"100"},
                {x:"-200",y:"300"},
                {x:"-1245",y:"5"}
                ];
            let pathImg4 = [{x:"200",y:"100"},
                {x:"-100",y:"300"},
                {x:"-1375",y:"14"}
                ];
            let pathImg5 = [{x:"200",y:"100"},
                {x:"-100",y:"300"},
                {x:"-1295",y:"14"}
                ];
            let pathImg6 = [{x:"200",y:"100"},
                {x:"200",y:"600"},
                {x:"-1395",y:"14"}
                ];
            let pathImg7 = [{x:"200",y:"100"},
                {x:"100",y:"300"},
                {x:"-1495",y:"14"}
                ];
            let pathImg8 = [{x:"200",y:"100"},
                {x:"100",y:"300"},
                {x:"-1435",y:"14"}
                ];
            let pathImg9 = [{x:"200",y:"100"},
                {x:"-100",y:"300"},
                {x:"-1540",y:"14"}
                ];
            let pathImg10 = [{x:"300",y:"200"},
                {x:"-200",y:"400"},
                {x:"-1530",y:"14"}
                ];
            let pathImg11 = [{x:"300",y:"200"},
                {x:"-100",y:"400"},
                {x:"-1430",y:"14"}
                ];
            let pathImg12 = [{x:"300",y:"200"},
                {x:"-100",y:"400"},
                {x:"-1280",y:"14"}
                ];                                                      
            TweenMax.to(img1,3,{bezier:{curviness:4,values:pathImg1}},"");
            TweenMax.to(img2,3.2,{bezier:{curviness:4,values:pathImg2}},"");
            TweenMax.to(img3,3.5,{bezier:{curviness:3,values:pathImg3}},"");  
            TweenMax.to(img4,4,{bezier:{curviness:3,values:pathImg4}},"");
            TweenMax.to(img5,5,{bezier:{curviness:3,values:pathImg5}},"");    
            TweenMax.to(img6,5.5,{bezier:{curviness:3,values:pathImg6}},"");
            TweenMax.to(img7,5.8,{bezier:{curviness:5,values:pathImg7}},"");        
            TweenMax.to(img8,6,{bezier:{curviness:6,values:pathImg8}},""); 
            TweenMax.to(img9,6.5,{bezier:{curviness:6,values:pathImg9}},"");
            TweenMax.to(img10,7,{bezier:{curviness:5,values:pathImg10}},"");                
            TweenMax.to(img11,8,{bezier:{curviness:6,values:pathImg11}},"");
            TweenMax.to(img12,8.5,{bezier:{curviness:6,values:pathImg12}},"");                                      
          });   
        })();
       

      /*------------------------------------*\
          END Animations Loguistique Culinaire
      \*------------------------------------*/   

 }); 
});


