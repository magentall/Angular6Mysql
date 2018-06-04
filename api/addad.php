<?php

include 'inc/req.php';

//session_start();

$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST)&& !empty($_POST)){
  $username = $_POST['alias'];
  $key = $_POST['pswd'];
  $noms = $_POST['noms'];

  $id=rand();

  $sql = "INSERT INTO adherents (num_adherent, noms_adherent, alias, key_ad) VALUES ('$id', '$noms', '$username', '$key')";

    $result = req($sql);
    if($result){


    ?>
              {
                "success": true,
                "message": "Adhérent enregistré"
              }
   <?php
   }else{
   ?>
              {
                "success": false,
                "message": "Existe déjà."
              }
   <?php
   }

} else {
  //var_dump($_POST);
  ?>
              {
                "success": false,
                "message": "Only Post Access"
              }
  <?php
}
?>
