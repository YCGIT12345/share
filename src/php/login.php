<?php
    include "public.php";

    $uname = $_REQUEST["qname"];
    $upasw = $_REQUEST["qpsw"];
    
    $sql = "select * from `jq_demo` where qname='$uname'";

    $res = mysqli_query($conn,$sql);
    $n = mysqli_num_rows($res);

    if(!$n){
        echo json_encode(array("status"=>3,"info"=>"用户名错误"));
    }else{
        $arr = mysqli_fetch_assoc($res);
        if($arr["qpasw"] == $upasw){
            echo json_encode(array("status"=>1,"info"=>"登陆成功","names"=>$arr["qname"]));
        }else{
            echo json_encode(array("status"=>2,"info"=>"密码错误"));
        }
    }
?>