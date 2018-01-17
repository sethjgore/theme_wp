<?php
/**
 * RSS 0.92 Feed Template for displaying RSS 0.92 Posts feed.
 *
 * @package WordPress
 */


function timed($start, $end){
    if($start && $end){
        echo $start." - ".$end;
      }else if($start){
        echo $start;
      }
}

header( 'Content-Type: ' . feed_content_type( 'rss' ) . '; charset=' . get_option( 'blog_charset' ), true );
$more = 1;

$weekly = new WP_Query( [ 'post_type' => 'weekly', 'posts_per_page' => 1 ] );


echo '<?xml version="1.0" encoding="' . get_option( 'blog_charset' ) . '"?' . '>'; ?>
<rss version="0.92">
<channel>
        <title><?php wp_title_rss();  ?></title>
        <link><?php bloginfo_rss( 'url' ); ?></link>
        <description>
                <?php $id = $weekly->posts[0]->ID; echo get_field('quote', $id);?>
                        
        </description>

        <?php
        /**
         * Fires at the end of the RSS Feed Header.
         *
         * @since 2.0.0
         */
        do_action( 'rss_head' );
        ?>


 <?php while( $weekly->have_posts() ) : $weekly->the_post(); ?>

        

      <?php // check if the repeater field has rows of data
    if( have_rows('cycle_events') ):

    // loop through the rows of data
    while ( have_rows('cycle_events') ) : the_row();


      $event = get_sub_field('event');
      $start = get_field('start_time', $event->ID);
      $end = get_field('end_time', $event->ID);

      ?>
        <item>
          <link><?php echo get_post_permalink($event->ID) ?><link>
           <title><?php echo $event->title; ?> </title>
           <pubDate><?php echo the_field('date', $event->ID) ?> @ <?php timed($start,$end);?></pubDate>
        <description><![CDATA[<?php echo $event->description; ?>]]></description>
                <?php
                /**
                 * Fires at the end of each RSS feed item.
                 *
                 * @since 2.0.0
                 */
                do_action( 'rss_item' );
                ?>
        </item>

    <?php
    endwhile;

    else:

    // no rows found
    endif; ?>


<?php endwhile; ?>

</channel>
</rss>