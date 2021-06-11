<?php

if(isset($_POST['submit'])){
    //code
    $name=$_POST['name'];
    $mailFrom=$_POST['mail'];
    $phone=$_POST['phone'];
    $message=$_POST['message'];

    $mailTo="daniela.gallardo.r@mail.pucv.cl"; //check
    $headers="From: Winter Course" .$mailFrom;
    $txt="You have recieved an e-mail from: ".$name.".\n\n".$message;

    mail($mailTo, $mailFrom, $txt, $headers);
    header("Location: contact.htmlmailsend");
}