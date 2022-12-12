<?php
include "conectar.php";

$json   = file_get_contents('php://input');
$params = json_decode($json);

$cont = $params  -> clave;
$mail = $params  -> correo;
// $nomb = $params  -> nombre;



$data = array();
$q = mysqli_query($conexion, "SELECT * 
                              FROM   `usuario` 
                              where   correo= '$mail' and contrasena = MD5('$cont')");



while($row = mysqli_fetch_object($q)){
    $data[] = $row;
}
echo json_encode($data);
// echo mysqli_error($conexion);

?>

