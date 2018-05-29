<?php

function res2json($result){
  $rows=[];
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  	$rows[]=$rs;
  }
  $tabjson = '{"obj":'.json_encode($rows).'}';
  return $tabjson;
}

?>
