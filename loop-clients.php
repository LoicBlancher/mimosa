<div id="ms-wrapper-clients-section">
      <h4>Some of our Clients</h4>
      <p class="gray">Some Featured Sponsor Brands</p>
    <div id="ms-slider-clients">
        <?php  $loop = new WP_Query( array( 'post_type' => 'clients'));
         if ( $loop->have_posts() ) :
          while ( $loop->have_posts() ) : $loop->the_post(); ?> 
             <?php 
             $image = get_field('image_client');
             if( !empty($image) ): ?>
              <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
             <?php endif; ?>
         <?php endwhile;
         endif;?>   
    </div>
 <?php wp_reset_postdata();
?>
</div>