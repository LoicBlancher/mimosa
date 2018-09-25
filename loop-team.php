<div id="ms-team-section">

 <div id="ms-slider-team-members">
          <?php  $loop = new WP_Query( array( 'post_type' => 'team'));
           if ( $loop->have_posts() ) :
            while ( $loop->have_posts() ) : $loop->the_post(); ?> 
              <?php $current_id = get_the_ID(); ?>
              <div rel="<?php echo $current_id; ?>" class="ms-wrapper-members-team">
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

      <div id="ms-slider-info-members">
            <?php  $loop = new WP_Query( array( 'post_type' => 'team'));
             if ( $loop->have_posts() ) :
              $first = true;
              while ( $loop->have_posts() ) : $loop->the_post(); ?> 
                <?php $current_id_info = get_the_ID(); ?>
                <div class="ms-wrapper-info <?php if($first){ echo "act"; $first=false;} ?>" id="info_<?php echo $current_id_info; ?>" rel="<?php echo $current_id_info; ?>">
                  <div class="ms-wrapper-member-name">
                    <?php the_field('position')?>
                    <?php the_field('name')?>
                  </div>
                  <div class="ms-footer-info-team">
                    <div class="ms-footer-tmembers-social">
                      <a href="<?php the_field('facebook_member')?>"><i class="fab fa-facebook-f fa-lg"></i></a>
                      <a href="<?php the_field('twitter_member')?>"><i class="fab fa-twitter fa-lg"></i></a>
                      <a href="<?php the_field('linkedin_member')?>"><i class="fab fa-linkedin-in fa-lg"></i></a>
                    </div>
                    <div class="ms-footer-tmembers-skills">
                      <?php get_taxonomies(); ?>
                    </div>
                    <div class="ms-member-description">
                      <?php the_field('description_member')?>
                    </div>
                  </div>
                </div>
             <?php endwhile;
             endif;?>   
        </div>
     <?php wp_reset_postdata();
    ?>

     
</div>