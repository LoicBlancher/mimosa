jQuery(function ($) {
 $(document).ready(function () {
            
 	
     function header_section_white_qs(id){
       let $header = $('header');
       $header.removeClass('ms-white-background-social-icons');
       if( id==2 || id == 4 || id == 5 || id == 6 || id == 7){
         $header.addClass("ms-white-background-social-icons");
       }
     }        

      function header_section_yellow_qs(id){
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
      };


      /* Nav Footer Qui Sommes 
      home-qs
      agence-qs
      equipe-qs
      map-qs
      confiance-qs
      devis-qs
      */
      let animationMenuFooterQuiS = $(() => {
        let $home = $('.home-qs');
        $home.click(function(){
         $(this).moveTo(1);
        });

        let $agence = $('.agence-qs');
        $agence.click(function(){
         $(this).moveTo(2);
        });

        let $equipe = $('.equipe-qs');
        $equipe.click(function(){
         $(this).moveTo(3);
        });

        let $map = $('.map-qs');
        $map.click(function(){
         $(this).moveTo(4);
        });

        let $confiance = $('.confiance-qs');
        $confiance.click(function(){
         $(this).moveTo(5);
        });

        let $devis = $('.devis-qs');
        $devis.click(function(){
         $(this).moveTo(6);
        });

        let $offres = $('.offres-qs');
        $offres.click(function(){
         $(this).moveTo(7);
        });


      });









  (function paginator_second_section(){
    let $imgQs1 = $('#ms-content-img1');
    let $imgQs2 = $('#ms-content-img2');
    let $imgQs3 = $('#ms-content-img3');
    let $btnQs1 = $('#ms-pag-round');
    let $btnQs2 = $('#ms-pag-round2');
    let $btnQs3 = $('#ms-pag-round3');
    $btnQs1.on("click",function(){
      $(this).addClass('round-active');
      $btnQs2.removeClass('round-active');
      $btnQs3.removeClass('round-active');
      $imgQs1.css("display","block");
      $imgQs2.css("display","none");
      $imgQs3.css("display","none");
    });
    $btnQs2.on("click",function(){
      $(this).addClass('round-active');
      $btnQs1.removeClass('round-active');
      $btnQs3.removeClass('round-active');
      $imgQs1.css("display","none");
      $imgQs2.css("display","block");
      $imgQs3.css("display","none");
    });
    $btnQs3.on("click",function(){
      $(this).addClass('round-active');
      $btnQs1.removeClass('round-active');
      $btnQs2.removeClass('round-active');
      $imgQs1.css("display","none");
      $imgQs2.css("display","none");
      $imgQs3.css("display","block");
    });

  })();


 	(function eyelashContent(){
 	  let btnEyelash1 = document.getElementById('first-eyelash');
 	  let btnEyelash2 = document.getElementById('second-eyelash');
 	  let btnEyelash3 = document.getElementById('third-eyelash');
 	  let content1 = document.getElementById('ms-eyelash-first-qui-sommes');
 	  let content2 = document.getElementById('ms-eyelash-second-qui-sommes');
 	  let content3 = document.getElementById('ms-eyelash-third-qui-sommes');    
 	  btnEyelash1.addEventListener("click",function(){
 	      content1.style.display = "block";
 	      content2.style.display = "none";
 	      content3.style.display = "none";
 	  });
 	  btnEyelash2.addEventListener("click",function(){
 	      content1.style.display = "none";
 	      content2.style.display = "block";
 	      content3.style.display = "none";
 	  });
 	  btnEyelash3.addEventListener("click",function(){
 	      content1.style.display = "none";
 	      content2.style.display = "none";
 	      content3.style.display = "block";
 	  });
 	})();

                
 	 $(".main").onepage_scroll({
 	    sectionContainer: ".section-scroll",     
 	    easing: "ease",                                                                   
 	    animationTime: 1000,             
 	    pagination: true,                
 	    updateURL: false,                
 	    beforeMove: function(index) {
 	      header_section_white_qs(index);
        header_section_yellow_qs(index);
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

