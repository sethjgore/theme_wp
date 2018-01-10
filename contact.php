<?php acf_form_head(); ?>
<?php
 /* Template Name: Contact */

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
        <div class="flex-auto fb-1 flex bg-green-1">
        <div class="flex flex-column items-start justify-center pr2 pl3 flex-auto fb-05 bg-green-1">
            <div class="bold line-height-2 type-size-title type-name-sans white">
                Submit <br> something!
            </div>

            <div class="mt2 line-height-2 type-size-paragraph type-name-sans white">
                Send your event and get people to come!
            </div>
        </div>
        <div id="deafnyc-contact" class="bg-white animated fadeIn bg-white flex-auto fb-1 overflow-auto " style="-webkit-overflow-scrolling: touch !important;">
        <div id="popup-id" class="relative z1">
            <div class="py1 bg-blue-royal
            center bold type-name-sans type-size-title white">New Event Form
            </div>
            <?php acf_form(array(
                    'html_updated_message'  => '<div class="py1 bg-red center bold type-name-sans type-size-title white">We got your submission!<div class="type-name-sans type-size-subtitle trans-black">Feel free to add more</div></div>',
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