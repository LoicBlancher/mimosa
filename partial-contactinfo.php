<div id="ms-contactInfo-contactP">  
  <?php $phone_mimosa= get_option('phone');?>
  <a href="<?php echo $facebook_mimosa?>"><i class="fas fa-phone fa-2x fa-rotate-90"></i><p id="ms-phone-contactP"><?php echo $phone_mimosa?></p></a>
  <?php $mail_mimosa= get_option('mail');?>
  <a href="mailto:<?php echo $mail_mimosa?>"><i class="fas fa-envelope fa-2x"></i></i><p><?php echo $mail_mimosa?></p></a>
  <?php $address_mimosa= get_option('address');?>
  <a href=""><i class="fas fa-map-marker-alt fa-2x" id="ms-pin-contactP"></i><p id="ms-text-map-pin-contactinfo-sh"><?php echo $address_mimosa?></p></a>   
</div>