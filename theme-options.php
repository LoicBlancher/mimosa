<?php
/*------------------------------------*\
    MS - Theme Options Mimosa
\*------------------------------------*/
 
function add_theme_menu_item() {
add_theme_page("Customize Mimosa", "Customize Mimosa", "manage_options", "theme-options", "theme_option_page", null, 99);}
add_action("admin_menu", "add_theme_menu_item");

 function theme_option_page() {
 ?>
    <div class="wrap">
    <h1>Custom Mimosa Theme</h1>
    <form method="post" action="options.php">
 <?php
    do_settings_sections("theme-options-mimosa");
    settings_fields("theme-options-fields");
    submit_button();
 ?>
    </form>
    </div>
 <?php
 }

 function theme_settings (){
 /* Section custom info mimosa */
 add_settings_section( 'first_section', 'Contact Info Mimosa',
 'theme_section_description','theme-options-mimosa');
 /* Section custom display */
 add_settings_section( 'second_section', 'Display settings',
 'theme_second_section_description','theme-options-mimosa');

 /* MS- Add function edit phone mimosa*/
 add_settings_field('phone_mimosa','Phone Mimosa','display_phone_mimosa','theme-options-mimosa','first_section');
 register_setting('theme-options-fields','phone');
/*MS - Add function edit address mimosa*/
 add_settings_field('address_mimosa','Address Mimosa','display_address_mimosa','theme-options-mimosa','first_section');
 register_setting('theme-options-fields','address');
 /*MS - Add function edit Mail info mimosa*/
  add_settings_field('mail_mimosa','Mail Mimosa','display_mail_mimosa','theme-options-mimosa','first_section');
  register_setting('theme-options-fields','mail');
  /*MS - Add function edit Social - Twitter mimosa*/
  add_settings_field('twitter_mimosa','Twitter Mimosa','display_twitter_mimosa','theme-options-mimosa','first_section');
  register_setting('theme-options-fields','twitter');
  /*MS - Add function edit Social - Facebook mimosa*/
  add_settings_field('facebook_mimosa','Facebook Mimosa','display_facebook_mimosa','theme-options-mimosa','first_section');
  register_setting('theme-options-fields','facebook');
  /*MS - Add function edit Social - Pinterest mimosa*/
  add_settings_field('pinterest_mimosa','Pinterest Mimosa','display_pinterest_mimosa','theme-options-mimosa','first_section');
  register_setting('theme-options-fields','pinterest');
  /*MS - Add function edit Social - Linkedin mimosa*/
  add_settings_field('linkedin_mimosa','Linkedin Mimosa','display_linkedin_mimosa','theme-options-mimosa','first_section');
  register_setting('theme-options-fields','linkedin');

 /*MS - Change logo mimosa */
  add_settings_field("logo_mimosa", "Logo Mimosa", "logo_display_mimosa", "theme-options-mimosa", "second_section");
  register_setting( 'theme-options-fields', 'logo');    
 }

 function theme_first_section_description(){
 echo '<p>Change contact info mimosa</p>';
 }

 function theme_second_section_description(){
 echo '<p>Change display options mimosa</p>';
 }
 
 function display_phone_mimosa (){
  ?>
  <input type="text" name="phone" id="phone" value="<?php echo get_option ('phone');?>" />
  <?php  
 }

 function display_address_mimosa (){
  ?>
  <input type="text" name="address" id="address" value="<?php echo get_option ('address');?>" />
  <?php  
 }

 function display_mail_mimosa (){
  ?>
  <input type="text" name="mail" id="mail" value="<?php echo get_option ('mail');?>" />
  <?php  
 }


 function display_twitter_mimosa (){
  ?>
  <input type="text" name="twitter" id="twitter" value="<?php echo get_option ('twitter');?>" />
  <?php  
 }

 function display_facebook_mimosa (){
  ?>
  <input type="text" name="facebook" id="facebook" value="<?php echo get_option ('facebook');?>" />
  <?php  
 }


 function display_pinterest_mimosa (){
  ?>
  <input type="text" name="pinterest" id="pinterest" value="<?php echo get_option ('pinterest');?>" />
  <?php  
 } 


 function display_linkedin_mimosa (){
  ?>
  <input type="text" name="linkedin" id="linkedin" value="<?php echo get_option ('linkedin');?>" />
  <?php  
 } 

 function logo_display_mimosa ()
 { 
 ?>
 <input type="file" name="logo" />                      
 <?php echo get_option('logo'); ?>
 <?php
 }
 add_action('admin_init','theme_settings');
