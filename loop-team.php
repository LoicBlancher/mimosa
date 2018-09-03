<div id="ms-team-section">
    <div id="ms-slider-team-members">
        <?php  $loop = new WP_Query( array( 'post_type' => 'team'));
         if ( $loop->have_posts() ) :
          while ( $loop->have_posts() ) : $loop->the_post(); ?> 
            <div id="ms-info-member">
              <h4><?php the_field('position') ?></h4>
              <h3><?php the_field('name') ?></h3>
            </div>
             <?php 
             $image = get_field('image_member');
             if( !empty($image) ): ?>
              <img src="<?php echo $image['url']; ?>" id="ms-image-team-member"alt="<?php echo $image['alt']; ?>" />
             <?php endif; ?>
             <div id="ms-footer-members">
                <div id="ms-social-members">
                   <span>Social media</span>
                   <ul>
                     <li><a href="<?php the_field('facebook_member')?>"><i class="fab fa-facebook-f fa-lg"></a></i></li>
                     <li><a href="<?php the_field('twitter_member')?>"><i class="fab fa-twitter fa-lg"></i></a></li>
                     <li><a href="<?php the_field('linkedin_member')?>"><i class="fab fa-linkedin-in fa-lg"></i></a></li>
                   </ul>
                </div>
                <div id="ms-skills-members">
                  <span class="ms-uppercase-black"><?php get_taxonomies(); ?></span>
                </div>
                <div id="ms-member-description">
                  <?php the_field('description_member')?>
                </div>
             </div>
         <?php endwhile;
         endif;?>   
    </div>
 <?php wp_reset_postdata();
?>
</div>