jQuery(function ($) {
 $(document).ready(function () {
            
 	
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

