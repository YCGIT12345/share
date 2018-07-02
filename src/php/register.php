<?php
    include "public.php";

    $qname = $_REQUEST["qname"];
    $qpsw = $_REQUEST["qpsw"];

    $sql = "INSERT INTO `jq_demo`(`qname`, `qpasw`) VALUES ('$qname','$qpsw')";

    $row = mysqli_query($conn,$sql);

    if($row){
        echo json_encode(array("status"=>1,"info"=>"注册成功"));
    }else{
        echo json_encode(array("status"=>0,"info"=>"注册失败"));
    }
    
?>