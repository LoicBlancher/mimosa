   <div id="ms-slider-testimonials">
        <?php  $loop = new WP_Query( array( 'post_type' => 'testimonials'));
         if ( $loop->have_posts() ) :
          while ( $loop->have_posts() ) : $loop->the_post(); ?>
            <div class="ms_content_testi">
             <span class="ms-quotes-testi"></span>
             <span class="ms-quotes-testi"></span>  
             <p class="largest" class="ms-testi-des"><?php the_field('testimonial_clients')?></p>  
             <?php 
             $image = get_field('image_testimonial');
             if( !empty($image) ): ?>
              <img src="<?php echo $image['url']; ?>" class="ms-image-testimonials"alt="<?php echo $image['alt']; ?>" />
             <?php endif; ?>
             <div class="ms-yellow-line"></div>
             <span class="ms-title-testimonial"><?php the_title();?></span>
             <span class="ms-position-testimonial"><?php the_field('position_testimonial_client')?></span>
           </div>
         <?php endwhile;
         endif;?>   
    </div>
 <?php wp_reset_postdata();
?>
