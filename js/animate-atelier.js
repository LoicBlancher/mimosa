jQuery(function ($) {
 $(document).ready(function () {
      function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
        var mql = window.matchMedia(mediaQuery);
        mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
        layoutChangedCallback(mql.matches);
      }
      /*------------------------------------*\
          BEGIN Animations Demo Culinaire
      \*------------------------------------*/
        
        /* IF Scroll ID == ms-demo-fourth-section */
        $(window).scroll(function() {
           var hT = $('#ms-atelier-third-section').offset().top,
               hH = $('#ms-atelier-third-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           if (wS > (hT+hH-wH)){
              
              installMediaQueryWatcher("(min-width: 1800px)", function(matches) { 
                if (matches) {
                   let el1 = document.getElementById("ms-elementAt1-ser1");
                   TweenMax.to(el1, 3, {
                         x: 630,
                         rotation:360,
                         ease: Back.easeOut.config(0.2)
                       });
                   let el2 = document.getElementById("ms-elementAt7-ser1");
                   TweenMax.to(el2, 6, {
                         x: 430,
                         rotation:360,
                         ease: Back.easeOut.config(0.2),
                         onComplete:animateSidesStar()
                       });
                       function animateSidesStar(){
                        let el3 = document.getElementById("ms-elementAt6-ser1");
                        let el4 = document.getElementById("ms-elementAt8-ser1");
                        TweenMax.to(el3, 6, {
                              y: -150,
                              ease: SteppedEase.config(9)
                            });
                        TweenMax.to(el4, 4, {
                              y: -150,
                              ease: SteppedEase.config(9)
                            });
                       };
                    let el5 = document.getElementById("ms-elementAt5-ser1");
                    TweenMax.to(el5, 0.8, {
                          x: -370,
                          ease: SteppedEase.config(9)
                        });
                    let el6 = document.getElementById("ms-elementAt9-ser1");  
                    TweenMax.to(el6, 6, {
                          x: -550,
                          ease:Bounce.easeOut
                        });
                    let el7 = document.getElementById("ms-atelier-pot1");  
                    TweenMax.to(el7, 6, {
                          x: -710,
                          ease: SteppedEase.config(9)
                        });          
                } else {
                    
                }
              }); 
           }
        });
        

      /*------------------------------------*\
          End Animations Demo Culinaire
      \*------------------------------------*/   

 }); 
});


