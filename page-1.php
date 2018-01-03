<?php
 /* Template Name: Page 1 */

 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );

?>

<?php get_header(); ?>

<div><?php get_template_directory_uri(); ?>

<div class="transition-1 flex-auto fb-2 flex flex-column">
    <div id="wrapper" style="
    background-size: cover; height: 100vh;
width: 100vw; " class="absolute width-full-viewport height-full-viewport z0 pointer-events-none bg-green"></div>

    <a href="/made/deafnycEventAll" class="text-decoration-none relative fb-2 flex-auto flex-column flex">
        <div class="animated fadeInDown flex flex-auto fb-02 width-full items-center justify-end">
    <div class="slight-opacity flex height-full items-start p2"><img src="<?php echo THEME_IMAGES; ?>/logo-dhis.png" class="type-size-two height-three mx2"></div>
</div>
        <div class="flex justify-center flex-auto fb-2 ">
        <img class="animated fadeInOut height-full" src="http://allthebuildingsinnewyork.com/new/wp-content/uploads/2016/08/jgh_town_19greenest_low.jpg">
    </div>
        <div class="items-center animated fadeInUp  flex quote justify-around flex-auto pr2 my2 fb-04 flex">
            <img src="<?php echo THEME_IMAGES?>/logo-green-large-black.svg" class="type-size-one height-three ml2">
                <div class="slight-radius flex items-center bg-yellow"><div class="p2 type-size-title bold black type-name-serif"> Do something</div> <img class="type-size-subtitle height-two mr2" src="<?php echo THEME_IMAGES?>/right-arrow.svg"> </div> </div>
        <div class="flex-auto fb-01">
    <div class="ticker-wrap bg-green-1">
        <div class="ticker px2 bg-green-1">
          <div class="pr2 ticker__item yellow">We must always take sides. Neutrality helps the oppressor never the victim.<span class="gray bold nowrap"> - Elie Wiese</span></div>
          <div class="ticker__item height-full white flex items-center px2">Sponsored by Sprint Communications</div>
          <a class="ticker__item white px2">Whitney Museum Tour —&nbsp;ASL First, Deaf Priority, Voice Interpreted</a>
          <a class="ticker__item white px2">ASL Cabaret —&nbsp;Something, Something Else, 10pm</a>
          <a class="ticker__item white px2">Deaf New Years at Deaf Club of New York —&nbsp;$20 admissions</a>
          <a class="ticker__item white px2">Sponsored by New York Deaf Theatre</a>
        </div>
    </div>
</div>
    </a>
  </div>


<?php get_footer(); ?>
