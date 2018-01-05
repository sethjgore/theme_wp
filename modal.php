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
        <div class="flex-auto fb-1 flex items-center justify-center">
        <div id="popup-id" class="bg-white animated fadeInLeft overflow-hidden relative z1">
            <?php acf_form(array(
                    'post_id'       => 'new_post',
                    'new_post'      => array(
                        'post_type'     => 'event',
                        'post_status'       => 'draft'
                    ),
                    'submit_value'      => 'Submit your event'
                )); ?>
        </div>
    </div>
   </div>

<?php get_footer() ?>