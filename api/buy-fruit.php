<?php

$dsn = "mysql:
            host=localhost;
            dbname=store;
            user=root;
            password=;
";

$conn = new PDO($dsn);

$id = $_GET["id"];
$amount = $_GET["amount"];


$conn->query("UPDATE `fruits` SET `qty` = qty - '$amount' WHERE `fruits`.`id` = $id;");