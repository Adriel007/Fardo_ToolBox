<?php
include("database.php");
//header("Content-type: text/html; charset=utf-8");
//exec("start cmd");
//exec("start explorer");
//exec("start notepad");
//por atalhos no system32 pra abrir mais igual esses
//system("%windir%\System32\SHUTDOWN.exe -s -t 0"); desligar
//system("%windir%\System32\SHUTDOWN.exe -r -t 0"); reiniciar
//construtor javascript

$variaveis_js = file_get_contents("variaveis.js");
$main_js = file_get_contents("main.js");
$scripts_js = file_get_contents("scripts.js");
$novidades_js = file_get_contents("novidades.js");
$vocabulario_js = file_get_contents("vocabulario.js");
$rosto_js = file_get_contents("rosto.js");
$jquery_js = file_get_contents("jquery-3.6.0.min.js");
$face_detection_js = file_get_contents("face-detection.js");
$index_php = file_get_contents("index.php");
$scripts_php = file_get_contents("scripts.php");

function errorFix($e)
{
    $e = explode("@", $e);
    $char = null;
    $file = null;
    $file_name = null;
    //file set
    if (strpos($e[1], 'main.js') !== false) {
        $file = $GLOBALS['main_js'];
        $file_name = "main.js";
    } else if (strpos($e[1], 'novidades.js') !== false) {
        $file = $GLOBALS['novidades_js'];
        $file_name = "novidades.js";
    } else if (strpos($e[1], 'scripts.js') !== false) {
        $file = $GLOBALS['scripts_js'];
        $file_name = "scripts.js";
    } else if (strpos($e[1], 'vocabulario.js') !== false) {
        $file = $GLOBALS['vocabulario_js'];
        $file_name = "vocabulario.js";
    } else if (strpos($e[1], 'index.php') !== false) {
        $file = $GLOBALS['index_php'];
        $file_name = "index.php";
    } else if (strpos($e[1], 'scripts.php') !== false) {
        $file = $GLOBALS['scripts_php'];
        $file_name = "scripts.php";
    }
    $str = explode("\n", $file);
    //fix set
    if (strpos($e[0], 'Expected token') !== false) {
        $char = explode("'", $e[0]);
        $res = substr_replace($str[$e[2] - 1], $char[1], $e[3], 0);
    } else if (strpos($e[0], 'Unexpected token') !== false) {
        $char = explode("'", $e[0]);
        $res = str_replace($char, "", $str[$e[2] - 1]);
    }
    $string = 'Solução no arquivo: ' . $file_name . ', linha: ' . $e[2] . ', coluna: ' . $e[3] . '\nmude o: ". ' . $str[$e[2] - 1] . ' ."\npor: ' . $res . '';
    $GLOBALS["FardoTools"]->js("
    alert('$string');
    ");
}

//file_put_contents("main.js",$main_js); (não é bom pq a correção de erros ainda é instavel)

//SALVAR NO BANCO DE DADOS BACKUPS DOS CODIGOS

if (isset($_COOKIE["jsvaluetophpfardo"])) {
    $js_var = $_COOKIE["jsvaluetophpfardo"];
}

if (!empty($_POST['value0']) && !empty($_POST['crud'])) {
    $crud = $_POST['crud'];
    $value_0 = $_POST['value0'];
    if ($crud == "C") {
        $value_1 = $_POST['value1'];
        $sql = "INSERT INTO $table[0] ($campo[0], $campo[1]) VALUES ('$value_0', '$value_1');";
        $resultado = mysqli_query($conexao, $sql);
    }
    if ($crud == "D") {
        $sql = "DELETE FROM $table[0] WHERE $campo[0] LIKE '%$value_0%';";
        $resultado = mysqli_query($conexao, $sql);
    }

    if ($crud == "volume") {
        $sql = "UPDATE $table[1] SET $campo[2]='$value_0'";
        $resultado = mysqli_query($conexao, $sql);
    }
    if ($crud == "nome") {
        $sql = "UPDATE $table[1] SET $campo[3]='$value_0'";
        $resultado = mysqli_query($conexao, $sql);
    }
    if ($crud == "voz") {
        $sql = "UPDATE $table[1] SET $campo[4]='$value_0'";
        $resultado = mysqli_query($conexao, $sql);
    }
    if ($crud == "cor") {
        $sql = "UPDATE $table[1] SET $campo[5]='$value_0'";
        $resultado = mysqli_query($conexao, $sql);
    }
    if ($crud == "rotina_c") {
        $value_1 = $_POST['value1'];
        $value_2 = $_POST['value2'];
        $sql = "INSERT INTO $table[2] ($campo[6], $campo[7], $campo[8]) VALUES ('$value_0', '$value_1', '$value_2');";
        $resultado = mysqli_query($conexao, $sql);
    }
    if ($crud == "rotina_d") {
        $sql = "DELETE FROM $table[2] WHERE $campo[6] LIKE '%$value_0%';";
        $resultado = mysqli_query($conexao, $sql);
    }
    if ($crud == "fardosconnection") {
        $value_1 = $_POST['value1'];
        $value_2 = $_POST['value2'];
        $sql = "INSERT INTO $table[3] ($campo[10], $campo[11], $campo[12]) VALUES ('$value_0', '$value_1', '$value_2');";
        $resultado = mysqli_query($conexao, $sql);
    }



    if ($crud == "error") {
        errorFix($value_0);
    }
    if ($crud == "turnoff") {
        //system("%windir%\System32\SHUTDOWN.exe -s -t 0");
    }
}
$sql = "SELECT * FROM $table[0]";
$resultado = mysqli_query($conexao, $sql);
while ($registro = mysqli_fetch_array($resultado)) {
    $GLOBALS["FardoTools"]->js("bd_values.value.push('$registro[valor]');");
    $GLOBALS["FardoTools"]->js("bd_values.data.push('$registro[data]');");
}
$sql = "SELECT $campo[2] FROM $table[1]";
$resultado = mysqli_query($conexao, $sql);
while ($registro = mysqli_fetch_array($resultado))
    $GLOBALS["FardoTools"]->js("volume = $registro[volume];");

$sql = "SELECT $campo[3] FROM $table[1]";
$resultado = mysqli_query($conexao, $sql);
while ($registro = mysqli_fetch_array($resultado))
    $GLOBALS["FardoTools"]->js("nome = '$registro[nome]';");

$sql = "SELECT $campo[4] FROM $table[1]";
$resultado = mysqli_query($conexao, $sql);
while ($registro = mysqli_fetch_array($resultado))
    $GLOBALS["FardoTools"]->js("voz = $registro[voz]-1;");

$sql = "SELECT $campo[5] FROM $table[1]";
$resultado = mysqli_query($conexao, $sql);
while ($registro = mysqli_fetch_array($resultado))
    $GLOBALS["FardoTools"]->js("
    if (sinonimos_colorido.some(aux => color.includes(aux))) {
        let cor = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
        rosto.setCor(cor);   
    } else {
        rosto.setCor('$registro[cor]');    
    }
    color = '$registro[cor]';");

$sql = "SELECT * FROM $table[2]";
$resultado = mysqli_query($conexao, $sql);
while ($registro = mysqli_fetch_array($resultado)) {
    $GLOBALS["FardoTools"]->js("bd_rotinas.descricao.push('$registro[descricao]');");
    $GLOBALS["FardoTools"]->js("bd_rotinas.hora.push('$registro[hora]');");
    $GLOBALS["FardoTools"]->js("bd_rotinas.dia_ou_semana.push('$registro[dia_ou_semana]');");
}
//$GLOBALS["FardoTools"]->js("bd_values.value.shift();");
//$GLOBALS["FardoTools"]->js("bd_values.data.shift();");
//mysqli_close($conexao);
