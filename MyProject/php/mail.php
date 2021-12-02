<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$email = $_POST['user_email'];
$phone = $_POST['user_phone'];

$mail->addAddress('ivanserous@gmail.com');

$mail->Subject = 'Тема письма';
$mail->Body    = '' . "Скрипт сработал! <br>" . $email . "<br>" . $phone . "<br>";
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>