			<!-- footer -->
			<footer class="footer" role="contentinfo">

				<!-- copyright -->
				<p class="copyright">
					&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>. <?php _e('Powered by', 'html5blank'); ?>
					<a href="//wordpress.org" title="WordPress">WordPress</a> &amp; <a href="//html5blank.com" title="HTML5 Blank">HTML5 Blank</a>.
				</p>
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

		<div id="movilMenu">
			<a href="#menu" class="menu-link">&#9776;</a>
		</div>

		<nav id="menu" class="panel" role="navigation">
			<?php main_menu_nav(); ?>    
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
