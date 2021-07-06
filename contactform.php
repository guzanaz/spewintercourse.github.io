<?php


if (isset($_POST['submit'])) {
$name = $_POST['name'];
$mailFrom = $_POST['mail'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailTo="contact@serc-pvcourse.cl";
$headers="From: ".$mailFrom;
$txt="You have recieved an e-mail from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers );
header("Location: ./mailconfirm.html?mailsend");

}

?>