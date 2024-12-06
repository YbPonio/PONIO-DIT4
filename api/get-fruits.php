<?php
header("Content-type: json");

$dsn = "mysql:
            host=localhost;
            dbname=store;
            user=root;
            password=;
";

$conn = new PDO($dsn);

$results = $conn->query("SELECT * FROM `fruits`")
                ->fetchAll();

echo json_encode($results);