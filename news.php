<?php
include(__DIR__."/Fardo_ToolBox.php");
//header("Content-Type: text/html; charset=Windows-1250");
function file_get_contents_curl($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $data = curl_exec($ch);
    curl_close($ch);
    //$data = mb_convert_encoding($data, "utf-8", "windows-1251");
    //$data = mb_convert_encoding($data, "windows-1251", "Windows-1250");
    return $data;
}
$url = 'https://news.google.com/topstories?hl=pt-BR&gl=BR&ceid=BR:pt-419';
$scrape = file_get_contents_curl($url);
echo $scrape;
$FardoTools->js("
$('.php style, .php script').remove();
result = document.querySelectorAll('.DY5T1d.RZIKme');
for (let c = 0; c < result.length; c+=5) news.push(result[c].textContent);
blankSearch();
");
