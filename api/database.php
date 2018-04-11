<?php
session_start();

$user = $_SESSION['user'];

if ($user == 'admin') {
  echo '{
    "message": "message for admin",
    "succes": true
  }';
} else {
  echo '{
    "message": 'whoiii nope',
    "success": false
  }';
}
 ?>
