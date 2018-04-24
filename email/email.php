<?php

$recipientEmail             = 'makhan.godara@gmail.com'; 

$emailSubject               = 'A message from Your Website'; 

                                         
$messageText='';
foreach ($_POST as $key => $value)
{
 
      if(is_array($value)){
          $value = implode(', ' , $value);
      }
      $messageText .= ''.ucfirst($key).": ".$value."\r\n";

}
$headers = 'MIME-Version: 1.0';
$headers .= 'Content-type: text/html; charset=iso-8859-1';
echo mail($recipientEmail,$emailSubject,$messageText,$headers);
exit;

?>