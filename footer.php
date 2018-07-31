			<!-- footer -->
			<footer class="footer" role="contentinfo">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-6 col-lg-3">
						<h5>Mimosa Paris</h5>
						<ul>
							<li><!-- address --></li>
							<li><!-- address 2 --></li>
							<li><!-- phone --></li>
							<li><!-- mail --></li>
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
						<h6>Restez en contact</h6>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div class="row">
					<div class="col-12 col-md-6 col-lg-6"></div>
					<div class="col-12 col-md-6 col-lg-6"></div>				
				</div>
			</div>	
				


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
