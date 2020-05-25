<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
	$request= json_decode($postdata);

	//sanitize
	$id = mysqli_real_escape_string($con, (int)$_GET['id']);
	$fName = mysqli_real_escape_string($con, trim($request->fName));
	$lName = mysqli_real_escape_string($con, trim($request->lName));
	$email = mysqli_real_escape_string($con,  $request->email);

	//update
	$sql = "UPDATE `students` SET `fName`='{$fName}',`lName`='{$lName}',`email`='{$email}' WHERE `sId`={$id}";

	if(mysqli_query($con,$sql)){
		http_response_code(204);
	}
else{
	return http_response_code(422);
}
}

?>
