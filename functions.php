<?php


define( 'MY_THEME_BASE_PATH', get_template_directory() );
define( 'MY_THEME_BASE_URI', get_template_directory_uri() );
define( 'MY_THEME_ASSETS_URI', MY_THEME_BASE_URI.'/assets' );
define( 'MY_THEME_BUILD_URI', MY_THEME_BASE_URI.'/' );
define( 'MY_THEME_VERSION', '3.0.0' );

class DSBTheme {

    /**
     * Holds the class instance.
     *
     * @access  private
     * @var     DSBTheme
     */
    private static $instance;

    /**
     * Returns the instance of this class.
     *
     * @access  public
     * @return  DSBTheme
     */
    public static function instance() {
        if (!! empty(self::$instance)) {
            $class_name = __CLASS__;
            self::$instance = new $class_name;
        }
        return self::$instance;
    }

	protected $theme_enqueue;

	function __construct() {
        add_action( 'wp_enqueue_scripts', [ $this, 'cl_theme_enqueue' ] );
        add_action( 'after_setup_theme', [ $this, 'cl_theme_setup' ] );
	}

	function cl_theme_enqueue() {
        wp_enqueue_script( 'my-theme-main-js', MY_THEME_BUILD_URI. '/js/scripts.js', array( 'jquery' ), MY_THEME_VERSION, false );
        wp_enqueue_style( 'my-theme-main-css', MY_THEME_BUILD_URI. '/style.css', array(), MY_THEME_VERSION, 'all' );
	}

	function cl_theme_setup() {
		add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
	}

}

function dsb_theme_init() {
	return $DSBTheme = DSBTheme::instance();
}

if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page();
    
}

function my_acf_init() {
    
    acf_update_setting('google_api_key', 'AIzaSyDVgQTbBmDGyADEwfz_QiMjiqOMCrqANFY');
}

add_action('acf/init', 'my_acf_init');

// acf_enqueue_uploader();


wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/modal.js', array (), false, true);

dsb_theme_init();


function create_weeklyfeed() {
load_template( TEMPLATEPATH . 'rss-weekly.php'); // You'll create a your-custom-feed.php file in your theme's directory

}
add_action('do_feed_weeklyfeed', 'create_weeklyfeed', 10, 1); // Make sure to have 'do_feed_customfeed'


add_action( 'after_setup_theme', 'my_rss_template' );
/**
 * Register custom RSS template.
 */
function my_rss_template() {
    add_feed( 'weekly', 'my_custom_rss_render' );
}
/**
 * Custom RSS template callback.
 */
function my_custom_rss_render() {
    get_template_part( 'feed', 'weekly' );
}

?>
