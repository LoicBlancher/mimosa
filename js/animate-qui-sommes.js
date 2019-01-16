jQuery(function ($) {
 $(document).ready(function () {
            
 	(function paginate_carousel(){
 	   let button1 = document.getElementById('ms-imgc-1');
 	   let button2 = document.getElementById('ms-imgc-2');
 	   let button3 = document.getElementById('ms-imgc-3');
 	   let image1 = document.getElementById('ms-content-img1');
 	   let image2 = document.getElementById('ms-content-img2');
 	   let image3 = document.getElementById('ms-content-img3');
 	   button1.addEventListener("click",function(){
 	       image1.style.display = "block";
 	       image2.style.display = "none";
 	       image3.style.display = "none"; 
 	   });
 	   button2.addEventListener("click",function(){
 	       image2.style.display = "block";
 	       image1.style.display = "none";
 	       image3.style.display = "none"; 
 	   });
 	   button3.addEventListener("click",function(){
 	       image3.style.display = "block";
 	       image1.style.display = "none";
 	       image2.style.display = "none";  
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

