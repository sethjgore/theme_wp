<?php
 /* Template Name: Event List */

 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );

 $options = get_field('page_events', 'option');
?>

<?php get_header(); ?>

<?php

  $teachers = new WP_Query( [ 'post_type' => 'cycles', 'posts_per_page' => 1 ] );
?>

<div class="relative fb-1 flex-auto flex" style="background: url(), #e2e2e2 center center; background-size: cover;">
        <div class="flex-auto fb-1 mx2">
            <div class="height-full flex flex-column justify-end"> 
            <a href="<?php echo home_url(); ?>" class="flex height-full items-center"><img src="<?php echo THEME_IMAGES;?>/logo-green-large-black.svg" class="my4 width-full type-size-two height-three"></a>
            <div class="animated slideInUp mb2 slight-radius button bg-yellow p2">
        <div class="flex">
    <div class="flex-auto fb-2">
        <div class="line-height-2 pb1 type-name-serif type-size-subtitle bold black">Don't miss out!</div>
        <div class="pt2 type-size-paragraph trans-black line-height-2 type-name-serif">Get weekly updates.</div>
            </div>
        <div class="flex-auto flex items-center fb-03">
            <img src="<?php echo THEME_IMAGES;?>/right-arrow.svg" class="type-size-three width-two">
        </div>
</div>
</div>
            <div class="animated slideInUp mb2 slight-radius button bg-blue-royal p2">
        <div class="flex">
    <div class="flex-auto fb-2">
        <div class="line-height-2 pb1 type-name-serif items-center type-size-subtitle bold trans-black flex"><img class="pr2 type-size-subtitle height-one " src="/contact.svg"><img class="pr2 type-size-title height-two" src="<?php echo THEME_IMAGES;?>/schedule.svg"><img class="pr2 type-size-subtitle height-two" src="<?php echo THEME_IMAGES;?>/chat.svg"></div>
        <div class="type-size-paragraph white italic line-height-2 type-name-serif">Questions, events, submissions accepted!</div>
            </div>
        <div class="flex-auto flex items-center fb-03">
            <img src="<?php echo THEME_IMAGES;?>/right-arrow.svg" class="type-size-three width-two">
        </div>
</div>
</div> </div>
        </div>
        <div style="overflow-y: scroll !important; -webkit-overflow-scrolling: touch !important;" class="animated fadeIn fb-2 overflow-auto items-end flex-auto flex-column fb-1">
            <div class="p2 type-name-serif type-size subtitle flex black-trans">
                <a href="<?php echo $options['dhis_logo_link'] ?>" class="flex-auto fb-02 items-center flex justify-end text-decoration-none"><img src="<?php echo THEME_IMAGES;?>/logo-dhis.png" class="type-size-subtitle height-three mx2">
                <div class="flex items-center">
            <img src="<?php echo THEME_IMAGES;?>/right-arrow.svg" class="type-size-paragraph width-two">
        </div></a></div>
       

  <?php while( $teachers->have_posts() ) : $teachers->the_post(); ?>
      

      <?php // check if the repeater field has rows of data
    if( have_rows('cycle_events') ):

    // loop through the rows of data
    while ( have_rows('cycle_events') ) : the_row();


      $event = get_sub_field('event');
      if($event->start_time && $event->end_time){
        // $time = $event->$start_time." - ".$event->end_time;
      }else if($event->start_time){
        // $time = date($event->start_time);

      }
     
      ?>

          <a href="<?php echo get_post_permalink($event->ID) ?>" class="p2 bg-white text-decoration-none items-center mb2 width-full flex"><div><div class="type-size-subtitle line-height-1 m1 type-name-serif green-1 bold line-height-2"><?php echo $event->title; ?> </div></div>
        
        <div class="flex flex-auto fb-02 height-full items-center flex-column">
            
                <img class="my1 type-size-subtitle height-two" src="<?php echo THEME_IMAGES;?>/like.svg">
             
                <img class="my1 type-size-subtitle height-two" src="https://visualpharm.com/assets/850/Sign%20Language%20Interpretation-595b40b85ba036ed117de2bb.svg">
            
        </div>
        <div class="flex flex-column flex-auto p1 fb-1">
            <div class="type-size-menu type-name-serif black flex-auto fb-1 line-height-4">
              <?php echo $event->description; ?></div>
            <div class="trans-black type-size-menu type-name-serif italic line-height-4"><?php echo $event->date; ?><?if($time): echo "/".$time ?>   </div>
        </div>
        
    </a>

    <?php
    endwhile;

    else:

    // no rows found
    endif; ?>


<?php endwhile; ?>



        <div class="flex bg-green-1 flex-column p4 type-size-three items-center">
            <div class="center line-height-2 type-name-sans white type-size-three bold">
                Find yourself in the city.
            </div>
            <div>
            <div class="center pt4 line-height-2 type-name-sans trans-black type-size-paragraph bold">
                Presented by DHIS. <br>
      

      <?php // check if the repeater field has rows of data
    if( $options['sponsors'] ): ?>
    
    <div class="flex center justify-center items-center py2 trans-black type-name-sans type-size-paragraph">Sponsored by</div>
    <div class="flex justify-around items-center">
    
    <?php // loop through the rows of data
    while ( have_rows('page_events_sponsors', 'option') ) : the_row();


      $sponsor = get_sub_field('sponsor');
     
      ?>
      <div class="center type-size-paragraph bold type-name-sans trans-black"><?php echo $sponsor->sponsor_name ?></div>

      <?php endwhile;?> </div><?php endif;?>
            </div>
        </div>
        </div>

    </div>

    </div>


<?php get_footer(); ?>
