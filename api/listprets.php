<?php
include 'inc/headjson.php';
include 'inc/req.php';
include 'inc/func.php';

$today=date("Y-m-d");

$result = req("SELECT jeux.num_jeu, jeux.nom_jeu, jeux.nom_categorie, categorie.nom_surcat FROM jeux INNER JOIN categorie ON jeux.nom_categorie=categorie.nom_categorie LEFT JOIN prets ON jeux.num_jeu = prets.num_jeu WHERE prets.num_jeu IS NULL OR '$today' >= prets.date_retour ORDER BY categorie.nom_surcat DESC");

$outp = res2json_only($result);

echo($outp);
?>
