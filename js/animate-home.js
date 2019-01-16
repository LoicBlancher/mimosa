jQuery(function ($) {
 $(document).ready(function () {
      /* Animations One page template */
      $(".ms-logo-mimosa-main").on("mouseenter", function() {
        var duration = 1;
        TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
        TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});
      });   

      /* Scroll Button First Section Home */
      $('a[href^="#2"]').on('click', function(event) {

          var target = $(this.getAttribute('href'));

          if( target.length ) {
              event.preventDefault();
              $('html, body').stop().animate({
                  scrollTop: target.offset().top
              }, 1000);
          }

      });
      $("#ms-know-more").click(function(){
        $('html,body').animate({
          scrollTop:$("#ms-second-section-home").offset().top},
          1000);
      });

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
        
        /*let demoBackground = $("[background-image=url("'http://mimosa.graditest.com/wp-content/uploads/2018/10/Fondo-2.png'")]");
        let radiusBack = 20;
        TweenLite.set(demoBackground, { 
          x: -radiusBack, 
          y: -radiusBack
        });

        TweenMax.to(demoBackground, 6, {
          y: radiusBack,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        });

        TweenMax.to(demoBackground, 6, {
          x: radiusBack,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        }).progress(0.5);*/
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
          animation.to(fragmentOnion1, 0.9, {
            y:140,
            ease: Bounce.easeOut  
          });
          animation.to(fragmentOnion2, 0.7, {
            y:140,
            ease: Bounce.easeOut  
          });
          animation.to(fragmentOnion3, 0.7, {
            y:147,
            ease: Bounce.easeOut  
          });
          animation.to(fragmentOnion4, 0.7, {
            y:150,
            ease: Bounce.easeOut  
          });
          animation.to(fragmentOnion5, 0.7, {
            y:167,
            ease: Bounce.easeOut  
          });
          animation.to(fragmentOnion6, 0.7, {
            y:170,
            ease: Bounce.easeOut 
          });
          animation.to(fragmentOnion7, 0.7, {
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
        TweenMax.fromTo([seedOne,seedSixTop], 0.8, {
              x: -1,
            }, {
              x: 1,
              repeat: -1,
              yoyo: true,
              ease: SlowMo.easeInOut
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
        TweenMax.fromTo(soup, 3, {
              x: -190,
            }, {
              x: 0,
              ease: Power4.easeInOut
            });  
        TweenMax.to(avocado , 3, {
              y: -230,
              ease: Power4.easeInOut
            });            

        };
      };



      function white_background(id){
        let $header = $('header');
        $header.removeClass('ms-white-background-social-icons');

        if(id==2){
          $header.addClass("ms-white-background-social-icons");
        }
      }

      (function animateCheeseHome(){
        let devisCtaHome = document.getElementById("ms-cta-devis-home");
        let contactCtaHome = document.getElementById("ms-cta-contact-home");
        devisCtaHome.addEventListener("mouseover",function(event){
          let cheese = document.getElementById("ms-cta-cheese-home");
          TweenLite.fromTo(cheese, 0.3, {
            x:-1}, {
              x:1, 
              ease:RoughEase.ease.config({
                strength:8, 
                points:20, 
                template:Linear.easeNone, 
                randomize:false}) , 
            clearProps:"x"})
        });
        contactCtaHome.addEventListener("mouseover",function(event){
          let cheese = document.getElementById("ms-cta-cheese-home");
          TweenLite.fromTo(cheese, 0.3, {
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

       $(".main").onepage_scroll({
          sectionContainer: ".section-scroll",     
          easing: "ease",                                                                   
          animationTime: 1000,             
          pagination: true,                
          updateURL: true,                
          beforeMove: function(index) {
            animateCustomersHome(index);
            amiateOnionHome(index);
            white_background(index);
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

