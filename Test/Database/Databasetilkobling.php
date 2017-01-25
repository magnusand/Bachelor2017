<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
<?php
$kobling = mysqli_connect("localhost","root","","Bachelor207");

// Sjekker tilkobling
if (!$kobling) {
    echo "Feil i tilkobling";
    die (mysqli_error($kobling));
} 
echo "Database er tilkoblet";        
?>
    </body>
</html>
