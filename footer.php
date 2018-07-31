			<!-- footer -->
			<footer class="footer" role="contentinfo">
			<div class="container">
				<div class="row" id="mg-footer-first">
					<div class="col-12 col-md-6 col-lg-3 mg-menu-ser-footer">
						<h6>Mimosa Paris</h6>
						<ul>
							<li><!-- address --></li>
							<li><!-- address 2 --></li>
							<li><!-- phone --></li>
							<li><!-- mail --></li>
						</ul>
					</div>
					<div class="col-12 col-md-6 col-lg-3 mg-menu-ser-footer">
							<h6>Services</h6>
							<?php footer_servicesMenu(); ?>
					</div>
					<div class="col-12 col-md-6 col-lg-3 mg-menu-ser-footer">
						<h6>Mimosa</h6>
						<?php footer_mimosaMenu(); ?>
					</div>
					<div class="col-12 col-md-6 col-lg-3">
						<h6>Restez en contact</h6>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div class="row" id="mg-footer-second">
					<div class="col-12 col-md-6 col-lg-6">
						<p class="copyright">
							&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>. <?php _e('Powered by', 'html5blank'); ?>
							<a href="//wordpress.org" title="WordPress">WordPress</a> &amp; <a href="//html5blank.com" title="HTML5 Blank">HTML5 Blank</a>.
						</p>
					</div>
					<div class="col-12 col-md-6 col-lg-6">
						<div id="mg-footer-menu-terms">
							<?php footer_terms(); ?>
						</div>
					</div>				
				</div>
			</div>	
				


				<!-- copyright -->
				
				<!-- /copyright -->

			</footer>
			<!-- /footer -->

		</div>
		<!-- /wrapper -->
		
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
			   <div id="mg-menu-botom-p">
			      <div id="mg-menu-terms-main">
			        <div id="mg-social-main-menu">
			          <i class="fab fa-facebook-f fa-lg"></i>
			          <i class="fab fa-twitter fa-lg"></i>
			          <i class="fab fa-linkedin-in fa-lg"></i>
			          <i class="fab fa-pinterest-p fa-lg"></i>
			        </div>
			        <?php footer_terms(); ?>
			      </div>
			      <div id="mg-menu-logo-main">
			      </div>
		      </div>
		      <div class="mg-close-btn-main-menu"></div>
		  </div>      
		</div>     
		</div>

		<nav id="menu" class="panel" role="navigation">
		  <div id="logoMovil">
		  	<img src="https://flaticons.net/gd/makefg.php?i=icons/People/Chef.png&r=255&g=255&b=255" alt="">
		  </div>
		  <?php main_menu_nav(); ?>
		  <div id="mg-social-main-menu-movil">
		    <i class="fab fa-facebook-f fa-lg"></i>
		    <i class="fab fa-twitter fa-lg"></i>
		    <i class="fab fa-linkedin-in fa-lg"></i>
		    <i class="fab fa-pinterest-p fa-lg"></i>
		  </div>
		  <a class="yellowBtn-movile">
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
