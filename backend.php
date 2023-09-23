<?php
    $myName = $_POST['myName'];
    $myName = $_POST['myAge'];
    $myHeight = $_POST['myHeight'];
    $myWeight = $_POST['myWeight'];
    $mySymptoms = $_POST['mySymptoms'];
    $myRecord= $_POST['myRecord'];
    $myAllergy= $_POST['myAllergy']; 
    $myDisease= $_POST['myDisease'];

    $conn = new mysqli('http://127.0.0.1:5500/','root','','Medicines');
    if($conn->connect_error)
    {
        die('connection failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into registration(myName,myAge,myHeight,myWeight,mySymptoms,myRecord,mAllergy,myDisease)
        values(?,?,?,?,?,?)");
        $stmt->bind_param("siiissss",$myName,$myAge,$myHeight,$myWeight,$mySymptoms,$myRecord,$mAllergy,$myDisease);
        $stmt->close();
        $conn->close();
    }

    

?>