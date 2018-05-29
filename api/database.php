<?php
session_start();

$user = $_SESSION['user'];

$var="oui";

$tabjeu=[];

echo '{
  "message": "Bienvenue '.$user.' ",
  "message2": "'.$var.'",
  "tabjeu": "'.$tabjeu.'",
  "succes": true
}';

/*
if ($user == 'admin') {
  echo '{
    "message": "message for admin",
    "succes": true
  }';
} else {
  echo '{
    "message": "whoiii nope",
    "success": false
  }';
}*/
 ?>
