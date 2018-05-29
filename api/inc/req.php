<?php

function req($query){
  $conn = new mysqli("localhost", "root", "", "ctdje");
  $result = $conn->query($query);
  $conn->close();
  return $result;
}

?>
