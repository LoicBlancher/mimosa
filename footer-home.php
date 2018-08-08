    <div id="mg-external-wrapper-main-menu">
      <div id="mg-wrapper-main-menu">
          <span id="mg-close-menu">CLOSE MENU X</span>
          <div id="mg-main-menu-content">
            <nav>
              <?php main_menu_nav(); ?>
            </nav>
            <div id="mg-newsletter-main-menu">
                <p id="mg-newsletter-title">restez en contact</p>
                <p id="mg-newsletter-subtitle">Inscribez-vous a notre Newsletter</p>
              <div id="mg-newsletter-form-main">
                <?php echo do_shortcode('[sibwp_form id=2]'); ?>
              </div>
            </div>
          </div>
         <div id="mg-menu-bottom-p">
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
              </div>
              <?php footer_terms(); ?>
            </div>
            <div id="mg-menu-logo-main">
              <?php $logo_mimosa= get_option('logo');?>
              <?php echo $logo_mimosa?>
              <img src="<?php echo get_template_directory_uri(); ?>/img/<?php echo $logo_mimosa?>" alt="" class="mg-logo-img-menu">
            </div>
          </div>
      </div>      
    </div>     
    </div>

    <nav id="menu" class="panel" role="navigation">
      <img src="<?php echo get_template_directory_uri(); ?>/img/mimosa-white-logo.png" alt="Logo" class="mg-logo-img-menu-mobile" alt=""> 
      <?php main_menu_nav(); ?>
      <div id="mg-social-main-menu-mobile">
        <?php $twitter_mimosa= get_option('twitter');?>
        <a href=""><i class="fab fa-facebook-f fa-lg"></i></a>
        <?php $twitter_mimosa= get_option('twitter');?>
        <a href="<?php echo $twitter_mimosa?>"><i class="fab fa-twitter fa-lg"></i></a>
        <?php $linkedin_mimosa= get_option('linkedin');?>  
        <a href="<?php echo $linkedin_mimosa?>"><i class="fab fa-linkedin-in fa-lg"></i></a>
        <?php $pinterest_mimosa= get_option('pinterest');?>
        <a href="<?php echo $pinterest_mimosa?>"><i class="fab fa-pinterest-p fa-lg"></i></a>
      </div>
      <a class="yellowBtn-mobile">
        <i class="fas fa-phone fa-rotate-90"></i>
        <span>127-232-2313</span>
      </a>   
    </nav>


    <?php wp_footer(); ?>

    <!-- analytics -->
    <script>
    (function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
    (f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
    l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
    ga('send', 'pageview');
    </script>

  </body>
</html>