<?php
    // This is horrible. Please don't try this at home.
    $folderName = 'files/images/backgrounds'; 
    $images = scandir($folderName);
    $random = mt_rand(2, count($images) - 1);
    $ext = pathinfo($folderName . '/' . $images[$random], PATHINFO_EXTENSION);
    $color = "lime";
    $filename = preg_replace('/\s+/', '', $images[$random]);

    if (strpos($images[$random], 'butterfly1') !== false) {
        $color = "orange";
    } else if (strpos($images[$random], 'nature2') !== false) {
        $color = "red";
    } else if (strpos($images[$random], 'nature1') !== false) {
        $color = "cyan";
    } else if (strpos($images[$random], 'bv1') !== false) {
        $color = "navy";
    } else if (strpos($images[$random], 'bv2') !== false) {
        $color = "blue";
    }
?>