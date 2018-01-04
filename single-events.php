<?php
 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );
?>

<?php get_header(); ?>
YO
<?php if( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    Hello!
<?endwhile; endif;?>

<?php get_footer(); ?>
