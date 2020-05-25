<?php

 require 'connect.php';
 
 $id = ''; 
if( isset( $_GET['id'])) {
    $id = $_GET['id']; 
} 
 

  // Update.
$sql = "SELECT * FROM `students` WHERE `sId` ='{$id}' LIMIT 1";

  $result = mysqli_query($con,$sql);
  $row = mysqli_fetch_assoc($result);
  //print_r($row);

  echo $json = json_encode($row);
  //echo json_encode(['data'=>$json]);

   exit;
   ?>