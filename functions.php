<?php
/*
 *  Author: Todd Motto | @toddmotto
 *  URL: html5blank.com | @html5blank
 *  Custom functions, support, custom post types and more.
 */
/*------------------------------------*\
    External Modules/Files
\*------------------------------------*/
/* Charge Theme options Mimosa */
require_once ( get_stylesheet_directory() . '/theme-options.php' );
/*------------------------------------*\
    Theme Support
\*------------------------------------*/
if (!isset($content_width))
{
    $content_width = 900;
}
if (function_exists('add_theme_support'))
{
    // Add Menu Support
    add_theme_support('menus');
    // Add Thumbnail Theme Support
    add_theme_support('post-thumbnails');
    add_image_size('large', 700, '', true); // Large Thumbnail
    add_image_size('medium', 250, '', true); // Medium Thumbnail
    add_image_size('small', 120, '', true); // Small Thumbnail
    add_image_size('custom-size', 700, 200, true); // Custom Thumbnail Size call using the_post_thumbnail('custom-size');
    // Add Support for Custom Backgrounds - Uncomment below if you're going to use
    /*add_theme_support('custom-background', array(
    'default-color' => 'FFF',
    'default-image' => get_template_directory_uri() . '/img/bg.jpg'
    ));*/
    // Add Support for Custom Header - Uncomment below if you're going to use
    /*add_theme_support('custom-header', array(
    'default-image'         => get_template_directory_uri() . '/img/headers/default.jpg',
    'header-text'           => false,
    'default-text-color'        => '000',
    'width'             => 1000,
    'height'            => 198,
    'random-default'        => false,
    'wp-head-callback'      => $wphead_cb,
    'admin-head-callback'       => $adminhead_cb,
    'admin-preview-callback'    => $adminpreview_cb
    ));*/
    // Enables post and comment RSS feed links to head
    add_theme_support('automatic-feed-links');
    // Localisation Support
    load_theme_textdomain('html5blank', get_template_directory() . '/languages');
}
/*------------------------------------*\
    Functions
\*------------------------------------*/
// HTML5 Blank navigation
function html5blank_nav()
{
    wp_nav_menu(
    array(
        'theme_location'  => 'header-menu',
        'menu'            => '',
        'container'       => 'div',
        'container_class' => 'menu-{menu slug}-container',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul>%3$s</ul>',
        'depth'           => 0,
        'walker'          => ''
        )
    );
}
function main_menu_nav()
{
    wp_nav_menu(
    array(
        'theme_location'  => 'main-menu',
        'menu'            => '',
        'container'       => 'div',
        'container_class' => 'menu-{menu slug}-container',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul>%3$s</ul>',
        'depth'           => 0,
        'walker'          => ''
        )
    );
}
function footer_terms()
{
    wp_nav_menu(
    array(
        'theme_location'  => 'footer-terms',
        'menu'            => '',
        'container'       => 'div',
        'container_class' => 'menu-{menu slug}-container',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul>%3$s</ul>',
        'depth'           => 0,
        'walker'          => ''
        )
    );
}
function footer_servicesMenu()
{
    wp_nav_menu(
    array(
        'theme_location'  => 'footer-services',
        'menu'            => '',
        'container'       => 'div',
        'container_class' => 'menu-{menu slug}-container',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul>%3$s</ul>',
        'depth'           => 0,
        'walker'          => ''
        )
    );
}
function footer_mimosaMenu()
{
    wp_nav_menu(
    array(
        'theme_location'  => 'footer-mimosa',
        'menu'            => '',
        'container'       => 'div',
        'container_class' => 'menu-{menu slug}-container',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul>%3$s</ul>',
        'depth'           => 0,
        'walker'          => ''
        )
    );
}

function lastsection_home_mimosaMenu()
{
    wp_nav_menu(
    array(
        'theme_location'  => 'home-last-section',
        'menu'            => '',
        'container'       => 'div',
        'container_class' => 'menu-{menu slug}-container',
        'container_id'    => '',
        'menu_class'      => '',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul>%3$s</ul>',
        'depth'           => 0,
        'walker'          => ''
        )
    );
}
// Load HTML5 Blank scripts (header.php)
function html5blank_header_scripts()
{
    if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {
        wp_register_script('conditionizr', get_template_directory_uri() . '/js/lib/conditionizr-4.3.0.min.js', array(), '4.3.0',false);//Conditionizr
        wp_enqueue_script('conditionizr'); // Enqueue it!
        
        wp_register_script('modernizr', get_template_directory_uri() . '/js/lib/modernizr-2.7.1.min.js', array(), '2.7.1',true); //Modernizr
        wp_enqueue_script('modernizr'); // Enqueue it!

        wp_register_script('gsap', get_template_directory_uri() . '/js/TweenMax.min.js',true); //Modernizr
        wp_enqueue_script('gsap'); // Enqueue it!


        wp_register_script('html5blankscripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0',true); // Custom scripts
        wp_enqueue_script('html5blankscripts'); // Enqueue it!

        wp_register_script('iconsmimosa', get_template_directory_uri() . '/js/all.js', array('jquery'), '1.0.0',true); 
        wp_enqueue_script('iconsmimosa'); 
 
        wp_register_script('menuSlide', get_template_directory_uri() . '/js/bigSlide.min.js', array('jquery'), '1.0.0',true); 
        wp_enqueue_script('menuSlide');

        wp_register_script('slick', get_template_directory_uri() . '/js/slick.min.js', array('jquery'), '1.0.0',true); 
        wp_enqueue_script('slick');

                  
    }
}
// Load HTML5 Blank conditional scripts
function html5blank_conditional_scripts()
{
}
// Load HTML5 Blank styles
function html5blank_styles()
{
    wp_register_style('mimosa', get_template_directory_uri() . '/css/miguel.css', array(), '1.0', 'all');
    wp_enqueue_style('mimosa'); // Enqueue it!
    wp_register_style('normalize', get_template_directory_uri() . '/normalize.css', array(), '1.0', 'all');
    wp_enqueue_style('normalize'); // Enqueue it!
    wp_register_style('html5blank', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('html5blank'); // Enqueue it!
    
    wp_enqueue_style('bootstrap',get_template_directory_uri().'/css/bootstrap-grid.min.css');
    wp_enqueue_style('bootstrap'); // Enqueue it!

    wp_enqueue_style('slick',get_template_directory_uri().'/css/slick.css');
    wp_enqueue_style('slick'); // Enqueue it!

    wp_enqueue_style('slickTheme',get_template_directory_uri().'/css/slick-theme.css');
    wp_enqueue_style('slickTheme'); // Enqueue it!

    wp_enqueue_style('hoverMin',get_template_directory_uri().'/css/hover.css');
    wp_enqueue_style('hoverMin'); // Enqueue it!
}
// Register HTML5 Blank Navigation
function register_html5_menu()
{
    register_nav_menus(array( // Using array to specify more menus if needed
        'header-menu' => __('Header Menu', 'html5blank'), // Main Navigation
        'sidebar-menu' => __('Sidebar Menu', 'html5blank'), // Sidebar Navigation
        'main-menu'=> __('Main', 'html5blank'),
        //Main menu
        'footer-terms'=> __('Footer terms Main', 'html5blank'),
        'footer-services'=> __('Footer services', 'html5blank'),
        'footer-mimosa'=> __('Footer mimosa', 'html5blank'),
        'home-last-section'=> __('Last section Home', 'html5blank'),
    ));
}

// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}
// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var)
{
    return is_array($var) ? array() : '';
}
// Remove invalid rel attribute values in the categorylist
function remove_category_rel_from_category_list($thelist)
{
    return str_replace('rel="category tag"', 'rel="tag"', $thelist);
}
// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes)
{
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }
    return $classes;
}
// If Dynamic Sidebar Exists
if (function_exists('register_sidebar'))
{
    // Define Sidebar Widget Area 1
    register_sidebar(array(
        'name' => __('Widget Area 1', 'html5blank'),
        'description' => __('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-1',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));
    // Define Sidebar Widget Area 2
    register_sidebar(array(
        'name' => __('Widget Area 2', 'html5blank'),
        'description' => __('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-2',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));
}
// Remove wp_head() injected Recent Comment styles
function my_remove_recent_comments_style()
{
    global $wp_widget_factory;
    remove_action('wp_head', array(
        $wp_widget_factory->widgets['WP_Widget_Recent_Comments'],
        'recent_comments_style'
    ));
}
// MS - Custom Post Clients
function custom_post_clients() {
    $labels = array(
        'name'                => _x( 'Clients', 'Post Type General Name', 'html5blank' ),
        'singular_name'       => _x( 'Client', 'Post Type Singular Name', 'html5blank' ),
        'menu_name'           => __( 'Clients', 'html5blank' ),
        'parent_item_colon'   => __( 'Client parent:', 'html5blank' ),
        'all_items'           => __( 'All Clients', 'html5blank' ),
        'view_item'           => __( 'View Client', 'html5blank' ),
        'add_new_item'        => __( 'Add Client', 'html5blank' ),
        'add_new'             => __( 'Add New', 'html5blank' ),
        'edit_item'           => __( 'Edit client', 'html5blank' ),
        'update_item'         => __( 'Update client', 'html5blank' ),
        'search_items'        => __( 'Search client', 'html5blank' ),
        'not_found'           => __( 'Not Found', 'html5blank' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'html5blank' ),
    );
     
     
    $args = array(
        'label'               => __( 'clients', 'html5blank' ),
        'description'         => __( 'Mimosa Clients', 'html5blank' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        'taxonomies'          => array( 'genres' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => false,
        'publicly_queryable'  => false,
        'capability_type'     => 'page',
    );
    
    register_post_type( 'clients', $args );
}
// Ms - Custom post Members
function custom_post_team() {
    $labels = array(
        'name'                => _x( 'Team', 'Post Type General Name', 'html5blank' ),
        'singular_name'       => _x( 'Members', 'Post Type Singular Name', 'html5blank' ),
        'menu_name'           => __( 'Team', 'html5blank' ),
        'parent_item_colon'   => __( 'Team parent:', 'html5blank' ),
        'all_items'           => __( 'All Members', 'html5blank' ),
        'view_item'           => __( 'View Member', 'html5blank' ),
        'add_new_item'        => __( 'Add Member', 'html5blank' ),
        'add_new'             => __( 'Add New', 'html5blank' ),
        'edit_item'           => __( 'Edit member', 'html5blank' ),
        'update_item'         => __( 'Update member', 'html5blank' ),
        'search_items'        => __( 'Search member', 'html5blank' ),
        'not_found'           => __( 'Not Found', 'html5blank' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'html5blank' ),
    );
     
     
    $args = array(
        'label'               => __( 'team', 'html5blank' ),
        'description'         => __( 'Mimosa Members', 'html5blank' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        'taxonomies'          => array( 'genres' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => false,
        'publicly_queryable'  => false,
        'capability_type'     => 'page',
    );
    
    register_post_type( 'team', $args );
}

// Ms - Custom post Testimonials
function custom_post_testimonials() {
    $labels = array(
        'name'                => _x( 'Testimonials', 'Post Type General Name', 'html5blank' ),
        'singular_name'       => _x( 'Testimonial', 'Post Type Singular Name', 'html5blank' ),
        'menu_name'           => __( 'Testimonials', 'html5blank' ),
        'parent_item_colon'   => __( 'Testimonials parent:', 'html5blank' ),
        'all_items'           => __( 'All Testimonials', 'html5blank' ),
        'view_item'           => __( 'View Testimonial', 'html5blank' ),
        'add_new_item'        => __( 'Add Testimonial', 'html5blank' ),
        'add_new'             => __( 'Add New', 'html5blank' ),
        'edit_item'           => __( 'Edit testimonial', 'html5blank' ),
        'update_item'         => __( 'Update testimonial', 'html5blank' ),
        'search_items'        => __( 'Search testimonial', 'html5blank' ),
        'not_found'           => __( 'Not Found', 'html5blank' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'html5blank' ),
    );
     
     
    $args = array(
        'label'               => __( 'testimonials', 'html5blank' ),
        'description'         => __( 'Mimosa Testimonials', 'html5blank' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        'taxonomies'          => array( 'genres' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => false,
        'publicly_queryable'  => false,
        'capability_type'     => 'page',
    );
    
    register_post_type( 'testimonials', $args );
}

// Ms - Custom post Recette
function custom_post_recette() {
    $labels = array(
        'name'                => _x( 'Reccete', 'Post Type General Name', 'html5blank' ),
        'singular_name'       => _x( 'Reccete', 'Post Type Singular Name', 'html5blank' ),
        'menu_name'           => __( 'Recette', 'html5blank' ),
        'parent_item_colon'   => __( 'Ingredient parent:', 'html5blank' ),
        'all_items'           => __( 'All Ingredients', 'html5blank' ),
        'view_item'           => __( 'View Recette', 'html5blank' ),
        'add_new_item'        => __( 'Add Ingredient', 'html5blank' ),
        'add_new'             => __( 'Add New', 'html5blank' ),
        'edit_item'           => __( 'Edit Ingredient', 'html5blank' ),
        'update_item'         => __( 'Update Ingredient', 'html5blank' ),
        'search_items'        => __( 'Search Ingredient', 'html5blank' ),
        'not_found'           => __( 'Not Found', 'html5blank' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'html5blank' ),
    );
     
     
    $args = array(
        'label'               => __( 'recette', 'html5blank' ),
        'description'         => __( 'Mimosa Recette', 'html5blank' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        'taxonomies'          => array( 'genres' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => false,
        'publicly_queryable'  => false,
        'capability_type'     => 'page',
    );
    
    register_post_type( 'recette', $args );
}

// Ms - Custom post Galerie
function custom_post_galerie() {
    $labels = array(
        'name'                => _x( 'Galerie', 'Post Type General Name', 'html5blank' ),
        'singular_name'       => _x( 'Galerie', 'Post Type Singular Name', 'html5blank' ),
        'menu_name'           => __( 'Galerie', 'html5blank' ),
        'parent_item_colon'   => __( 'Ingredient parent:', 'html5blank' ),
        'all_items'           => __( 'All Galeries', 'html5blank' ),
        'view_item'           => __( 'View Galerie', 'html5blank' ),
        'add_new_item'        => __( 'Add Galerie', 'html5blank' ),
        'add_new'             => __( 'Add New', 'html5blank' ),
        'edit_item'           => __( 'Edit Galerie', 'html5blank' ),
        'update_item'         => __( 'Update Galerie', 'html5blank' ),
        'search_items'        => __( 'Search Galerie', 'html5blank' ),
        'not_found'           => __( 'Not Found', 'html5blank' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'html5blank' ),
    );
     
     
    $args = array(
        'label'               => __( 'galerie', 'html5blank' ),
        'description'         => __( 'Mimosa Recette', 'html5blank' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        'taxonomies'          => array( 'genres' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => false,
        'exclude_from_search' => false,
        'publicly_queryable'  => false,
        'capability_type'     => 'page',
    ); 
    register_post_type( 'galerie', $args );
}


/* Custom Taxonomy Team Members */
function team_members_taxonomy() {
  $labels = array(
    'name' => _x( 'Skills', 'taxonomy general name' ),
    'singular_name' => _x( 'Skill', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Skill' ),
    'popular_items' => __( 'Popular Skills' ),
    'all_items' => __( 'All Skills' ),
    'parent_item' => null,
    'parent_item_colon' => null,
    'edit_item' => __( 'Edit Skill' ),
    'update_item' => __( 'Update Skill' ),
    'add_new_item' => __( 'Add New Skill' ),
    'new_item_name' => __( 'New Skill Name' ),
    'separate_items_with_commas' => __( 'Separate skills with commas' ),
    'add_or_remove_items' => __( 'Add or remove skills' ),
    'choose_from_most_used' => __( 'Choose from the most used skills' ),
    'menu_name' => __( 'Skills' ),
  );
  register_taxonomy('skills','team',array(
    'hierarchical' => false,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'update_count_callback' => '_update_post_term_count',
    'query_var' => false,
    'rewrite' => array( 'slug' => 'tag' ),
  ));
} 

function galerie_taxonomy() {
  $labels = array(
    'name' => _x( 'Categories', 'taxonomy general name' ),
    'singular_name' => _x( 'Category', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Category' ),
    'popular_items' => __( 'Popular Category' ),
    'all_items' => __( 'All Categories' ),
    'parent_item' => __( 'Parent Category' ),
    'edit_item' => __( 'Edit Category' ),
    'update_item' => __( 'Update Category' ),
    'add_new_item' => __( 'Add New Category' ),
    'new_item_name' => __( 'New Skill Category' ),
    'menu_name' => __( 'Categories' ),
  );
  register_taxonomy('categories','galerie',array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'categories' ),
  ));
} 


// Ms - Hide post title
function ms_hide_post_title($classes) {
    if (  is_page() ) :
        $classes[] = 'hidetitle';
        return $classes;
    endif;
return $classes;
}

add_filter('post_class', 'ala_hidetitle_class');
// Pagination for paged posts, Page 1, Page 2, Page 3, with Next and Previous Links, No plugin
function html5wp_pagination()
{
    global $wp_query;
    $big = 999999999;
    echo paginate_links(array(
        'base' => str_replace($big, '%#%', get_pagenum_link($big)),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $wp_query->max_num_pages
    ));
}
// Custom Excerpts
function html5wp_index($length) // Create 20 Word Callback for Index page Excerpts, call using html5wp_excerpt('html5wp_index');
{
    return 20;
}
// Create 40 Word Callback for Custom Post Excerpts, call using html5wp_excerpt('html5wp_custom_post');
function html5wp_custom_post($length)
{
    return 40;
}
// Create the Custom Excerpts callback
function html5wp_excerpt($length_callback = '', $more_callback = '')
{
    global $post;
    if (function_exists($length_callback)) {
        add_filter('excerpt_length', $length_callback);
    }
    if (function_exists($more_callback)) {
        add_filter('excerpt_more', $more_callback);
    }
    $output = get_the_excerpt();
    $output = apply_filters('wptexturize', $output);
    $output = apply_filters('convert_chars', $output);
    $output = '<p>' . $output . '</p>';
    echo $output;
}
// Custom View Article link to Post
function html5_blank_view_article($more)
{
    global $post;
    return '... <a class="view-article" href="' . get_permalink($post->ID) . '">' . __('View Article', 'html5blank') . '</a>';
}
// Remove Admin bar
function remove_admin_bar()
{
    return false;
}
// Remove 'text/css' from our enqueued stylesheet
function html5_style_remove($tag)
{
    return preg_replace('~\s+type=["\'][^"\']++["\']~', '', $tag);
}
// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions( $html )
{
    $html = preg_replace('/(width|height)=\"\d*\"\s/', "", $html);
    return $html;
}
// Custom Gravatar in Settings > Discussion
function html5blankgravatar ($avatar_defaults)
{
    $myavatar = get_template_directory_uri() . '/img/gravatar.jpg';
    $avatar_defaults[$myavatar] = "Custom Gravatar";
    return $avatar_defaults;
}
// Threaded Comments
function enable_threaded_comments()
{
    if (!is_admin()) {
        if (is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
            wp_enqueue_script('comment-reply');
        }
    }
}
// Custom Comments Callback
function html5blankcomments($comment, $args, $depth)
{
    $GLOBALS['comment'] = $comment;
    extract($args, EXTR_SKIP);
    if ( 'div' == $args['style'] ) {
        $tag = 'div';
        $add_below = 'comment';
    } else {
        $tag = 'li';
        $add_below = 'div-comment';
    }
?>
    <!-- heads up: starting < for the html tag (li or div) in the next line: -->
    <<?php echo $tag ?> <?php comment_class(empty( $args['has_children'] ) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
    <?php if ( 'div' != $args['style'] ) : ?>
    <div id="div-comment-<?php comment_ID() ?>" class="comment-body">
    <?php endif; ?>
    <div class="comment-author vcard">
    <?php if ($args['avatar_size'] != 0) echo get_avatar( $comment, $args['180'] ); ?>
    <?php printf(__('<cite class="fn">%s</cite> <span class="says">says:</span>'), get_comment_author_link()) ?>
    </div>
<?php if ($comment->comment_approved == '0') : ?>
    <em class="comment-awaiting-moderation"><?php _e('Your comment is awaiting moderation.') ?></em>
    <br />
<?php endif; ?>

    <div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>">
        <?php
            printf( __('%1$s at %2$s'), get_comment_date(),  get_comment_time()) ?></a><?php edit_comment_link(__('(Edit)'),'  ','' );
        ?>
    </div>

    <?php comment_text() ?>

    <div class="reply">
    <?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
    </div>
    <?php if ( 'div' != $args['style'] ) : ?>
    </div>
    <?php endif; ?>
<?php }
/*------------------------------------*\
    Actions + Filters + ShortCodes
\*------------------------------------*/
// Add Actions
add_action('init', 'html5blank_header_scripts'); // Add Custom Scripts to wp_head
add_action('wp_print_scripts', 'html5blank_conditional_scripts'); // Add Conditional Page Scripts
add_action('get_header', 'enable_threaded_comments'); // Enable Threaded Comments
add_action('wp_enqueue_scripts', 'html5blank_styles'); // Add Theme Stylesheet
add_action('init', 'register_html5_menu'); // Add HTML5 Blank Menu
add_action('widgets_init', 'my_remove_recent_comments_style'); // Remove inline Recent Comment Styles from wp_head()
add_action('init', 'html5wp_pagination'); 
//Add custom post
add_action('init','custom_post_clients',0);
// Add custom post team
add_action('init','custom_post_team',0);
// Add custom post testimonials
add_action('init','custom_post_testimonials',0);
// Add custom post recette
add_action('init','custom_post_recette',0);
// Add custom post galerie
add_action('init','custom_post_galerie',0);
// Add custom taxonomy Team
add_action( 'init', 'team_members_taxonomy', 0 );
// Add custom taxonomy galerie
add_action( 'init', 'galerie_taxonomy', 0 );
// Add our HTML5 Pagination
// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'index_rel_link'); // Index link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Prev link
remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Display relational links for the posts adjacent to the current post.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
// Add Filters
add_filter('avatar_defaults', 'html5blankgravatar'); // Custom Gravatar in Settings > Discussion
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('widget_text', 'do_shortcode'); // Allow shortcodes in Dynamic Sidebar
add_filter('widget_text', 'shortcode_unautop'); // Remove <p> tags in Dynamic Sidebars (better!)
add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
 // add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected classes (Commented out by default)
// add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected ID (Commented out by default)
// add_filter('page_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> Page ID's (Commented out by default)
add_filter('the_category', 'remove_category_rel_from_category_list'); // Remove invalid rel attribute
add_filter('the_excerpt', 'shortcode_unautop'); // Remove auto <p> tags in Excerpt (Manual Excerpts only)
add_filter('the_excerpt', 'do_shortcode'); // Allows Shortcodes to be executed in Excerpt (Manual Excerpts only)
add_filter('excerpt_more', 'html5_blank_view_article'); // Add 'View Article' button instead of [...] for Excerpts
add_filter('show_admin_bar', 'remove_admin_bar'); // Remove Admin bar
add_filter('style_loader_tag', 'html5_style_remove'); // Remove 'text/css' from enqueued stylesheet
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('image_send_to_editor', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to post images
// Remove Filters
remove_filter('the_excerpt', 'wpautop'); // Remove <p> tags from Excerpt altogether
// Shortcodes
add_shortcode('html5_shortcode_demo', 'html5_shortcode_demo'); // You can place [html5_shortcode_demo] in Pages, Posts now.
add_shortcode('html5_shortcode_demo_2', 'html5_shortcode_demo_2'); // Place [html5_shortcode_demo_2] in Pages, Posts now.
// Shortcodes above would be nested like this -
// [html5_shortcode_demo] [html5_shortcode_demo_2] Here's the page title! [/html5_shortcode_demo_2] [/html5_shortcode_demo]



/*------------------------------------*\
    ShortCode Functions
\*------------------------------------*/
// Shortcode Demo with Nested Capability
function html5_shortcode_demo($atts, $content = null)
{
    return '<div class="shortcode-demo">' . do_shortcode($content) . '</div>'; // do_shortcode allows for nested Shortcodes
}
// Shortcode Demo with simple <h2> tag
function html5_shortcode_demo_2($atts, $content = null) // Demo Heading H2 shortcode, allows for nesting within above element. Fully expandable.
{
    return '<h2>' . $content . '</h2>';
}

add_shortcode('footer','footer_home_template');
function footer_home_template() {
    get_template_part('partial','footer');
}

add_shortcode('contactinfo','contact_info_mimosa');
function contact_info_mimosa(){
    get_template_part('partial','contactinfo');    
}

add_shortcode('socialinfolg','social_info_lg');
function social_info_lg(){
    get_template_part('partial','socialinfolg');    
}

add_shortcode('footerpts','footer_pts');
function footer_pts(){
    get_template_part('partial','footerpts');    
}

add_shortcode('clients','carousel_clients');
function carousel_clients(){
    get_template_part('loop','clients');
}

add_shortcode('carousel_with_pagination','img_carousel_with_pagination');
function img_carousel_with_pagination(){?>    
  <div id="ms-img-carousel-with-pagination">
    <div  id="ms-content-img1" >
        <img src="<?php echo get_template_directory_uri(); ?>/img/2.jpg" alt="">
    </div>
    <div id="ms-content-img2" >
        <img src="<?php echo get_template_directory_uri(); ?>/img/1.jpg" alt="">
    </div>
    <div  id="ms-content-img3" >
        <img src="<?php echo get_template_directory_uri(); ?>/img/3.jpg" alt="">
    </div>
    <div id="ms-paginator-carousel">
        <ul>
           <li><a href="#" id="ms-imgc-1">1</a></li>
           <li><a href="#" id="ms-imgc-2">2</a></li>
           <li><a href="#" id="ms-imgc-3">3</a></li>
        </ul>
    </div>
  </div>  

<?php }

add_shortcode('team','carousel_members_team');
function carousel_members_team(){
    get_template_part('loop','team');
}

add_shortcode('testimonials','carousel_testimonials');
function carousel_testimonials(){
    get_template_part('loop','testimonials');
}

add_shortcode('recette','carousel_recette');
function carousel_recette(){
    get_template_part('loop','recette');
}

add_shortcode('galerie','galerie_images_mimosa');
function galerie_images_mimosa($atts){
    $atts = shortcode_atts(array(
        'name' => ''
    ), $atts);
    $loop = new WP_Query( array(
            'orderby'           => 'menu_order title',
            'order'             => 'ASC',
            'post_type'         => 'galerie',
            'tax_query'         => array( array(
                'taxonomy'  => 'categories',
                'field'     => 'slug',
                'terms'     => array( sanitize_title( $atts['name'] ) )
            ) )
        ) );?>
        <?php 
            if ($atts['name'] == 'atelier' || $atts['name'] == 'qui-sommes' ) {?>
                <div id="ms-container-galerie">
                           <?php 
                            if ( $loop->have_posts() ) :
                             while ( $loop->have_posts() ) : $loop->the_post(); 
                               $images = acf_photo_gallery('images_galerie',get_the_ID());
                               if(count($images)):
                                foreach($images as $image):
                                  $caption = $image['caption'];
                                  $full_image_url= $image['full_image_url'];
                                ?>
                                <div id="ms-image-galerie-box">
                                  <a href="<?php echo $full_image_url ?>" class="ms-lightbox-trigger"><img src="<?echo $full_image_url;?>" alt=""></a>
                                </div>
                              <?php
                                endforeach;
                               endif; 
                             endwhile;
                            endif; 
                            wp_reset_postdata();?>
                        </div>
            <?php } 
                if ($atts['name'] == 'notre-concept') {?>
                    <div id="ms-container-galerie-notre-concept">
                               <?php 
                                if ( $loop->have_posts() ) :
                                 while ( $loop->have_posts() ) : $loop->the_post(); 
                                   $images = acf_photo_gallery('images_galerie',get_the_ID());
                                   if(count($images)):
                                    foreach($images as $image):
                                      $caption = $image['caption'];
                                      $full_image_url= $image['full_image_url'];
                                    ?>
                                    <div id="ms-image-galerie-box">
                                      <a href="<?php echo $full_image_url ?>" class="ms-lightbox-trigger"><img src="<?echo $full_image_url;?>" alt=""></a>
                                    </div>
                                  <?php
                                    endforeach;
                                   endif; 
                                 endwhile;
                                endif; 
                                wp_reset_postdata();?>
                            </div>
                <?php } ?>
<?php
}


function ms_enqueue_styles_one_page() {
  if ( is_page( 'qui-sommes-nous') || is_front_page() || is_page('notre-concept'))  {
    // One Page Library
    wp_register_script('onePage', get_template_directory_uri() . '/js/jquery.onepage-scroll.min.js', array('jquery'), '1.0.0',true); 
    wp_enqueue_script('onePage');

    // One page Main function JS
    wp_register_script('onePageFunction', get_template_directory_uri() . '/js/app.js', array('jquery'), '1.0.0',true); 
    wp_enqueue_script('onePageFunction');

    // One 
    wp_enqueue_style('onepage',get_template_directory_uri().'/css/onepage-scroll.css');
    wp_enqueue_style('onepage'); // Enqueue it!
  } 
}
add_action( 'wp_enqueue_scripts', 'ms_enqueue_styles_one_page' );


/* Ms Add SVG Support */
add_filter( 'upload_mimes', 'custom_upload_mimes' );
function custom_upload_mimes( $existing_mimes = array() ) {
    // Add the file extension to the array
    $existing_mimes['svg'] = 'image/svg+xml';
    return $existing_mimes;
}

?>


