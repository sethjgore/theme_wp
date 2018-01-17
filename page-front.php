<?php
 /* Template Name: Front Page */

 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );

 $options = get_field('page_front', 'option');
 $images = get_field('page_front_site_images', 'option');
$number = array_rand($images);
$image = $images[$number]['image'];

$weekly = new WP_Query( [ 'post_type' => 'weekly', 'posts_per_page' => 1 ] );

$weeklyID = $weekly->posts[0]->ID;

?>

<?php get_header(); ?>

<div class="transition-1 flex-auto fb-2 flex flex-column">
        <div class="animated fadeInDown relative z4 flex flex-auto fb-02 width-full items-center justify-end">

    <div class="ticker-wrap">
        <div class="ticker px2" style="-webkit-animation-duration: <?php the_field('page_front_ticker_speed', 'option')?>s;
          animation-duration: <?php the_field('page_front_ticker_speed', 'option')?>;">
          <div class="pr2 ticker__item type-size-menu type-name-sans green-1"><?php the_field('quote', $weeklyID) ?></div>
          <div class="type-name-sans ticker__item type-size-menu height-full trans-black flex items-center px2">Presented by DHIS Interpreting.</div>

          

  <?php while( $weekly->have_posts() ) : $weekly->the_post(); ?>

     <?php // check if the repeater field has rows of data

    if( have_rows('ads') ):

    // loop through the rows of data
    while ( have_rows('ads') ) : the_row();

      $ad = get_row();
      $image = get_field('sponsor_image', $ad);
      print_r($image['thumbnail'])
      // $start = get_field('start_time', $event->ID);
      // $end = get_field('end_time', $event->ID);
      ?>

          <a href="" class="type-name-sans ticker__item type-size-menu height-full trans-black flex items-center px2">Sponsored by<img src="type-size-two height-three" src="<?php echo $image['SRC']?>"><?php the_field('sponsor_name', $ad); ?><?php the_field('sponsor_text', $ad); ?></a>
    <?php
    endwhile;

    else:

    // no rows found
    endif; ?>


      

      <?php // check if the repeater field has rows of data
    if( have_rows('cycle_events') ):

    // loop through the rows of data
    while ( have_rows('cycle_events') ) : the_row();


      $event = get_sub_field('event');
      $start = get_field('start_time', $event->ID);
      $end = get_field('end_time', $event->ID);

      ?>

          <a href="<?php echo get_post_permalink($event->ID) ?>" class="type-name-sans ticker__item type-size-menu height-full trans-black flex items-center px2"><?php echo $event->title; ?> </a>
    <?php
    endwhile;

    else:

    // no rows found
    endif; ?>


<?php endwhile; ?>


          <div class="type-name-sans ticker__item type-size-menu height-full trans-black flex items-center px2">Looking for interpreting services? Call us.</div>
        </div>
</div>
    <div class="flex height-full items-start mt3 mr3"><img src="<?php echo THEME_IMAGES;?>/logo-dhis.png" class="type-size-two height-two"></div>
</div>
    <a href="<?php the_field('leads_to', 'option')?>" class="text-decoration-none relative fb-2 flex-auto flex-column flex">

        <div class="flex justify-center items-center flex-auto fb-2 px3">
        <div style="background: url(<?php echo $image['url'];?>) center center no-repeat; background-size: contain;" class="flex-auto fb-1 animated fadeIn height-full"></div>
      </div>
        <div class="items-center animated fadeInUp  flex quote justify-around flex-auto fb-05 flex">
            <img src="<?php echo THEME_IMAGES;?>/logo-green-large-black-solid.svg" class="type-size-one height-three ml2">
                <div class="slight-radius flex items-center bg-yellow"><div class="p2 type-size-title bold black type-name-serif"><?php the_field('attention_description') ?></div> <img class="type-size-subtitle height-two mr2" src="<?php echo THEME_IMAGES;?>/right-arrow.svg"> </div> </div>

    </a>
  </div>


<?php get_footer(); ?>
