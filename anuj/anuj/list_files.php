<?php
$uploadDir = 'uploads/';

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$targetFile = $uploadDir . basename($_FILES['fileInput']['name']);
$uploadSuccess = move_uploaded_file($_FILES['fileInput']['tmp_name'], $targetFile);

