<?php
include("database.php");
$me = "home";
$message = array(
    "id" => null,
    "from" => null,
    "to" => null,
    "json" => null
);
$sql = "SELECT * FROM $table[3]";
$res = mysqli_query($conexao, $sql);
while ($registro = mysqli_fetch_array($res)) {
    $message["id"] = $registro['id'];
    $message["from"] = $registro['de'];
    $message["to"] = $registro['para'];
    $message["json"] = $registro['json'];
}

if ($message["to"] == $me) {
    $FardoTools->js("
    message.id = '" . $message['id'] . "';
    message.from = '" . $message['from'] . "';
    message.to = '" . $message['to'] . "';
    message.json = `" . $message['json'] . "`;
    ");
    $sql = "DELETE FROM $table[3] WHERE id = " . $message["id"] . ";";
    $res = mysqli_query($conexao, $sql);
}