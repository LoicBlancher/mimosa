(function ($, root, undefined) {
    
    $(function () {
        
        'use strict';   
    });
    
})(jQuery, this);

jQuery(function ($) {
 $(document).ready(function () {
      (function politiques_terms_scroll(){
        let $header = $('header');
        let $button = $('header a.yellowBtn');
        $header.removeClass('ms-white-background-social-icons');
        $(window).scroll(function(){
          $header.addClass("ms-white-background-social-icons").fadeIn("slow");
        });
      })();
 }); 
});
