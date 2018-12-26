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
                         xPercent: 470,
                         rotation:360,
                         ease: Back.easeOut.config(0.2)
                       });
                   let el2 = document.getElementById("ms-elementAt7-ser1");
                   TweenMax.to(el2, 6, {
                         xPercent: 300,
                         rotation:350,
                         ease: Back.easeOut.config(0.2),
                         onComplete:animateSidesStar()
                       });
                       function animateSidesStar(){
                        let el3 = document.getElementById("ms-elementAt6-ser1");
                        let el4 = document.getElementById("ms-elementAt8-ser1");
                        TweenMax.to(el3, 6, {
                              yPercent: -90,
                              ease: SteppedEase.config(9)
                            });
                        TweenMax.to(el4, 4, {
                              yPercent: -100,
                              ease: SteppedEase.config(9)
                            });
                       };
                    let el5 = document.getElementById("ms-elementAt5-ser1");
                    TweenMax.to(el5, 0.8, {
                          xPercent: -310,
                          ease: SteppedEase.config(9)
                        });
                    let el6 = document.getElementById("ms-elementAt9-ser1");  
                    TweenMax.to(el6, 6, {
                          xPercent: -470,
                          ease:Bounce.easeOut
                        });
                    let el7 = document.getElementById("ms-atelier-pot1");  
                    TweenMax.to(el7, 6, {
                          xPercent: -145,
                          ease: SteppedEase.config(9)
                        });          
                } else {
                  let el1 = document.getElementById("ms-elementAt1-ser1");
                  TweenMax.to(el1, 3, {
                        xPercent: 260,
                        rotation:360,
                        ease: Back.easeOut.config(0.2)
                      });
                  let el2 = document.getElementById("ms-elementAt7-ser1");
                  TweenMax.to(el2, 6, {
                        xPercent: 210,
                        rotation:350,
                        scale:0.8,
                        ease: Back.easeOut.config(0.2),
                        onComplete:animateSidesStar()
                      });
                      function animateSidesStar(){
                       let el3 = document.getElementById("ms-elementAt6-ser1");
                       let el4 = document.getElementById("ms-elementAt8-ser1");
                       TweenMax.to(el3, 6, {
                             yPercent: -80,
                             ease: SteppedEase.config(9)
                           });
                       TweenMax.to(el4, 4, {
                             yPercent: -90,
                             ease: SteppedEase.config(9)
                           });
                      };
                   let el5 = document.getElementById("ms-elementAt5-ser1");
                   TweenMax.to(el5, 0.8, {
                         xPercent: -180,
                         ease: SteppedEase.config(9)
                       });
                   let el6 = document.getElementById("ms-elementAt9-ser1");  
                   TweenMax.to(el6, 6, {
                         xPercent: -290,
                         ease:Bounce.easeOut
                       });
                   let el7 = document.getElementById("ms-atelier-pot1");  
                   TweenMax.to(el7, 6, {
                         xPercent: -75,
                         ease: SteppedEase.config(9)
                       });          
                }
              }); 
           }
        });
        
        
        $(window).scroll(function() {
           var hT = $('#ms-atelier-fourth-section').offset().top,
               hH = $('#ms-atelier-fourth-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           if (wS > (hT+hH-wH)){

              installMediaQueryWatcher("(min-width: 1800px)", function(matches) { 
                if (matches) {
                   
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


