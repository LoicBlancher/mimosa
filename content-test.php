<footer class="footer" role="contentinfo">
      <div class="container">
        <div class="row" id="mg-footer-first">
          <div class="col-12 col-md-6 col-lg-3">
            <h6>Mimosa Paris</h6>
            <ul>
              <?php $address_mimosa= get_option('address');?>
              <li><a href=""><?php echo $address_mimosa?></a></li>
              <li><a href="">Nos chefs</a></li>
              <?php $phone_mimosa= get_option('phone');?>
              <li><a href="tel:<?php echo $phone_mimosa?>">Tel:<?php echo $phone_mimosa?></a></li>
              <?php $mail_mimosa= get_option('mail');?>
              <li><a href="mailto:<?php echo $mail_mimosa?>"><?php echo $mail_mimosa?></a></li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
              <h6>Services</h6>
              <?php footer_servicesMenu(); ?>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <h6>Mimosa</h6>
            <?php footer_mimosaMenu(); ?>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
                <h6 id="title-newsletter-footer">restez en contact</h6>
                <p id="mg-newsletter-subtitle">Inscribez-vous a notre Newsletter</p>
              <div id="mg-newsletter-form-main">
                <?php echo do_shortcode('[sibwp_form id=2]'); ?>
              </div>
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
          </div>
        </div>
        <div class="row" id="mg-footer-second">
          <div class="col-12 col-md-6 col-lg-6">
            <p class="copyright">
              &copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>. <?php _e('Powered by', 'html5blank'); ?>
              <a href="//wordpress.org" title="WordPress">WordPress</a> &amp; <a href="//html5blank.com" title="HTML5 Blank">HTML5 Blank</a>.
            </p>
          </div>
          <div class="col-12 col-md-4 col-lg-4 offset-md-2 offset-lg-2">
            <div id="mg-footer-menu-terms">
              <?php footer_terms(); ?>
            </div>
          </div>        
        </div>
      </div>  
        


        <!-- copyright -->
        
        <!-- /copyright -->

      </footer>