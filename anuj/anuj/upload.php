<?php
$uploadDir = 'uploads/';

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$targetFile = $uploadDir . basename($_FILES['fileInput']['name']);
$uploadSuccess = move_uploaded_file($_FILES['fileInput']['tmp_name'], $targetFile);

if ($uploadSuccess) {
    echo "File uploaded successfully.";
} else {
    echo "File upload failed. Error: " . $_FILES['fileInput']['error'];
}
?>