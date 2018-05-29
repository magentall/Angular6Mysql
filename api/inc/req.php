<?php

function req($query){
  $conn = new mysqli("localhost", "root", "", "ctdje");
  return $conn->query($query);
}

?>
