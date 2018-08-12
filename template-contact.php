<?php /* Template Name: Contact */ get_header(); ?>
    <div class="ms-left-section-fixed">
      <img src="<?php echo get_template_directory_uri(); ?>/img/contact_map_mimosa.png" alt="" class="ms-contact-map">
    </div>
    <div class="ms-right-section-scroll">
      <?php the_content(); ?>
    </div>
<?php get_footer('home');?>