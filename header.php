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

		<header>
      
      <div id="main-menu-btn">
          <a href="#">
            <div id="menu-line"></div>
            <div id="menu-line"></div>
            <div id="menu-line"></div>
          </a>
      </div>

      <div id="external-wrapper-main-menu">
        <div id="wrapper-main-menu">
            <div id="main-menu-content">
              <nav>
                <?php main_menu_nav(); ?>
              </nav>
            </div>
            <div id="social-main-menu"></div>
            <div id="menu-terms-main">
              <?php footer_terms(); ?>
            </div>
            <div id="newsletter-main-menu">
                <i class="fas fa-user"></i>
                <p id="newsletter-title">restez en contact</p>
                <p id="newsletter-subtitle">Inscribez-vous a notre Newsletter</p>
              <div id="newsletter-form-main">
                <?php echo do_shortcode('[sibwp_form id=2]'); ?>
              </div>
            </div>
            <div class="close-btn-main-menu"></div>
        </div>      
      </div>
 
    </header>


          