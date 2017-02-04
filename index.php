<?php
    include 'random_image.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Alin-Stefan Olaru</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Personal webpage built for and by Alin Stefan Olaru">
    <link href="files/css/landpage.css" rel="stylesheet">
    <meta name="theme-color" content="#222">
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.2.min.js"></script>
    <style>

    .background {
        background-image: url(<?php echo $folderName . '/' . $images[$random] ?>);
    }

    .content.active:before {
        background-color: <?php echo $color ?>;
    }

    </style>
</head>
<body>
	<div class="background">
        <div class="background-pattern"></div>
    </div>
    <div class="content-wrap">
        <div class="content">
            <div id="name">Alin-Stefan Olaru</div>
            <span id="extra">Junior software engineer</span>
            <ul class="social-links"></ul>
        </div>
    </div>
    <script src="files/js/home.js"></script>
</body>
</html>