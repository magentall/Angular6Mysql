<?php
include 'inc/headjson.php';
include 'inc/req.php';
include 'inc/func.php';
session_start();

$user = $_SESSION['user'];


$result = req("SELECT adherents.num_adherent,adherents.alias FROM adherents WHERE adherents.alias='$user'");

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  $num_adherent=$rs["num_adherent"];
}


$today=date("Y-m-d");
$tabjeu=[];
$result = req("SELECT * FROM jeux INNER JOIN prets ON jeux.num_jeu=prets.num_jeu WHERE prets.date_pret<= '$today' AND '$today' <= prets.date_retour AND prets.num_adherent=$num_adherent");
$tabjeu=res2json($result);

echo '{
  "message": "Bienvenue '.$user.' ",
  "message2": "'.$today.'",
  "obj": '.$tabjeu.',
  "succes": true
}';

 ?>
