<?php 
$pdo = new PDO("mysql:host=localhost;dbname=irm","root","");

    $json =file_get_contents('php://input');
    $obj=json_decode($json,true);

    $ph=$obj['ph'];
    $temp=$obj['temp'];
    $hum=$obj['hum'];
    $date = date('Y-m-d');

    try{
        $req="INSERT INTO graph (temperture,ph,humudite,date) VALUES (?,?,?,?)";
        $stmt=$pdo->prepare($req);
        $stmt->bindValue(1,$temp);
        $stmt->bindValue(2,$ph);
        $stmt->bindValue(3,$hum);
        $stmt->bindValue(4,$date)
        $stmt->execute();
        }
    catch(PDOException $e){
        echo $e->getMessage();
    }
?>