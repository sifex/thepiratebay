<?php
require __DIR__ . '/vendor/autoload.php';




use Buzz\Browser;
use Buzz\Client\Curl;

$browser = new Browser();
$client = new Curl();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
curl_setopt($ch, CURLOPT_CAINFO, getcwd() . "/CAcerts/BuiltinObjectToken-EquifaxSecureCA.crt");

$client->setMaxRedirects(0);
$browser->setClient($client);

$response = $browser->get('https://thepiratebay.mn');
echo $response;

?>