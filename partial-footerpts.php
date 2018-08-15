<footer class="footer ms-footer-pts" role="contentinfo">
      <div class="container">
        <div class="row" id="ms-footer-first-pts">
          <div class="col-12 col-md-6 col-lg-6">
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
          <div class="col-12 col-md-6 col-lg-6">
              <h6>Services</h6>
              <?php footer_servicesMenu(); ?>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <h6>Mimosa</h6>
            <?php footer_mimosaMenu(); ?>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
                <h6 id="title-newsletter-footer">restez en contact</h6>
                <p id="mg-newsletter-subtitle">Inscribez-vous a notre Newsletter</p>
              <div id="mg-newsletter-form-main">
                <?php echo do_shortcode('[sibwp_form id=2]'); ?>
              </div>
          </div>
        </div>
        <div class="row" id="ms-footer-second-pts">
          <div class="col-12">
            <div id="mg-footer-menu-terms">
              <?php footer_terms(); ?>
            </div>
          </div>        
          <div class="col-12">
            <p class="copyright">
              &copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>. <?php _e('Powered by', 'html5blank'); ?>
              <a href="//wordpress.org" title="WordPress">WordPress</a> &amp; <a href="//html5blank.com" title="HTML5 Blank">HTML5 Blank</a>.
            </p>
          </div>
        </div>
      </div>  
        


        <!-- copyright -->
        
        <!-- /copyright -->

      </footer>