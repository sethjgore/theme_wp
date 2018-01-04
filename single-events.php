<?php
 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );
?>

<?php get_header(); ?>
<?php if( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    
    <?php the_field('title') ?>

    <?php the_field('description') ?>

    <?php the_field('start_time') ?>
    <?php the_field('end_time') ?>
    <?php the_field('date') ?>
    <?php the_field('location') ?>


    <?php the_field('link') ?>
    <?php get_field('access_options') ?>
    <?php the_field('graphic')['url'] ?>
    <?php the_field('method_of_rsvp') ?>
    <?php the_field('contact_via_email') ?>
    <?php the_field('contact_message') ?>
    <?php the_field('rsvp_link') ?>

<?php endwhile; endif;?>

<?php get_footer(); ?>
