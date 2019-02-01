jQuery(function ($) {
 $(document).ready(function () {
            


        function header_section_white_concept(id){
          let $header = $('header');
          $header.removeClass('ms-white-background-social-icons');
          if( id==2 || id == 3 || id == 4 || id == 6 ){
            $header.addClass("ms-white-background-social-icons");
          }
        }    

 		function header_section_yellow_concept(id){
 		  let $header = $('header');
 		  let $button = $('header a.yellowBtn');
 		  $button.removeClass('hvr-ripple-out-wt');
 		  $button.addClass('hvr-ripple-out');
 		  $header.removeClass('ms-yellow-background-btns');
 		  if( id==5 || id == 7 ){
 		    $button.addClass('hvr-ripple-out-wt');
 		    $button.removeClass('hvr-ripple-out');
 		    $header.addClass('ms-yellow-background-btns');
 		  }
 		};



                 
 	 $(".main").onepage_scroll({
 	    sectionContainer: ".section-scroll",     
 	    easing: "ease",                                                                   
 	    animationTime: 1000,             
 	    pagination: true,                
 	    updateURL: false,                
 	    beforeMove: function(index) {
 	      header_section_white_concept(index);
 	      header_section_yellow_concept(index);
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

