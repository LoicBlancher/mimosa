jQuery(function ($) {
 $(document).ready(function () {

      function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
        var mql = window.matchMedia(mediaQuery);
        mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
        layoutChangedCallback(mql.matches);
      }

      function header_section_two_home(id){
        let $header = $('header');
        $header.removeClass('ms-white-background-social-icons');
        if( id==2 || id == 4 || id == 7 ){
          $header.addClass("ms-white-background-social-icons");
        }
      }

      function header_section_three_home(id){
        let $header = $('header');
        let $button = $('header a.yellowBtn');
        $button.removeClass('hvr-ripple-out-wt');
        $button.addClass('hvr-ripple-out');
        $header.removeClass('ms-yellow-background-btns');
        if( id==3 || id == 8 ){
          $button.addClass('hvr-ripple-out-wt');
          $button.removeClass('hvr-ripple-out');
          $header.addClass('ms-yellow-background-btns');
        }
      }

      /* Logo Animation 
      (function animateLogo(){
        var tl = new TimelineLite({onUpdate:updateSlider}),
            circle = document.getElementById("circle");

        tl.to(circle, 1, {morphSVG:"#hippo"}, "+=1")
          .to(circle, 1, {morphSVG:"#star"}, "+=1")
          .to(circle, 1, {morphSVG:"#elephant"}, "+=1")
          .to(circle, 1, {morphSVG:circle}, "+=1");

        $("#slider").slider({
          range: false,
          min: 0,
          max: 1,
          step:.001,
          slide: function ( event, ui ) {
            tl.progress( ui.value ).pause();
          },
          stop: function () {
            tl.play();
          }
        }); 

        function updateSlider() {
          $("#slider").slider("value", tl.progress());
        } 
      })(); */

 /*
      $("#ms-know-more").click(function(){
        $('html,body').animate({
          scrollTop:$("#ms-second-section-home").offset().top},
          1000);
      });
*/
      (function animateDemoHome(){
        egg1 = document.getElementById("ms-container-egg1-home");
        TweenMax.fromTo(egg1, 0.1, {
              x: -1,
            }, {
              x: 1,
              repeat: -1,
              yoyo: true,
              ease: SlowMo.easeInOut
            });
        egg2 = document.getElementById("ms-container-egg2-home");
        TweenMax.fromTo(egg2, 2, {
              x: -1,
            }, {
              x: 1,
              repeat: -1,
              yoyo: true,
              ease: Quad.easeInOut
            });
        egg2 = document.getElementById("ms-container-egg2-home");
        TweenMax.fromTo(egg2, 0.2, {
              x: -1,
            }, {
              x: 1,
              repeat: -1,
              yoyo: true,
              ease: Quad.easeInOut
            });
        bred = document.getElementById("ms-container-bred-home");
        let radiusBred = 20;
        TweenLite.set(bred, { 
          x: -radiusBred, 
          y: -radiusBred
        });

        TweenMax.to(bred, 11, {
          y: radiusBred,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        });

        TweenMax.to(bred, 11, {
          x: radiusBred,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        }).progress(0.5);
        spinach = document.getElementById("ms-container-spinach-home");
        let radiusSpinach = 10;
        TweenLite.set(spinach, { 
          x: -radiusSpinach, 
          y: -radiusSpinach
        });

        TweenMax.to(spinach, 6, {
          y: radiusSpinach,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        });

        TweenMax.to(spinach, 6, {
          x: radiusSpinach,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        }).progress(0.5);

        bacon = document.getElementById("ms-container-bacon-home");
        let radiusBacon = 7;
        TweenLite.set(bacon, { 
          x: -radiusBacon, 
          y: -radiusBacon
        });

        TweenMax.to(bacon, 5, {
          y: radiusBacon,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        });

        TweenMax.to(bacon, 5, {
          x: radiusBacon,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        }).progress(0.5);
        
      })();


      function amiateOnionHome(id){
        if(id==3){
          let fragmentOnion1 = document.getElementById("ms-onion-seven");
          let fragmentOnion2 = document.getElementById("ms-onion-six");
          let fragmentOnion3 = document.getElementById("ms-onion-five");
          let fragmentOnion4 = document.getElementById("ms-onion-four");
          let fragmentOnion5 = document.getElementById("ms-onion-three");
          let fragmentOnion6 = document.getElementById("ms-onion-two");
          let fragmentOnion7 = document.getElementById("ms-onion-one");
          let animation = new TimelineMax({delay:0.2})
          animation.fromTo(fragmentOnion1, 0.9, {
              x:0,
              y:0
            },{
              y:140,
              ease: Bounce.easeOut
          });
          animation.fromTo(fragmentOnion2, 0.7, {
              x:0,
              y:0
            },{  
              y:140,
              ease: Bounce.easeOut  
          });
          animation.fromTo(fragmentOnion3, 0.7, {
              x:0,
              y:0
            },{  
              y:147,
              ease: Bounce.easeOut  
          });
          animation.fromTo(fragmentOnion4, 0.7, {
              x:0,
              y:0
            },{
              y:150,
              ease: Bounce.easeOut  
          });
          animation.fromTo(fragmentOnion5, 0.7, {
              x:0,
              y:0   
          },{
              y:167,
              ease: Bounce.easeOut  
          });
          animation.fromTo(fragmentOnion6, 0.7, {
              x:0,
              y:0
          },{
              y:170,
              ease: Bounce.easeOut 
          });
          animation.fromTo(fragmentOnion7, 0.7, {
              x:0,
              y:0,
              rotation:0
          },{  
              y:160,
              x:180,
              rotation:36,
          });
        }
      }

      (function animateLogistique(){
        /* Seeds Movement */
        let seedOne = document.getElementById("ms-seed-one");
        let seedTwo = document.getElementById("ms-seed-two");
        let seedThree = document.getElementById("ms-seed-three");
        let seedFour = document.getElementById("ms-seed-four");
        let seedFive = document.getElementById("ms-seed-five");
        let seedSix = document.getElementById("ms-seed-six");
        let seedOneTop = document.getElementById("ms-seed-one-top");
        let seedTwoTop = document.getElementById("ms-seed-two-top");
        let seedThreeTop = document.getElementById("ms-seed-three-top");
        let seedFourTop = document.getElementById("ms-seed-four-top");
        let seedFiveTop = document.getElementById("ms-seed-five-top");
        let seedSixTop = document.getElementById("ms-seed-six-top");
        let tl = new TimelineMax({repeatDelay:1,repeat:-1});
        tl.fromTo(seedOne, 3, {
            x:-1,
          }, {
            x:1,
            ease:RoughEase.ease.config({
              strength:8, 
              points:10, 
              template:Linear.easeNone, 
              randomize:false})
          });
        tl.fromTo(seedSixTop, 2, {
            x:-2,
          }, {
            x:1,
            ease:RoughEase.ease.config({
              strength:8, 
              points:10, 
              template:Linear.easeNone, 
              randomize:false})
          });
        TweenMax.fromTo([seedTwo,seedFiveTop], 3, {
              x: -1,
            }, {
              x: 2,
              repeat: -1,
              yoyo: true,
              ease: Bounce.easeInOut
            });
        TweenMax.fromTo([seedThree,seedFourTop], 3, {
              x: -1,
            }, {
              x: 3,
              repeat: -1,
              yoyo: true,
              ease: Bounce.easeInOut
            });
        TweenMax.fromTo([seedFour,seedThreeTop], 2, {
              x: -1,
            }, {
              x: 4,
              repeat: -1,
              yoyo: true,
              ease: SlowMo.easeInOut
            });
        TweenMax.fromTo([seedFive,seedTwoTop], 5, {
              x: -1,
            }, {
              x: 2,
              repeat: -1,
              yoyo: true,
              ease: Bounce.easeInOut
            });
        TweenMax.fromTo([seedOneTop,seedSix], 5, {
              x: -1,
            }, {
              x: 3,
              repeat: -1,
              yoyo: true,
              ease: Bounce.easeInOut
            });
      })(); 

      function animateCustomersHome(id){
        if(id==6){
          let soup = document.getElementById("ms-img-soup");
          let avocado = document.getElementById("ms-img-avocado");
          let branch1 = document.getElementById("ms-img-branch1");
          let branch2 = document.getElementById("ms-img-branch2");
            TweenMax.fromTo(soup, 3, {
                x: -190,
              }, {
                x: 0,
                ease: Power4.easeInOut
            });  
            TweenMax.fromTo(avocado , 3, {
                y: 0
              },{
                y: -230, 
                ease: Power4.easeInOut             
            });
            TweenMax.fromTo(branch1, 3,{
                x:-40,
                y:30
              },{
                x:0,
                y:0,
                ease: Power4.easeInOut
            });
            TweenMax.fromTo(branch2, 3,{
                y:-10
              },{
                y:20,
                ease: SteppedEase.config(12)
              });            
        };
      };

      // Write Javascript code!
      

      $(window).scroll(function() {
         console.log("Scrolling"); 
      });


      (function animateCheeseHome(){
        let devisCtaHome = document.getElementById("ms-cta-devis-home");
        let contactCtaHome = document.getElementById("ms-cta-contact-home");
        let tl = new TimelineMax({repeatDelay:1});
        devisCtaHome.addEventListener("mouseover",function(event){
          let cheese = document.getElementById("ms-cta-cheese-home");
          tl.fromTo(cheese, 0.7, {
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
        contactCtaHome.addEventListener("mouseover",function(event){
          let cheese = document.getElementById("ms-cta-cheese-home");
          tl.fromTo(cheese, 0.7, {
            x:-1}, {
              x:1, 
              ease:RoughEase.ease.config({
                strength:8, 
                points:20, 
                template:Linear.easeNone, 
                randomize:false}) , 
            });
        });
      })();

      installMediaQueryWatcher("(max-width: 480px)", function(matches) { 
        if (matches) {
          $onePage = $('div.section-scroll');
          $onePage.removeClass('section-scroll');
          $('link[rel=stylesheet][href~="http://mimosa.graditest.com/wp-content/themes/mimosa/css/onepage-scroll.css?ver=4.9.8"]').remove();
        } else {
         
        }
      }); 
    

       $(".main").onepage_scroll({
          sectionContainer: ".section-scroll",     
          easing: "ease",                                                                   
          animationTime: 1000,             
          pagination: true,                
          updateURL: true,                
          beforeMove: function(index) {
            animateCustomersHome(index);
            amiateOnionHome(index);
            header_section_two_home(index);
            header_section_three_home(index);
          },  
          afterMove: function(index) {
          },   
          loop: false,                     
          keyboard: true,                  
          responsiveFallback: 992,                                                                                                      
          direction: "vertical"              
      });   
 }); 
});
