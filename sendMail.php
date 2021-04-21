<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
$mail = new PHPMailer(true);
$mail ->ChartSet ='UTF-8';
$mail ->addAddress('zaraperova@gmail.com');
$body. =  $_POST['name'];
$body. =  $_POST['tel'];
$body. =  $_POST['maill'];
$body. =  $_POST['text'];

$mail->Body = $body;

if(!$mail->send()){
    $message = 'Помилка'
}else{
    $message = 'Дані відправлені';
}

$response = ['message' =>$message];

header('Content-type: application/json');
echo json_encode($response);
?>
