<?php

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');

    $req = $_GET['var'];

    if ($req == 'dolar' || $req == 'euro') {
        require 'db_connection.php';

        $stmt = $conn->prepare("SELECT * FROM $req");
        $res = $stmt->execute();
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }