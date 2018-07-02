<?php
    header("content-type:text/html;charset=utf8");
	$servename = "localhost";
	
	$t_name = "root";
	
	$t_pass = "root";
	
	$t_test = "xm";
	
	
	$conn = new mysqli($servename,$t_name,$t_pass,$t_test);
	if($conn->connect_error){
		die("连接失败:".$conn->connect_error);
	}

	$conn->query("set names utf8");

?>