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
        
       
        
       

      /*------------------------------------*\
          END Animations Loguistique Culinaire
      \*------------------------------------*/   

 }); 
});


