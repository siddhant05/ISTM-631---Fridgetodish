<?php
    $db = mysqli_connect('hostname','username','password','databasename');
?>
<html>
    <body>
          <?php
                $query = "SELECT * FROM `mytable`;";
                $result = mysqli_query($db, $query);
                while($row = mysqli_fetch_assoc($result)) {
                      // Display your datas on the page
                }
          ?>
    </body>
</html>