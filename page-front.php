<?php
 /* Template Name: Front Page */

 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );

 $options = get_field('page_front', 'option');
 $images = get_field('page_front_site_images', 'option');
$number = array_rand($images);
$image = $images[$number]['image'];

// print_r($image);

?>

<?php get_header(); ?>

<div class="transition-1 flex-auto fb-2 flex flex-column">
        <div class="animated fadeInDown relative z4 flex flex-auto fb-01 width-full items-center justify-end">

    <div class="ticker-wrap">
        <div class="ticker px2">
          <div class="pr2 ticker__item type-size-menu green">We must always take sides. Neutrality helps the oppressor never the victim.<span class="gray bold nowrap"> - Elie Wiese</span></div>
          <div class="ticker__item type-size-menu height-full trans-black flex items-center px2">Sponsored by Sprint Communications</div>
        </div>
</div>
    <div class="slight-opacity flex height-full items-start p2"><img src="<?php echo THEME_IMAGES;?>/logo-dhis.png" class="type-size-two height-three mx2"></div>
</div>
    <a href="<?php the_field('leads_to', 'option')?>" class="text-decoration-none relative fb-2 flex-auto flex-column flex">

        <div class="flex justify-center items-center flex-auto fb-2 px3">
        <div style="background: url(<?php echo $image['url'];?>) center center no-repeat; background-size: contain;" class="flex-auto fb-1 animated fadeIn height-full"></div>
      </div>
        <div class="items-center animated fadeInUp  flex quote justify-around flex-auto my2 fb-04 flex">
            <img src="<?php echo THEME_IMAGES;?>/logo-green-large-black.svg" class="type-size-one height-three ml2">
                <div class="slight-radius flex items-center bg-yellow"><div class="p2 type-size-title bold black type-name-serif"><?php the_field('attention_description') ?></div> <img class="type-size-subtitle height-two mr2" src="<?php echo THEME_IMAGES;?>/right-arrow.svg"> </div> </div>

    </a>
  </div>


<?php get_footer(); ?>
