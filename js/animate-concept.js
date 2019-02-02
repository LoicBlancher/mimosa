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

    /* Nav Footer Menu 
    home-nc
    philosophie-nc
    logistique-nc
    chefs-nc
    recette-nc
    */
    let animateFooterMenuNc = $(() => {
      let $home = $('.home-nc');
      $home.click(function(){
       $(this).moveTo(1);
      });

      let $philosophy = $('.philosophie-nc');
      $philosophy.click(function(){
       $(this).moveTo(2);
      });

      let $logistique = $('.logistique-nc');
      $logistique.click(function(){
       $(this).moveTo(3);
      });

      let $chefs = $('.chefs-nc');
      $chefs.click(function(){
       $(this).moveTo(4);
      });

      let $reccete = $('.recette_nc');
      $reccete.click(function(){
       $(this).moveTo(5);
      });

      let $offres = $('.offres-nc');
      $offres.click(function(){
       $(this).moveTo(6);
      });

    });


 		function animation03Concept(id){
      if(id==3){
        let $branch2 = $("#ms-part2-force-notrec");
        let $branch3 = $("#ms-part3-force-notrec");
        var $branch4 = $("#ms-part4-force-notrec");
        let $branch5 = $("#ms-part5-force-notrec");
        let $branch6 = $("#ms-part6-force-notrec");
        let $branch7 = $("#ms-part7-force-notrec");
        let $branch8 = $("#ms-part8-force-notrec");
        let $branch9 = $("#ms-part9-force-notrec");
        let $branch10 = $("#ms-part10-force-notrec");
        let $branch11 = $("#ms-part11-force-notrec");
        let $branch12 = $("#ms-part12-force-notrec");
        let $branch13 = $("#ms-part13-force-notrec");       
        TweenMax.fromTo($branch2, 0.1, {
              x: -1,
            }, {
              x: 1,
              repeat: -1,
              yoyo: true,
              ease: SlowMo.easeInOut
            });
        TweenMax.fromTo($branch6, 2, {
              x: -1,
            }, {
              x: 1,
              repeat: -1,
              yoyo: true,
              ease: Quad.easeInOut
            });
        TweenMax.fromTo($branch8, 0.2, {
              x: -1,
            }, {
              x: 1,
              repeat: -1,
              yoyo: true,
              ease: Quad.easeInOut
            });
        let radiusOnion = 20;
        TweenLite.set($branch12, { 
          x: -radiusOnion, 
          y: -radiusOnion
        });

        TweenMax.to($branch12, 11, {
          y: radiusOnion,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        });

        TweenMax.to($branch12, 11, {
          x: radiusOnion,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        }).progress(0.5);

        let radiusBranch11 = 10;
        TweenLite.set($branch11, { 
          x: -radiusBranch11, 
          y: -radiusBranch11
        });

        TweenMax.to($branch11, 6, {
          y: radiusBranch11,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        });

        TweenMax.to($branch11, 6, {
          x: radiusBranch11,
          ease: Sine.easeInOut,
          repeat: -1,
          yoyo: true
        }).progress(0.5);

        let pathBranch1 = [{x:"900",y:"100"},
            {x:"100",y:"600"},
            {x:"20",y:"0"}
            ];
        TweenMax.to($branch4,3,{bezier:{curviness:8,values:pathBranch1}},"");
        let pathBranch6 = [{x:"200",y:"100"},
            {x:"300",y:"500"},
            {x:"20",y:"0"}
            ];
        TweenMax.to($branch6,3,{bezier:{curviness:8,values:pathBranch6}},"");    
      };
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
        animation03Concept(index);
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

