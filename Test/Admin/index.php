<!DOCTYPE html>
<?php

?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <h1>Innlogg admin</h1>
        
        <!--INNLOGGSKJEMA -->
        <form action="admin.php" method="POST">
            <label><b>Brukernavn</b></label>
            <input type="text" placeholder="Brukernavn" name="username" required></br>
            <label><b>Passord</b></label>
            <input type="text" placeholder="Passord" name="password" required></br>
            <input type="submit" name="submit" value="Logg inn">
        </form>
        <!--HER STARTER PHP KODE -->
        <?php
        session_start();
        if(isset($_POST["submit"]))
        {
      
        // Definerer $username og $password
        $_POST['username'] = $username;
        if (!preg_match("/^[a-zA-Z ]*$/",$username)) {
            $UsernameError = "Bare bokstaver og mellomromm er tillat"; 
            }
        $_POST['password'] = $password;
        if (!preg_match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$",$username)) {
            $PasswordError = "Minimum 8 tegn, minst en stor bokstav, en liten bokstav og ett tall"; 
            }
        
        }
        
        ?>
    </body>
</html>

