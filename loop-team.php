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
                    <span class="ms-name-tposition"><?php the_field('position')?></span>
                    <h3 class="ms-name-tmember"><?php the_field('name')?></h3>
                  </div>
                  <div class="ms-footer-info-team">
                    <div class="ms-footer-tmembers-social">
                      <span class="ms-title-footer">social media</span>
                      <div id="wrapper-icons-mteam">
                        <a  href="<?php the_field('facebook_member')?>"><i class="fab fa-facebook-f fa-lg"></i></a>
                        <a href="<?php the_field('twitter_member')?>"><i class="fab fa-twitter fa-lg"></i></a>
                        <a href="<?php the_field('linkedin_member')?>"><i class="fab fa-linkedin-in fa-lg"></i></a>
                      </div>
                    </div>
                    <div class="ms-footer-tmembers-skills">
                      <span class="ms-title-footer">skills</span>
                      <?php $terms_as_text =   the_terms( $current_id_info, 'skills', '<span>', ',', '</span>');
                      echo strip_tags($terms_as_text);
                      ?>  
                    </div>
                    <div class="ms-member-description">
                      <p><?php the_field('description_member')?></p>
                    </div>
                  </div>
                </div>
             <?php endwhile;
             endif;?>   
        </div>
     <?php wp_reset_postdata();
    ?>
    <a href="http://mimosa.graditest.com/contact/" class="ms-transparent-btn-black-text hvr-float-shadow" id="ms-cta-team">contactez nous</a>
     
</div>