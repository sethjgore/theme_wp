<?php
 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );

 if(get_field('start_time') && get_field('end_time')){
        $time = get_field('start_time')." - ".get_field('end_time');
      }else if(get_field('start_time')){
        $time = get_field('start_time');
      }
?>

<?php get_header(); ?>


<div class="transition-1 flex-auto fb-2 flex flex-column">

<div class="relative fb-1 flex-auto flex" style="background: url() center center; background-size: cover;">
        <div class="bg-white animated fadeIn fb-2 flex items-end flex-auto flex-column">
        <div class="width-full px2 bg-black flex justify-between items-center flex-auto fb-02">

<a href="/made/deafnyc"><img src="<?php echo THEME_IMAGES ?>/logo-green-small.svg" class="px2 type-size-one height-one mt2"></a>
<a href="/made/deafnycEventAll" class="animated slideInDown flex items-center text-decoration-none button bg-blue-royal bold button-pill px2 white"><img class="pl1 height-one type-size-subtitle" src="<?php echo THEME_IMAGES ?>/right-arrow.svg" style="transform: rotate(180deg);">Back</a>
        </div>

        <div class="flex flex-auto fb-2">
            <div class="width-full flex-column flex flex-auto fb-1 p2"><div class="type-size-two mt2 type-name-serif line-height-1 green-1 bold mb4">    <?php the_field('title') ?></div>
            <div class="flex flex-auto py2 fb-1">
            <div class="type-size-paragraph type-name-serif black flex-auto fb-1 line-height-4">
                    <?php the_field('description') ?>
            </div>
            <div class="flex-auto fb-02"></div>
        </div>
            </div>
            <div class="flex pt3 flex-auto px2 fb-02 height-full items-center flex-column">
            
                <div class="mb3 items-center flex flex-column">
        <img class="type-size-three height-three" src="<?php echo THEME_IMAGES ?>/like.svg">
        <div class="line-height-2 pt2 center type-size-menu bold gray type-name-serif">
            Deaf Priority
        </div>
    </div>
             
                <div class="mb3 items-center flex flex-column">
        <img class="type-size-three height-three" src="https://visualpharm.com/assets/850/Sign%20Language%20Interpretation-595b40b85ba036ed117de2bb.svg">
        <div class="line-height-2 pt2 center type-size-menu bold gray type-name-serif">
            Voice Interpreted
        </div>
    </div>
             
                <div class="mb3 items-center flex flex-column">
        <img class="type-size-three height-three" src="<?php echo THEME_IMAGES ?>/asl-hand.jpg">
        <div class="line-height-2 pt2 center type-size-menu bold gray type-name-serif">
            ASL First
        </div>
    </div>
             
                <div class="mb3 items-center flex flex-column">
        <img class="type-size-three height-three" src="<?php echo THEME_IMAGES ?>/cc.svg">
        <div class="line-height-2 pt2 center type-size-menu bold gray type-name-serif">
            Captioned
        </div>
    </div>
            
        </div>
        </div>

       
         <div class="animated slideInUp flex fb-03 flex-auto width-full">
            <div class="flex-auto fb-1 bg-green-1 white type-name-serif type-size-subtitle line-height-1 p2 bold">More Events..</div>
            <div class="button bg-gray-1 p2 fb-2 flex-auto"><div class="type-name-serif type-size-subtitle bold green-1"></div>
    <div class="type-size-paragraph green-1 bold line-height-2 type-name-serif">NYDT + ASL Cabaret</div>
    <div class="pt1 type-size-paragraph trans-black bold line-height-2 type-name-serif">
    Dec 12 2017</div>
    <div class="pt1 type-size-paragraph trans-black bold line-height-2 type-name-serif">
    1:00pm - 2:30pm</div>

</div>
         <div class="button bg-gray-1 p2 fb-2 flex-auto"><div class="type-name-serif type-size-subtitle bold green-1"></div>
    <div class="type-size-paragraph green-1 bold line-height-2 type-name-serif">NYDT + ASL Cabaret</div>
    <div class="pt1 type-size-paragraph trans-black bold line-height-2 type-name-serif">
    Dec 12 2017</div>
    <div class="pt1 type-size-paragraph trans-black bold line-height-2 type-name-serif">
    1:00pm - 2:30pm</div>

</div>
        </div>
    </div>
        <div class="flex-auto fb-1" style="background: url(http://img.mensjournal.com/article-leads-horizontal/screen-shot-2017-03-29-at-13810-pm-a887f892-960b-4efe-8de0-fa2501d9134f.png) center center; background-size: cover;">
            <div class="bg-black p2"><div class="type-name-serif type-size-subtitle bold green-1">Where?</div>
    <div class="type-size-subtitle white line-height-2 type-name-serif">99 Gansevoort St, New York, NY 10014</div>
</div>
            <div class="bg-black p2"><div class="type-name-serif type-size-subtitle bold green-1">When?</div>
    <div class="type-size-subtitle white line-height-2 type-name-serif"><?php the_field('date')</div>
    <div class="type-size-subtitle white line-height-2 type-name-serif"> <?php echo $time; ></div>

</div>
            <div class="m2 animated jackInTheBox slight-radius button bg-red p2 flex">
    <div class="flex-auto fb-2">
        <div class="line-height-2 pb1 type-name-serif type-size-subtitle bold black">Want to go? Send an email.</div>
        <div class="pt2 type-size-paragraph trans-black line-height-2 type-name-serif">access@whitney.org</div>
            </div>
        <div class="flex-auto flex items-center fb-03">
            <img src="<?php echo THEME_IMAGES ?>/right-arrow.svg" class="type-size-three width-two">
        </div>

</div>
    <?php if(get_field('link')): ?>
    <a href="<?php the_field('link') ?>" class="m2 animated jackInTheBox slight-radius button bg-white p2 flex">
        <div class="flex flex-auto items-center fb-2">
            <div class="flex-auto flex items-center fb-03">
                <img src="<?php echo THEME_IMAGES ?>/info.svg" class="type-size-three width-two">
            </div>
            <div class="line-height-2 type-name-serif type-size-paragraph bold black">More Information</div>
                </div>
            <div class="flex-auto flex items-center fb-03">
                <img src="<?php echo THEME_IMAGES ?>/right-arrow.svg" class="type-size-three width-two">
        </div>
    </a>
<?php endif; ?>
        </div>
    </div>
  
  </div>
<div class="flex-auto flex-column flex fb-03 type-size-menu">

<?php if( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    

   
    
    <?php the_field('date') ?>
    <?php the_field('location') ?>
    <?php get_field('access_options') ?>
    <?php $graphic = get_field('graphic'); echo $graphic['url'] ?>
    <?php the_field('method_of_rsvp') ?>
    <?php the_field('contact_via_email') ?>
    <?php the_field('contact_message') ?>
    <?php the_field('rsvp_link') ?>
</div>
<?php endwhile; endif;?>

<?php get_footer(); ?>
