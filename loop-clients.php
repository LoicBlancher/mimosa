<div id="ms-wrapper-clients-section">
  <h3>Some of our Clients</h3>
  <p>Some Featured Sponsor Brands</p>
    <?php  $loop = new WP_Query( array( 'post_type' => 'clients'));
     if ( $loop->have_posts() ) :
      while ( $loop->have_posts() ) : $loop->the_post(); ?> 
       <div id="ms-clients-container">
         <?php 
         $image = get_field('image_client');
         if( !empty($image) ): ?>
          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
         <?php endif; ?>
       </div>
     <?php endwhile;
     endif;   
 wp_reset_postdata();
?>
</div>