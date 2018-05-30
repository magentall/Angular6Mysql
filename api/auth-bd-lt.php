<?php

include 'inc/req.php';

session_start();

$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST)&& !empty($_POST)){
  $username = $_POST['username'];
  $password = $_POST['password'];

  $result = req("SELECT adherents.alias,adherents.key_ad FROM adherents WHERE adherents.alias='$username'");

  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    $pswd=$rs["key_ad"];
  }
  //$pswd=trim($pswd);
  //if($username == 'admin' && $password == 'admin') {
  if($password==$pswd){
    //$_SESSION['user'] = 'admin';
    $_SESSION['user'] = $username;

    ?>
{
  "success": true,
  "secret": "secret admin"
}
   <?php
 }else{
   ?>
{
  "success": false,
  "message": "Saisie incorrecte"
}
   <?php
 }
} else {
  //var_dump($_POST);
  ?>
{
  "success": false,
  "message": "Only post access accepted"
}
  <?php
}
?>
