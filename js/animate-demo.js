jQuery(function ($) {
 $(document).ready(function () {
      function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
        var mql = window.matchMedia(mediaQuery);
        mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
        layoutChangedCallback(mql.matches);
      }

      /* Header transition Demo Culinaire */
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
           var hT = $('#ms-atelier-eight-section').offset().top,
               hH = $('#ms-atelier-eight-section').outerHeight(),
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
        (function animateDemo01(){
          chicken1 = document.getElementById("ms-chicken1");
          chicken2 = document.getElementById("ms-chicken2");
          chicken3 = document.getElementById("ms-chicken3");
          let radiusChicken1 = 10;
          TweenMax.to(chicken1, 6, {
            x: radiusChicken1,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
          }).progress(0.5);
          let radiusChicken2 = 20;
          TweenLite.set(chicken2, { 
            x: -radiusChicken2, 
            y: -radiusChicken2
          });
          let radiusChicken3 = 30;
          TweenMax.to(chicken3, 6, {
            y: radiusChicken3,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
          });
          backChicken = document.getElementById("ms-back-chicken");
          let radiusBack = 3;
          TweenLite.set(backChicken, { 
            x: -radiusBack, 
            y: -radiusBack
          });
          TweenMax.to(backChicken, 4, {
            y: radiusBack,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
          });
          TweenMax.to(backChicken, 4, {
            x: radiusBack,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
          }).progress(0.5);

        })();
        /* IF Scroll ID == ms-demo-fourth-section */
        $(window).scroll(function() {
           var hT = $('#ms-demo-fourth-section').offset().top,
               hH = $('#ms-demo-fourth-section').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           if (wS > (hT+hH-wH)){
            let backVegetablesDemo = document.getElementById("ms-back-vegetables-demo"); 
              let radiusVegatblesBack = 3;
              TweenLite.set(backVegetablesDemo, { 
                x: -radiusVegatblesBack, 
                y: -radiusVegatblesBack
              });
              TweenMax.to(backVegetablesDemo, 4, {
                y: radiusVegatblesBack,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: true
              });
              TweenMax.to(backVegetablesDemo, 4, {
                x: radiusVegatblesBack,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: true
              }).progress(0.5);
              installMediaQueryWatcher("(min-width: 1800px)", function(matches) { 
                if (matches) {
                  /* Animation second section demo if min width > 1800*/
                  (function animateDemo02Large(){
                                    let el6 = document.getElementById("ms-el-dem-serv6");
                                    TweenMax.fromTo(el6, 0.8, {
                                          x: 0,
                                        },{
                                          x:850,
                                          ease: SteppedEase.config(9)
                                        });
                                    let el2 = document.getElementById("ms-el-dem-serv2");
                                    TweenMax.fromTo(el2, 0.8, {
                                          x: 0,
                                        },{
                                          x:-810,
                                          ease: SteppedEase.config(7)
                                        });
                                    let el4 = document.getElementById("ms-el-dem-serv4");
                                    TweenMax.fromTo(el4, 0.8, {
                                          x: 0,
                                        },{
                                          x:320,
                                          ease: SteppedEase.config(6)
                                        });
                                    let el5 = document.getElementById("ms-el-dem-serv5");
                                    TweenMax.fromTo(el5, 0.8, {
                                          x: 0,
                                        },{
                                          x:350,
                                          ease: SteppedEase.config(10)
                                        });
                                    let el1 = document.getElementById("ms-el-dem-serv1");
                                    TweenMax.fromTo(el1, 0.8, {
                                          x: 0,
                                        },{
                                          x:340,
                                          ease: SteppedEase.config(7)
                                        });
                                 })();     
                } else {
                  /* Animation second section demo if max width < 1800*/
                  (function animateDemo02(){
                                    let el6 = document.getElementById("ms-el-dem-serv6");
                                    TweenMax.to(el6, 0.8, {
                                          x: 650,
                                          ease: SteppedEase.config(9)
                                        });
                                    let el2 = document.getElementById("ms-el-dem-serv2");
                                    TweenMax.to(el2, 0.8, {
                                          x: -460,
                                          ease: SteppedEase.config(7)
                                        });
                                    let el4 = document.getElementById("ms-el-dem-serv4");
                                    TweenMax.to(el4, 0.8, {
                                          x: 190,
                                          ease: SteppedEase.config(6)
                                        });
                                    let el5 = document.getElementById("ms-el-dem-serv5");
                                    TweenMax.to(el5, 0.8, {
                                          x: 200,
                                          ease: SteppedEase.config(10)
                                        });
                                    let el1 = document.getElementById("ms-el-dem-serv1");
                                    TweenMax.to(el1, 0.8, {
                                          x: 210,
                                          ease: SteppedEase.config(7)
                                        });
                                 })();    
                }
              }); 
           }
        });
        let bacon = document.getElementById("ms-bacon-services-demo"); 
          let radiusBackon = 10;
          TweenLite.set(bacon,{ 
            x: -radiusBackon, 
            y: -radiusBackon
          });
          TweenMax.to(bacon, 7, {
            y: radiusBackon,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
          });
          TweenMax.to(bacon, 6, {
            x: radiusBackon,
            ease: Sine.easeInOut,
            repeat: -1,
            yoyo: true
          }).progress(0.5);

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
        
        (function animateCtaDemo(){
          let devisCtaDemo = document.getElementById("ms-cta-devis-demo");
          let contactCtaDemo = document.getElementById("ms-cta-contact-demo");
          devisCtaDemo.addEventListener("mouseover",function(event){
            let onion = document.getElementById("ms-image-header-nine-section");
            let tl = new TimelineMax({repeatDelay:1});
            tl.fromTo(onion, 0.7, {
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
          contactCtaDemo.addEventListener("mouseover",function(event){
            let onion = document.getElementById("ms-image-header-nine-section");
            let tl = new TimelineMax({repeatDelay:1});
            tl.fromTo(onion, 0.7, {
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
        })();      

      /*------------------------------------*\
          End Animations Demo Culinaire
      \*------------------------------------*/   

 }); 
});


