<?php

function req($query){
  $conn = new mysqli("localhost", "root", "BoomBoom11**", "ctdje");
  return $conn->query($query);
}

?>
