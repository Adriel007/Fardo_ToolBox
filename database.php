<?php
include("Fardo_ToolBox.php");
$bd = ["bdfardo", "id19134599_bdfardo"];
$user = ["root", "id19134599_sysdba"];
$pwd = ["", "T+8W>FVfAVm{=5Vw"];
$conexao;
mysqli_report(MYSQLI_REPORT_STRICT | MYSQLI_REPORT_ALL);
try {
    $conexao = mysqli_connect("localhost", $user[0], $pwd[0], $bd[0]);
} catch (mysqli_sql_exception $e1) {
    try {
        $conexao = mysqli_connect("localhost", $user[1], $pwd[1], $bd[1]);
    } catch (mysqli_sql_exception $e2) {
        $FardoTools->js("setTimeout(falar('Erro ao conectar com banco de dados'), 7000);");
    }
}
mysqli_report(MYSQLI_REPORT_STRICT);
mysqli_set_charset($conexao, "utf8");
$table = ["lembretes", "configs", "rotinas", "fardosconnection"];
$campo = ["valor", "data", "volume", "nome", "voz", "cor", "descricao", "hora", "dia_ou_semana", "id", "de", "para", "json"];