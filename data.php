<?php
include(__DIR__ . "/database.php");

function GetDirectorySize($path)
{
    $bytestotal = 0;
    $path = realpath($path);
    if ($path !== false && $path != '' && file_exists($path)) {
        foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path, FilesystemIterator::SKIP_DOTS)) as $object) {
            $bytestotal += $object->getSize();
        }
    }
    return $bytestotal;
}

function exIp()
{
    $externalContent = file_get_contents('http://checkip.dyndns.com/');
    preg_match('/Current IP Address: \[?([:.0-9a-fA-F]+)\]?/', $externalContent, $m);
    return $m[1];
}

$memoryTotal = disk_total_space(".");
$memoryFree = disk_free_space(".");
$memoryUse = (disk_total_space(".") - disk_free_space("."));
$Fardofiles = new FilesystemIterator(__DIR__, FilesystemIterator::SKIP_DOTS);
$Fardofiles = iterator_count($Fardofiles);
$ipLan = $_SERVER["REMOTE_ADDR"];
$ipExt = exIp();

$FardoTools->js("
sys.memoryTotal = '$memoryTotal';
sys.memoryFree = '$memoryFree';
sys.memoryUse = '$memoryUse';
sys.Fardofiles = '$Fardofiles';
sys.ipLan = '$ipLan';
sys.ipExt = '$ipExt';
sysCreate();
");
