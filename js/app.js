jQuery(function ($) {
 $(document).ready(function () {
      /* Animations One page template */
      $(".ms-logo-mimosa-main").on("mouseenter", function() {
        var duration = 1;
        TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
        TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});
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
      

      (function animateLogistique(){
        /* Seeds Movement */
        let seedOne = document.getElementById("ms-seed-one");
        let seedTwo = document.getElementById("ms-seed-two");
        let seedThree = document.getElementById("ms-seed-three");
        let seedFour = document.getElementById("ms-seed-four");
        let seedFive = document.getElementById("ms-seed-five");
        let seedSix = document.getElementById("ms-seed-six");
        TweenMax.fromTo(seedOne, 0.8, {
              x: -1,
            }, {
              x: 1,
              repeat: -1,
              yoyo: true,
              ease: SlowMo.easeInOut
            });
        TweenMax.fromTo(seedTwo, 3, {
              x: -1,
            }, {
              x: 2,
              repeat: -1,
              yoyo: true,
              ease: Bounce.easeInOut
            });
        TweenMax.fromTo(seedThree, 3, {
              x: -1,
            }, {
              x: 3,
              repeat: -1,
              yoyo: true,
              ease: Bounce.easeInOut
            });
        TweenMax.fromTo(seedFour, 2, {
              x: -1,
            }, {
              x: 4,
              repeat: -1,
              yoyo: true,
              ease: SlowMo.easeInOut
            });
        TweenMax.fromTo(seedFive, 5, {
              x: -1,
            }, {
              x: 2,
              repeat: -1,
              yoyo: true,
              ease: Bounce.easeInOut
            });
        TweenMax.fromTo(seedSix, 5, {
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
          TweenMax.fromTo(soup, 5, {
                x: -190,
              }, {
                onComplete:moveAvocado,
                x: 0,
                ease: Power4.easeInOut
              });
          function moveAvocado(){
            let avocado = document.getElementById("ms-img-avocado");
            TweenMax.to(avocado , 5, {
                  y: -230,
                  ease: Power4.easeInOut
                });

          }
        }
      }


       /* function showbubble(id){
                      let paginator = document.querySelector(".onepage-pagination li a[href='#"+ id + "']");
                       
                       if(id==1){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Mimosa</span>';           
                         bubble.style.display = "block";   
                       }    
                       else if(id==2){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Démonstration</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==3){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Formation</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==4){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Logistique</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==5){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Contact</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==6){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Clients</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==7){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Interesses?</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==8){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Mimosa</span>';
                         bubble.style.display = "block";      
                       }
                    }*/

             $(".main").onepage_scroll({
                sectionContainer: ".section-scroll",     
                easing: "ease",                                                                   
                animationTime: 1000,             
                pagination: true,                
                updateURL: false,                
                beforeMove: function(index) {
                  animateCustomersHome(index);
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

