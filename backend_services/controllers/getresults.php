<?php
/**
 * Created by PhpStorm.
 * User: mehmetserefoglu
 * Date: 13/05/2018
 * Time: 18:16
 */
header("Access-Control-Allow-Origin: *");

$access_token = "3a1c8ba7ca3daeb79f61504cef285146";

if (isset($_POST["data"])) {
    $ans = null;
    $question = null;
    $jsonData = json_decode($_POST["data"]);

    if ($access_token == $jsonData->token) {

        $datas = file_get_contents(dirname(__DIR__) . "/cache/answers.json");

        $parseData = json_decode($datas);
        foreach ($parseData as $parseDatum => $value) {
            if ($value->id == $jsonData->id) {
                $ans = $value->datas->answer;
                $question = $value->datas->question;
            }
        }

        echo json_encode(array("status" => 1, "answer" => $ans,"question" => $question));

    }
}
