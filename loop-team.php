<div id="ms-team-section">
    <div id="ms-slider-team-members">
        <?php  $loop = new WP_Query( array( 'post_type' => 'team'));
         if ( $loop->have_posts() ) :
          while ( $loop->have_posts() ) : $loop->the_post(); ?> 
            <div id="ms-wrapper-members-team">
               <?php 
               $image = get_field('image_member');
               if( !empty($image) ): ?>
                <img src="<?php echo $image['url']; ?>" class="ms-image-team-member"alt="<?php echo $image['alt']; ?>" />
               <?php endif; ?>
            </div>
         <?php endwhile;
         endif;?>   
    </div>
 <?php wp_reset_postdata();
?>
</div>