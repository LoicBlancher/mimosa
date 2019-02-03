<?php /* Template Name: Thank You */ wp_head(); ?>
<main role="main">
  <!-- section -->
  <div class="main">
    <div class="ms-logTyPage">
      <img src="<?php echo get_template_directory_uri(); ?>/img/mimosa-yellow-white.png" alt="" class="ms-logo-ty-pg">
    </div>
    <?php the_content(); ?>
    <div class="ms-footerTyPage">
      <div id="mg-menu-terms-main">
        <div id="mg-social-main-menu">
         <?php $facebook_mimosa= get_option('facebook');?>
          <a href="<?php echo $facebook_mimosa?>"><i class="fab fa-facebook-f fa-lg"></i></a>
          <?php $twitter_mimosa= get_option('twitter');?>
          <a href="<?php echo $twitter_mimosa?>"><i class="fab fa-twitter fa-lg"></i></a>
          <?php $linkedin_mimosa= get_option('linkedin');?>
          <a href="<?php echo $linkedin_mimosa?>"><i class="fab fa-linkedin-in fa-lg"></i></a>
          <?php $pinterest_mimosa= get_option('pinterest');?>
          <a href="<?php echo $pinterest_mimosa?>"><i class="fab fa-pinterest-p fa-lg"></i></a>
        </di  v>
        <?php footer_terms(); ?>
      </div>    

    </div>