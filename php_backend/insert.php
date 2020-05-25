<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);



  // Sanitize.
  $fName = mysqli_real_escape_string($con, trim($request->fName));
  $lName = mysqli_real_escape_string($con, trim($request->lName));
  $email = mysqli_real_escape_string($con, $request->email);


  // Create.
  $sql = "INSERT INTO `students`(`fName`,`lName`,`email`) VALUES ('{$fName}','{$lName}','{$email}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $students = [
      'fName' => $fName,
      'lName' => $lName,
      'email' => $email,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($students);
  }
  else
  {
    http_response_code(422);
  }
}