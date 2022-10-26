<?php
/*

*RECOMENDADO DEIXAR ESTE ARQUIVO NA MESMA PASTA
DAS OUTRAS BIBLIOTECAS DO Fardo_ToolBox!!!

*/
class Fardo_ToolBox
{
    public function js($javascript)
    {
        echo "<script>$javascript</script>";
    }
    function css($css)
    {
        echo "<style>$css</style>";
    }
    function html($tag, $attributes, $value, $close)
    {
        if ($close == true) {
            if (is_array($value)) {
                $string = "";
                for ($c = 0; $c < count($value); $c++) $string .= $value[$c] . "<br>";
                echo "<$tag $attributes>$string</$tag>";
            } else {
                echo "<$tag $attributes>$value</$tag>";
            }
        } else echo "<$tag $attributes>";
    }
    function defaultHtml($iconSrc, $title, $styleSrc, $javascriptSrc)
    {
        if ($styleSrc == null || $styleSrc == "") $styleSrc = "#";
        if ($javascriptSrc == null || $javascriptSrc == "") $javascriptSrc = "#";
        echo "<!DOCTYPE html>
                <html lang='pt-BR'>
                    <head>
                        <link rel='icon' href='$iconSrc' type='image/extension' sizes='16x16'>
                        <link rel='stylesheet' href='$styleSrc'>
                        <meta charset='UTF-8'>
                        <meta name='viewport' content='width=device-width, initial-scale=1.00'>
                        <title>$title</title>
                    </head>
                    <body>
                         <script src='$javascriptSrc'>Javascript is disabled<br>Javascript está desabilitado</script>
                    </body>
                </html>
            ";
    }
    function getGitHub($github_url)
    {
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $github_url);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $data = curl_exec($ch);
            curl_close($ch);
            return $data;
        } catch (Exception) {
            throw "Error on request GitHub";
        }
    }
};
$FardoTools = new Fardo_ToolBox;
