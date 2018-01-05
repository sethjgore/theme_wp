<?php acf_form_head(); ?>
<?php
 /* Template Name: Modal */

 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );

 $options = get_field('page_events', 'option');
?>

<?php get_header(); ?>

<div class="flex-column bg-g4 height-full flex items-center justify-center absolute z4 width-full-viewport height-full-viewport top-0 right-0 left-0">
        <div class="absolute z0 width-full height-full bottom-0 top-0 right-0 left-0"></div>
        <div class="flex-auto fb-02 flex width-full justify-end items-start">
        <div class="m2 button type-name-sans type-size-paragraph px3 bg-black button-pill white flex items-center justify-center"><img class="type-size-subtitle height-three" src="<?php echo THEME_IMAGES; ?>/cancel.svg"></div>
        </div>
        <div class="flex-auto fb-1 flex items-center justify-center">
        <div class="bg-white animated fadeInLeft overflow-hidden relative z1">
            <div class="type-size-two" style="background: url(https://thumbs.dreamstime.com/b/free-hand-sketch-new-york-city-skyline-vector-scribble-outline-67170900.jpg) center center;
    background-size: 120%; height: 3em;"></div>
            <div class="px2 pb2 py1 flex flex-column items-center justify-center width-full">
                <label class="type-size-title type-weight-light type-name-sans px3">Start living like a real deaf new yorker!</label>
            <div class="type-name-sans type-size-paragraph">Our newsletter is sent out every Wednesday.</div>
            <div class="button-pill overflow-hidden flex mt1 mb3"><input type="text" class="button bg-blue-royal white px2 inline flex type-size-paragraph">
            <div class="inline button type-name-sans type-size-paragraph px3 bg-orange white" type="submit" text="Add me to the list!">Submit</div>
        </div>
            </div>
        </div>
    </div>
   </div>

<?php get_footer() ?>