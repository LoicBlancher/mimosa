jQuery(function ($) {
 $(document).ready(function () {
            






                 
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

