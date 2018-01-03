<?php

get_header();
$featured_course_id = 8;
$teachers = new WP_Query( [ 'post_type' => 'teacher', 'posts_per_page' => 4 ] );
$courses = new WP_Query( [ 'post_type' => 'download', 'posts_per_page' => 2 ] );
$posts = new WP_Query( [ 'post_type' => 'post', 'posts_per_page' => 4 ] );

?>

<?php the_content(); ?>

<?php get_footer(); ?>
