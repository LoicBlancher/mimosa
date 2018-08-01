<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>

	</head>
	<body <?php body_class(); ?>>
    <div class="push wrap">
  		<header>
      
       <div id="mg-main-menu-btn">
           <a href="#">
             <div class="mg-menu-line"></div>
             <div class="mg-menu-line"></div>
             <div class="mg-menu-line"></div>
           </a>
       </div>
       <div id="mg-info-header">
         <div id="socialHeader">
           <i class="fab fa-facebook-f fa-lg"></i>
           <i class="fab fa-twitter fa-lg"></i>
           <i class="fab fa-linkedin-in fa-lg"></i>
           <i class="fab fa-pinterest-p fa-lg"></i>
         </div>
         <a class="yellowBtn" href="tel:12345678">
           <i class="fas fa-phone fa-rotate-90"></i>
           <span>127-232-2313</span>
         </a>
       </div>
       <div id="mg-main-menu-btn-mobile">
           <a href="#menu" class="menu-link">
             <div class="mg-menu-line"></div>
             <div class="mg-menu-line"></div>
             <div class="mg-menu-line"></div>
           </a>
       </div>  
        
   
      </header>


            