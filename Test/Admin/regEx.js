/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//validerer om brukernavnet inneholder kun bokstaver eller mellomrom
function valider_brukernavn()
 {
 regEx = /^[a-zA-Z ]*$/;
 OK = regEx.test(document.innlogg.username.value);
 if(!OK)
 {
  document.getElementById("feilbruker").innerHTML="Bare bokstaver og mellomromm er tillat.";
 return false;

 }
  document.getElementById("feilbruker").innerHTML="";
 return true;

 }  
 
 
 
//validerer om passordet inneholder minst 8 tegn, en stor bokstav, en liten bokstav og ett tall
 function valider_passord()
 {
 regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 OK = regEx.test(document.innlogg.password.value);
 if(!OK)
 {
  document.getElementById("feilpass").innerHTML="Minimum 8 tegn, minst en stor bokstav, en liten bokstav og ett tall.";
 return false;

 }
  document.getElementById("feilpass").innerHTML="";
 return true;

 }  
 
 
 
 //validerer om innoldet i begge inputfeltene er gyldige
 function valider_alt()
 {
        var OKusername = valider_brukernavn();
        var OKpassword = valider_passord();
       
        

        if(OKusername && OKpassword)
        {
            return true;
            

        }
        else
        {
            return false;
         
            


        }
 
 
 }
 

 
  