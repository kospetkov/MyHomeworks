<?php
session_start();
if (!isset($_SESSION['login'])) {
    header('location: index.html');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>WD_PS5_AJAX</title>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<header class="header">
    <div class="black_header"></div>
    <div class="green_header"></div>
    <div class="yelow_header"></div>
    <div class="beige_header"></div>
    <div class="blue_header"></div>
    <div class="black_header"></div>
    <div class="green_header"></div>
    <div class="yelow_header"></div>
    <div class="beige_header"></div>
    <div class="blue_header"></div>
</header>
<section class="content">
    <h1>Easy Chat</h1>
    <p class="massedg" id="login"><?='hi!  ' . $_SESSION['login'] ?></p>
    <div class="window_for_massedg"></div>
    <form id="form_chat" class="chat_form">
        <input type="text" class="textarea">
        <input type="submit" class="chat_submit" value="SEND">
    </form>
</section>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/chat.js"></script>
</body>
</html>