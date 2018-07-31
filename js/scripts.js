(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';	
	});
	
})(jQuery, this);

jQuery(function ($) {
 $(document).ready(function () {

     $("#mg-main-menu-btn a").click(function () {
         $('#mg-external-wrapper-main-menu').fadeToggle(200); 
         $("#mg-wrapper-main-menu").fadeToggle(200);
     });

     $("#mg-close-menu").click(function () {
         $('#mg-external-wrapper-main-menu').fadeToggle(200); 
         $("#mg-wrapper-main-menu").fadeToggle(200);
     });

     $('.mg-menu a').on('click', function () {
         $("#mg-wrapper-main-menu").fadeToggle(200);
         $('#mg-external-wrapper-main-menu').fadeToggle(200);
     });

     $('.menu-link').bigSlide();

 }); 
});