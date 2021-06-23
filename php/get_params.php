<?php
    try
    {
        $CN = new PDO("mysql:host=localhost;dbname=irm","root","");   
    }
    catch(PDOException $e)
    {
        $e->getMessage();
    }

    $req="SELECT * FROM params";
    $stmt=$CN->prepare($req);
    $stmt->execute();
    $info=$stmt->fetch(PDO::FETCH_ASSOC);
    $ph=$info['ph'];
    $temperature=$info['temperature'];
    $humidite=$info['humidite'];
    $vent=$info['vent'];
    $arr=array("ph"=>$ph,"temperature"=>$temperature,"humidite"=>$humidite,"vent"=>$vent);
    echo json_encode($arr);
    

?> 