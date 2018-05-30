<?php
include 'inc/headjson.php';
include 'inc/req.php';
include 'inc/func.php';


$result = req("select categorie.nom_categorie from categorie");
$tab=res2json($result);

echo '{
  "obj": '.$tab.',
  "success": true
}';
?>
