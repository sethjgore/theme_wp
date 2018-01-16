<?php
 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );

 if(get_field('start_time') && get_field('end_time')){
        $time = get_field('start_time')." - ".get_field('end_time');
      }else if(get_field('start_time')){
        $time = get_field('start_time');
      }

function timed($start, $end){
    if($start && $end){
        echo $start." - ".$end;
      }else if($start){
        echo $start;
      }
}

$prev->obj = get_adjacent_post(false,'',true);

$prev->link = get_permalink($prev->obj);

$next->obj = get_adjacent_post(false,'',false);

$next->link = get_permalink($next->obj);

?>

<?php get_header(); ?>


<div class="transition-1 flex-auto fb-2 flex flex-column">

<div class="relative fb-1 flex-auto flex" style="background: url() center center; background-size: cover;">
        <div class="bg-white animated fadeIn fb-2 flex items-end flex-auto flex-column">
        <div class="width-full px2 bg-black flex justify-between items-center flex-auto fb-02">

<a href="<?php echo home_url(); ?>"><img src="<?php echo THEME_IMAGES ?>/logo-green-small.svg" class="px2 type-size-one height-one mt2"></a>
<a href="<?php the_field('leads_to', 'option')?>" class="animated slideInDown flex items-center text-decoration-none button bg-blue-royal type-size-subtitle type-name-sans button-pill px2 white"><img class="pl1 height-one type-size-subtitle" src="<?php echo THEME_IMAGES ?>/right-arrow.svg" style="transform: rotate(180deg);">Back</a>
        </div>

        <div class="width-full flex flex-auto fb-2 overflow-auto ">
            <div class="width-full flex-column flex flex-auto fb-1 p2"><div class="flex-auto fb-04 type-size-two mt2 type-name-serif line-height-1 green-1 bold mb4">    <?php the_field('title') ?></div>
            <div class="flex-auto py2 fb-1">
            <div class="type-size-paragraph type-name-serif black line-height-4 pb4">
                    <?php the_field('description') ?>
            </div>
            <div class="flex-auto fb-02"></div>
        </div>
            </div>
            <div class="flex pt3 flex-auto px2 fb-02 height-full items-center flex-column">
            

<?php 
$options = get_field('access_options');


// check
if( $options ): ?>
    <?php foreach( $options as $option ): ?>
           <div class="mb3 items-center flex flex-column">
        <img class="type-size-three height-three" src="<?php echo THEME_IMAGES ?>/<?php echo $option['value']; ?>.svg">
        <div class="line-height-2 pt2 center type-size-menu bold gray type-name-serif">
            <?php echo $option['label']; ?>
        </div>
    </div>
    <?php endforeach; ?>
<?php endif; ?>

 
            
        </div>
        </div>

       
         <div class="animated slideInUp flex fb-03 flex-auto width-full">
            <div class="flex-auto fb-1 bg-green-1 white type-name-serif type-size-subtitle line-height-1 p2 bold">More Events</div>

<?php if($next->obj): ?>

<a href="<?php if($next->link){echo $next->link;} ?> 
" class="text-decoration-none button bg-gray-1 p2 fb-2 flex-auto"><div class="type-name-serif type-size-subtitle bold green-1"></div>
    <div class="type-size-paragraph green-1 bold line-height-2 type-name-serif">
        <?php the_field('title', $next->obj->ID) ?>
    </div>
    

    <div class="pt1 type-size-paragraph trans-black bold line-height-2 type-name-serif">
    <?php the_field('date', $next->obj->ID) ?></div>
    <div class="pt1 type-size-paragraph trans-black bold line-height-2 type-name-serif">
    <?php $start = get_field('start_time', $next->obj->ID);  $end = get_field('start_time', $next->obj->ID); timed($start, $end); ?></div>

</a>
<?php endif; ?>
    <?php if($prev->obj): ?>
    <a href="<?php if($prev->link){echo $prev->link;} ?>" class="text-decoration-none button bg-gray-1 p2 fb-2 flex-auto"><div class="type-name-serif type-size-subtitle bold green-1"></div>
    <div class="type-size-paragraph green-1 bold line-height-2 type-name-serif"> <?php the_field('title', $prev->obj->ID) ?></div>
    <div class="pt1 type-size-paragraph trans-black bold line-height-2 type-name-serif">
    <?php the_field('date', $prev->obj->ID) ?></div>
    <div class="pt1 type-size-paragraph trans-black bold line-height-2 type-name-serif">
    <?php $start = get_field('start_time', $prev->obj->ID);  $end = get_field('start_time', $prev->obj->ID); timed($start, $end); ?></div>

</a>
<?php endif; ?>
        </div>
    </div>

        <?php $location = get_field('location'); ?>
        <div class="flex-auto fb-1 overflow-hidden">
            <div class="bg-black p2"><div class="type-name-serif type-size-subtitle bold green-1">Where?</div>
    <div class="type-size-subtitle white line-height-2 type-name-serif"><?php if($location){ echo $location['address'];} ?></div>
</div>
            <div class="bg-black p2"><div class="type-name-serif type-size-subtitle bold green-1">When?</div>
    <div class="type-size-subtitle white line-height-2 type-name-serif"><?php the_field('date')?></div>
    <div class="type-size-subtitle white line-height-2 type-name-serif"> <?php echo $time; ?></div>

</div>
<div style="background: url(https://maps.googleapis.com/maps/api/staticmap?center=<?php echo $location['lat'].','.$location['lng']; ?>&zoom=13&size=300x600&scale=2&maptype=terrain&markers=size:mid%7Ccolor:red%7C<?php echo $location['lat'].','.$location['lng']; ?>&key=AIzaSyDVgQTbBmDGyADEwfz_QiMjiqOMCrqANFY) center center; background-size: cover;" class="width-full p2 height-full">
    <?php $method = get_field('method_of_rsvp');

    if($method == 'Both'): ?>
    <div onclick="toggle('#modalContact')" class="mb2  animated jackInTheBox slight-radius button bg-red p2 flex">
    <div class="flex-auto fb-2">
        <div class="line-height-2 pb1 type-name-serif type-size-subtitle bold black"><?php the_field('contact_message') ?></div>
        <div class="pt2 type-size-paragraph trans-black line-height-2 type-name-serif"><?php the_field('contact_via_email') ?></div>
            </div>
        <div class="flex-auto flex items-center fb-03">
            <img src="<?php echo THEME_IMAGES ?>/right-arrow.svg" class="type-size-three width-two">
        </div>
    </div> 
    <a href="<?php the_field('rsvp_link') ?>"  class="mb2  text-decoration-none animated jackInTheBox slight-radius button bg-red p2 flex">
    <div class="flex-auto fb-2">
        <div class="line-height-2 pb1 type-name-serif type-size-subtitle bold black">Go to website to RSVP</div>
        <div class="pt2 type-size-paragraph trans-black line-height-2 type-name-serif"></div>
            </div>
        <div class="flex-auto flex items-center fb-03">
            <img src="<?php echo THEME_IMAGES ?>/right-arrow.svg" class="type-size-three width-two">
        </div>
    </a>
    <?php elseif($method == 'Email'):?>
    <div onclick="toggle('#modalContact')" class=" mb2  animated jackInTheBox slight-radius button bg-red p2 flex">
    <div class="flex-auto fb-2">
        <div class="line-height-2 pb1 type-name-serif type-size-subtitle bold black"><?php the_field('contact_message') ?></div>
        <div class="pt2 type-size-paragraph trans-black line-height-2 type-name-serif"><?php the_field('contact_via_email') ?></div>
            </div>
        <div class="flex-auto flex items-center fb-03">
            <img src="<?php echo THEME_IMAGES ?>/right-arrow.svg" class="type-size-three width-two">
        </div>
    </div> 
    <?php elseif($method == 'Website'): ?>
        <a href="<?php the_field('rsvp_link')?>"  class="mb2 text-decoration-none  animated jackInTheBox slight-radius button bg-red p2 flex">
    <div class="flex-auto fb-2">
        <div class="line-height-2 pb1 type-name-serif type-size-subtitle bold black"><?php the_field('rsvp_message') ?></div>
        <div class="pt2 type-size-paragraph trans-black line-height-2 type-name-serif"></div>
            </div>
        <div class="flex-auto flex items-center fb-03">
            <img src="<?php echo THEME_IMAGES ?>/right-arrow.svg" class="type-size-three width-two">
        </div>
    </a> 
    <?php endif; ?>


    <?php if(get_field('link')): ?>
    <a href="<?php the_field('link') ?>" class=" mb2 animated jackInTheBox slight-radius button bg-white p2 flex text-decoration-none">
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

<?php if(get_field('graphic')['url']): ?>
<div onclick="toggle('#modalMedia')"  class="mb2  text-decoration-none animated jackInTheBox slight-radius button bg-green-1 p2 flex">
    <div class="flex-auto fb-2">
        <div class="line-height-2 pb1 type-name-serif type-size-subtitle bold black">See Flyer</div>
        <div class="pt2 type-size-paragraph trans-black line-height-2 type-name-serif"></div>
            </div>
        <div class="flex-auto flex items-center fb-03">
            <img src="<?php echo THEME_IMAGES ?>/right-arrow.svg" class="type-size-three width-two">
        </div>
    </div>   

</div>
        </div>
    </div>
  
  </div>
<?php endif;?>

<div id="modalMedia" class="hide flex-column bg-g4 height-full flex items-center justify-center absolute z4 width-full-viewport height-full-viewport top-0 right-0 left-0">


        <div onclick="toggle('#modalMedia')" class="absolute z0 width-full height-full bottom-0 top-0 right-0 left-0"></div>
        <div class="flex-auto fb-01 flex width-full justify-end items-start">
        <div onclick="toggle('#modalMedia')" class="m2 button type-name-sans type-size-paragraph px3 bg-black button-pill white flex items-center justify-center"><img class="type-size-subtitle height-three" src="<?php echo THEME_IMAGES;?>/cancel.svg"></div>
        </div>
        <div class="flex-auto fb-1 flex items-center justify-center">
        <div visible="slideInUp" class="bg-white animated overflow-hidden relative z1 flex flex-column">
         <img style="max-width: 80vw;
    max-height: 80vh;" class="height-full" src="<?php  $graphic = get_field('graphic')['url']; echo $graphic;?>">

    </div>
            </div>
        </div>
            </div>
        </div>
    </div>
   </div>

<div id="modalContact" class="hide flex-column bg-g4 height-full flex items-center justify-center absolute z4 width-full-viewport height-full-viewport top-0 right-0 left-0">

        <div onclick="toggle('#modalContact')" class="absolute z0 width-full height-full bottom-0 top-0 right-0 left-0"></div>
        <div class="flex-auto fb-01 flex width-full justify-end items-start">
        <div onclick="toggle('#modalContact')" class="m2 button type-name-sans type-size-paragraph px3 bg-black button-pill white flex items-center justify-center"><img class="type-size-subtitle height-three" src="<?php echo THEME_IMAGES;?>/cancel.svg"></div>
        </div>
        <div class="flex-auto fb-1 flex items-center justify-center">
        <div visible="fadeInLeft" class="bg-white animated overflow-hidden relative z1 flex flex-column">
            <div class="px2 pb1 pt2 justify-center flex flex-column items-center">
                <div class="mb2 type-size-paragraph black user-select-none pointer-events-none">Copy the email address below</div><div class="mb3 bg-yellow button button-pill px2 type-size-three bold ">
                <?php the_field('contact_via_email') ?>
            </div>
        </div>
        <div class="justify-center fb-1 flex-auto flex items-center bg-gray-1">
        <a href="mailto:<?php the_field('contact_via_email') ?>" class="bg-blue-royal button-pill button m3 px2 text-decoration-none type-size-subtitle white"> open in your email app</a></div>

    </div>
            </div>
        </div>
            </div>
        </div>
    </div>
   </div>



<?php get_footer(); ?>
