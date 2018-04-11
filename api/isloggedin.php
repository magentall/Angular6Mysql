<?php
session _start();

if (isset($_SESSION['user'])) {
    echo '{"status": true}';
  } else {
    echo '{"status": false}';
  }
 ?>
