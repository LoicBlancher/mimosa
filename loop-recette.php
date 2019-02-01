<div id="ms-wrapper-recette-section">
    <div id="ms-scroll-ingredients">
        <?php  $loop = new WP_Query( array( 'post_type' => 'recette'));
         if ( $loop->have_posts() ) :
            while ( $loop->have_posts() ) : $loop->the_post(); ?>
                 <div class="card slide-up">
                     <?php 
                     $image = get_field('image_ingredient');
                     if( !empty($image) ): ?>
                      <img src="<?php echo $image['url']; ?>" class="image" alt="<?php echo $image['alt']; ?>" />
                     <?php endif; ?>
                     <div class="title-footer">
                         <span><?php the_title()?></span>
                     </div>
                     <div class="caption">
                         <p class="caption-content">
                             <?php the_field('description') ;?>
                         </p>
                         <h4 class="cardTitle text-center">
                             <?php the_title()?>
                         </h4>
                     </div>
                 </div>  
            <?php endwhile;
         endif;?>   
    </div>
 <?php wp_reset_postdata();
?>
</div>