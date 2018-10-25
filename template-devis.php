<?php /* Template Name: Devis Page */ get_header(); ?>

<div class="ms-left-section-fixed">
  <img src="<?php echo get_template_directory_uri(); ?>/img/back-devis.jpg" alt="" class="test-image">
</div>
<div class="ms-right-section-scroll">
  <?php the_content(); ?>
</div>
<?php get_footer('home');?>