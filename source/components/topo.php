<?php

  $json_menu = file_get_contents($url_json.'menu.json');
  $json_menu = json_decode($json_menu);
  
  function gerarLinksMenu($arr) {
   
    foreach($arr as $item) {
      echo "
      <li class='nav-item'>
        <a class='nav-link' href='#'>{$item->titulo}</a>
      </li>
      ";
    }
  }

  

?>

<!doctype html>
<html lang='pt-br'>

<head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl' crossorigin='anonymous'>
    <link href='<?php echo $url_css.'main.css' ?>' rel='stylesheet'>

    <title>PIBID UFPR</title>
</head>

<body>
    <header>
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <div class='container-fluid'>
                <a class='navbar-brand' href='#'>PIBID</a>
                <button class='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                    aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                        <?php
                          gerarLinksMenu($json_menu);
                        ?>
                    </ul>
                </div>
            </div>
        </nav>
    </header>