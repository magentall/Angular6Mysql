<?php
include 'inc/headjson.php';
include 'inc/req.php';
include 'inc/func.php';


$result = req("select alias from adherents");

$outp = res2json_only($result);

echo($outp);
?>
