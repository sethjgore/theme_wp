<?php acf_form_head(); ?>
<?php
 /* Template Name: Modal */

 define( 'THEME_IMAGES', get_template_directory_uri().'/images' );

 $options = get_field('page_events', 'option');

define( 'WP_DEBUG', true );
 define( 'WP_DEBUG_DISPLAY', true );
?>

<?php get_header(); ?>

<?php echo "<script type='text/javascript'>
(function($) {
    
    // setup fields
    acf.do_action('append', $('#popup-id'));
    
})(jQuery); 
</script>" ?>

<div class="flex-column bg-g4 height-full flex items-center justify-center absolute z4 width-full-viewport height-full-viewport top-0 right-0 left-0">
        <div class="absolute z0 width-full height-full bottom-0 top-0 right-0 left-0"></div>
        <div class="flex-auto fb-02 flex width-full justify-end items-start">
        <div class="m2 button type-name-sans type-size-paragraph px3 bg-black button-pill white flex items-center justify-center"><img class="type-size-subtitle height-three" src="<?php echo THEME_IMAGES; ?>/cancel.svg"></div>
        </div>
        <div class="flex-auto fb-1 flex bg-gray-1">
        <div class="flex flex-column items-start justify-center pr2 pl3 flex-auto fb-05 bg-green-1">
            <div class="bold line-height-2 type-size-title type-name-sans white">
                Submit <br> something!
            </div>

            <div class="mt2 line-height-2 type-size-paragraph type-name-sans white">
                Send your event and get people to come!
            </div>
        </div>
        <div id="deafnyc-contact" class="bg-white flex-auto fb-1 overflow-auto">
        <div id="popup-id" class="bg-white animated fadeInLeft relative z1">
            <?php acf_form(array(
                    'html_updated_message'  => '<div class="bg-red center bold type-name-sans type-size-title white">We got your submission!</div>',
                    'post_id'       => 'new_post',
                    'new_post'      => array(
                        'post_type'     => 'events',
                        'post_status'       => 'draft'
                    ),
                    'submit_value'      => 'Submit your event'
                )); ?>
        </div>
    </div>
    </div>
   </div>

<?php get_footer() ?>