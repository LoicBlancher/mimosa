jQuery(function ($) {
 $(document).ready(function () {
      function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
        var mql = window.matchMedia(mediaQuery);
        mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
        layoutChangedCallback(mql.matches);
      }

     /* Header transition Demo Atelier */
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
                   let pot = document.getElementById("ms-atelier-pot1");
                   TweenLite.fromTo(pot, 0.8, {
                     x:-1}, {
                       x:1, 
                       ease:RoughEase.ease.config({
                         strength:8, 
                         points:20, 
                         template:Linear.easeNone, 
                         randomize:false}) , 
                     clearProps:"x"})
                   let el1 = document.getElementById("ms-elementAt9-ser1");
                   TweenMax.to(el1, 6, {
                         y:-135,
                         x:0,
                         ease: Elastic.easeOut.config(1, 0.3),
                       });
                   let el2 = document.getElementById("ms-elementAt8-ser1");
                   TweenMax.to(el2, 6, {
                         delay:2,
                         y:-585,
                         x:240,
                         ease: Elastic.easeOut.config(1, 0.3),
                       });     
                    let el3 = document.getElementById("ms-elementAt7-ser1");
                    TweenMax.to(el3, 6, {
                          delay:2,
                          y:-600,
                          x:5,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });     
                    let el4 = document.getElementById("ms-elementAt6-ser1");
                    TweenMax.to(el4, 6, {
                          delay:2,
                          y:-580,
                          x:-230,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });
                    let el5 = document.getElementById("ms-elementAt5-ser1");
                    TweenMax.to(el5, 6, {
                          delay:2,
                          y:-840,
                          x:280,
                          ease: Elastic.easeOut.config(1, 0.3),
                        }); 
                    let el6 = document.getElementById("ms-elementAt4-ser1");
                    TweenMax.to(el6, 6, {
                          delay:2,
                          y:-700,
                          x:110,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });
                    let el7 = document.getElementById("ms-elementAt3-ser1");
                    TweenMax.to(el7, 6, {
                          delay:2,
                          y:-540,
                          x:-30,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });
                    let el8 = document.getElementById("ms-elementAt2-ser1");
                    TweenMax.to(el8, 6, {
                          delay:2,
                          y:-720,
                          x:-140,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });
                    let el9 = document.getElementById("ms-elementAt1-ser1");
                    TweenMax.to(el9, 6, {
                          delay:2,
                          y:-580,
                          x:-300,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });  


                             
                } else {
                 
                }
              });

              installMediaQueryWatcher("(min-width: 1200px) and (max-width: 1480px)", function(matches) { 
                if (matches) {
                   let pot = document.getElementById("ms-atelier-pot1");
                   TweenLite.fromTo(pot, 0.8, {
                     x:-1}, {
                       x:1, 
                       ease:RoughEase.ease.config({
                         strength:8, 
                         points:20, 
                         template:Linear.easeNone, 
                         randomize:false}) , 
                     clearProps:"x"})
                   let el1 = document.getElementById("ms-elementAt9-ser1");
                   TweenMax.to(el1, 6, {
                         y:-135,
                         x:0,
                         ease: Elastic.easeOut.config(1, 0.3),
                       });
                   let el2 = document.getElementById("ms-elementAt8-ser1");
                   TweenMax.to(el2, 6, {
                         delay:2,
                         y:-585,
                         x:210,
                         ease: Elastic.easeOut.config(1, 0.3),
                       });     
                    let el3 = document.getElementById("ms-elementAt7-ser1");
                    TweenMax.to(el3, 6, {
                          delay:2,
                          y:-660,
                          x:5,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });     
                    let el4 = document.getElementById("ms-elementAt6-ser1");
                    TweenMax.to(el4, 6, {
                          delay:2,
                          y:-580,
                          x:-230,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });
                    let el5 = document.getElementById("ms-elementAt5-ser1");
                    TweenMax.to(el5, 6, {
                          delay:2,
                          y:-830,
                          x:280,
                          ease: Elastic.easeOut.config(1, 0.3),
                        }); 
                    let el6 = document.getElementById("ms-elementAt4-ser1");
                    TweenMax.to(el6, 6, {
                          delay:2,
                          y:-690,
                          x:110,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });
                    let el7 = document.getElementById("ms-elementAt3-ser1");
                    TweenMax.to(el7, 6, {
                          delay:2,
                          y:-530,
                          x:-30,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });
                    let el8 = document.getElementById("ms-elementAt2-ser1");
                    TweenMax.to(el8, 6, {
                          delay:2,
                          y:-710,
                          x:-140,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });
                    let el9 = document.getElementById("ms-elementAt1-ser1");
                    TweenMax.to(el9, 6, {
                          delay:2,
                          y:-570,
                          x:-300,
                          ease: Elastic.easeOut.config(1, 0.3),
                        });  

                                
                             
                } else {
                 
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
                   let pot = document.getElementById("ms-atelier-pot2");
                   TweenLite.fromTo(pot, 0.8, {
                     x:-1}, {
                       x:1, 
                       ease:RoughEase.ease.config({
                         strength:8, 
                         points:20, 
                         template:Linear.easeNone, 
                         randomize:false}) , 
                     clearProps:"x"})
                   let el1 = document.getElementById("ms-elementAt6-ser2");
                   TweenMax.to(el1, 6, {
                         y:-135,
                         x:35,
                         ease: Elastic.easeOut.config(1, 0.3),
                         onComplete:animateElement2()
                       });
                       function animateElement2(){
                        let el2 = document.getElementById("ms-elementAt5-ser2");
                        TweenMax.to(el2, 6, {
                              delay:2,
                              y:-135,
                              x:-45,
                              ease: Elastic.easeOut.config(1, 0.3),
                              onComplete:animateElement3()
                            });
                        }
                        function animateElement3(){
                         let el3 = document.getElementById("ms-elementAt4-ser2");
                         TweenMax.to(el3, 6, {
                               delay:2,
                               y:-280,
                               x:35,
                               ease: Elastic.easeOut.config(1, 0.3),
                               onComplete:animateElement4()
                             });
                         }
                         function animateElement4(){
                          let el4 = document.getElementById("ms-elementAt3-ser2");
                          TweenMax.to(el4, 6, {
                                delay:2,
                                y:-280,
                                x:-45,
                                ease: Elastic.easeOut.config(1, 0.3),
                                onComplete:animateElement5()
                              });
                          }
                         function animateElement5(){
                          let el5 = document.getElementById("ms-elementAt2-ser2");
                          let el6 = document.getElementById("ms-elementAt1-ser2");
                          TweenMax.to(el5, 6, {
                                delay:3,
                                x:-580,
                                rotation:360,
                                ease:Bounce.easeOut  
                              });
                          TweenMax.to(el6, 4, {
                                delay:3,
                                x:420,
                                rotation:360,
                                ease:Bounce.easeOut  
                              });
                          }              
                } else {
                 
                }
              }); 
           }
        });
        
        (function animateAtelier03(){
          let plate = document.getElementById("ms-plate-atelier-ser");
          let el1 = document.getElementById("ms-elementAt1-ser3");
          let el2 = document.getElementById("ms-elementAt2-ser3");
          let el3 = document.getElementById("ms-elementAt3-ser3");
          let el4 = document.getElementById("ms-elementAt4-ser3");
          let el5 = document.getElementById("ms-elementAt5-ser3");
          let el6 = document.getElementById("ms-elementAt6-ser3");
          let el7 = document.getElementById("ms-elementAt7-ser3");
          let el8 = document.getElementById("ms-elementAt8-ser3");
          let el9 = document.getElementById("ms-elementAt9-ser3");
          let R = 400; 
          let dur = 8; 

          var tl = new TimelineLite()
          .staggerTo([el2,el3,el4,el5,el7,el9], dur ,{
          bezier:{curviness:1.5,values:[{x:0,y:0},{x:R/2,y:R/2},{x:0,y:R},{x:-R/2,y:R/2},{x:0,y:0}]}
          ,rotation:-720,repeat:-1,ease:Power0.easeNone},dur/6)
          .to(".main_cookie", dur ,{rotation:-360,ease:Power0.easeNone,repeat:-1},0)
          .time(dur);
        })();

        let ctaControlez = document.getElementById("ms-cta-atelier-btn");
        ctaControlez.addEventListener("mouseover",function(){
          let light = document.getElementById("ms-avocado-demo");
          let tl = new TimelineMax({repeatDelay:1});
          tl.fromTo(light, 0.7, {
            x:-1,
            yoyo:true}, {
              x:1,
              ease:RoughEase.ease.config({
                strength:8, 
                points:20, 
                template:Linear.easeNone, 
                randomize:false})
            });
        }); 

/*
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
        }).progress(0.5);*/

        (function animateCtaDemo(){
          let devisCtaDemo = document.getElementById("ms-cta-devis-atelier");
          let contactCtaDemo = document.getElementById("ms-cta-contact-atelier");
          devisCtaDemo.addEventListener("mouseover",function(){
            let el2 = document.getElementById("ms-image-header-nine-section-atelier-2");
            let el3 = document.getElementById("ms-image-header-nine-section-atelier-3");
            TweenMax.to(el2, 6, {
                  y:-4,
                  x:23,
                  ease: Elastic.easeOut.config(1, 0.3),
                  onComplete:returnBegin()
                });
            TweenMax.to(el3, 6, { 
                  y:-10,
                  x:32,
                  ease: Elastic.easeOut.config(1, 0.3),
                  onComplete:returnBegin()
                });
              function returnBegin(){
                devisCtaDemo.addEventListener("mouseout",function(){
                  TweenMax.to(el2, 4, {
                      x:0,
                      y:0,
                      ease: SlowMo.ease.config(0.7, 0.7, false)
                      });
                  TweenMax.to(el3, 4, {
                      x:0,
                      y:0,
                      ease: SlowMo.ease.config(0.7, 0.7, false)
                      });
                });
              };
          });

          contactCtaDemo.addEventListener("mouseover",function(){
            let el2 = document.getElementById("ms-image-header-nine-section-atelier-2");
            let el3 = document.getElementById("ms-image-header-nine-section-atelier-3");
            TweenMax.to(el2, 6, {
                  y:-4,
                  x:23,
                  ease: Elastic.easeOut.config(1, 0.3),
                  onComplete:returnBegin()
                });
            TweenMax.to(el3, 6, { 
                  y:-10,
                  x:32,
                  ease: Elastic.easeOut.config(1, 0.3),
                  onComplete:returnBegin()
                });
              function returnBegin(){
                contactCtaDemo.addEventListener("mouseout",function(){
                  TweenMax.to(el2, 4, {
                      x:0,
                      y:0,
                      ease: SlowMo.ease.config(0.7, 0.7, false)
                      });
                  TweenMax.to(el3, 4, {
                      x:0,
                      y:0,
                      ease: SlowMo.ease.config(0.7, 0.7, false)
                      });
                });
              };
          });
        })();      

      /*------------------------------------*\
          End Animations Demo Culinaire
      \*------------------------------------*/   

 }); 
});


