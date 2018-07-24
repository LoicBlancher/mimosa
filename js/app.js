jQuery(function ($) {
 $(document).ready(function () {

     $("#main-menu-btn a").click(function () {
         $('#external-wrapper-main-menu').fadeToggle(200); 
         $("#wrapper-main-menu").fadeToggle(200);
     });

     $('#wrapper-main-menu').on('click', function () {
         $("#wrapper-main-menu").fadeToggle(200);
         $('#external-wrapper-main-menu').fadeToggle(200);
     });

     $('.menu a').on('click', function () {
         $("#wrapper-main-menu").fadeToggle(200);
         $('#external-wrapper-main-menu').fadeToggle(200);
     });
 }); 
});

