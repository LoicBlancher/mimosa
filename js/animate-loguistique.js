jQuery(function ($) {
 $(document).ready(function () {
      function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
        var mql = window.matchMedia(mediaQuery);
        mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
        layoutChangedCallback(mql.matches);
      }
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
        /*
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
       */

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


        (function animationPlantsLastSection(){
          let devisCtaLoguistique = document.getElementById("ms-cta-devis-loguistique");
          let contactCtaLoguistique = document.getElementById("ms-cta-contact-loguistique");
          devisCtaLoguistique.addEventListener("mouseover",function(){
            let img1 = document.getElementById("ms-image-header-nine-section-1");
            let img2 = document.getElementById("ms-image-header-nine-section-2");
            let img3 = document.getElementById("ms-image-header-nine-section-3");            
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
            TweenMax.to(img1,3,{bezier:{curviness:2,values:pathImg1}},"");
            TweenMax.to(img2,3,{bezier:{curviness:2,values:pathImg2}},"");
            TweenMax.to(img3,3,{bezier:{curviness:2,values:pathImg3}},"");  
          });  
        })();
       

      /*------------------------------------*\
          END Animations Loguistique Culinaire
      \*------------------------------------*/   

 }); 
});

