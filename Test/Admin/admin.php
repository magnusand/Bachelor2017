<?php 
//En test
session_start();
echo "Velkommen"." " .$_POST['username'];
//Oppretter en session med username
$_SESSION['username'] = $_POST['username'];
