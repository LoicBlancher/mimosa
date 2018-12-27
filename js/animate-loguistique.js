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


