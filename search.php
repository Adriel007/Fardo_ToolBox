<?php
include(__DIR__."/database.php");
header("Content-Type: text/html; charset=Windows-1250");
function file_get_contents_curl($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $data = curl_exec($ch);
    curl_close($ch);
    $data = mb_convert_encoding($data, "utf-8", "windows-1251");
    $data = mb_convert_encoding($data, "windows-1251", "Windows-1250");
    return $data;
}
$query = $_COOKIE['query'];
$url = 'http://www.google.co.in/search?q='.urlencode($query).'';
$scrape = file_get_contents_curl($url);
if (!empty($query)) {
echo $scrape;
$FardoTools->js("
$('.php style, .php script').remove();
result = document.querySelectorAll('.BNeawe.s3v9rd.AP7Wnd')[0].textContent;
if (result) falar(result);
else falar('Não encontrei resultados para a sua pesquisa');
");
}