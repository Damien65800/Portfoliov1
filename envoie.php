<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $_POST['email'];
    $to = "cousi.damien@gmail.com";
    $subject = $_POST['name'];
    $message =  $_POST['message'];;
    $headers = "De :" . $from;
    mail($to,$subject,$message, $headers);
?>