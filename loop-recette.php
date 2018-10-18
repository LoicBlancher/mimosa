<div id="ms-wrapper-recette-section">
    <div id="ms-scroll-ingredients">
        <?php  $loop = new WP_Query( array( 'post_type' => 'recette'));
         if ( $loop->have_posts() ) :
            while ( $loop->have_posts() ) : $loop->the_post(); ?>
                 <div id="ms-ingredients-card">
                     <?php 
                     $image = get_field('image_ingredient');
                     if( !empty($image) ): ?>
                      <img src="<?php echo $image['url']; ?>" id="ms-ingredients-image" alt="<?php echo $image['alt']; ?>" />
                     <?php endif; ?>
                     <div id="ms-footer-ingredients-card">
                       <span id="ms-text-footer"><?php the_title()?></span>
                     </div> 
                 </div>  
            <?php endwhile;
         endif;?>   
    </div>
 <?php wp_reset_postdata();
?>
</div>