<?php 
    require("dbcon.php");


    $json =file_get_contents('php://input');
    $obj=json_decode($json,true);

    $nom=$obj['nom'];
    $prenom=$obj['prenom'];
    $email=$obj['email'];
    $password=$obj['password'];
    $repassword=$obj['repassword'];
    $password=MD5($password);
    $repassword=MD5($repassword);

    try{
        $req="INSERT INTO user VALUES ('',?,?,?,?,?,'','','')";
        $stmt=$pdo->prepare($req);
        $stmt->bindValue(1,$email);
        $stmt->bindValue(2,$password);
        $stmt->bindValue(3,$repassword);
        $stmt->bindValue(4,$nom);
        $stmt->bindValue(5,$prenom);
        $stmt->execute();
        $pdo=NULL;
        }
    catch(PDOException $e){
        echo $e->getMessage();
    }
       
?>