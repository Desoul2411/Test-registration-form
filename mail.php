<?php
	$_POST = json_decode(file_get_contents("php://input"), true);  /*decode JSON income data*/
	$recepient = "desoul2411@gmail.com";
	$sitename = "Registration form";

	$name = trim($_POST['name']);
	$lastname = $_POST['lastname'];
	$nationality = $_POST['nationality'];
	$email = trim($_POST['email']);
	$day = $_POST['day'];
	$month = $_POST['month'];
	$year = $_POST['year'];
	$gender = $_POST['radio_button'];
	/*$gender = $_POST['gender'];*/
	$password = $_POST['password'];


	$pagetitle = "New user registration data from \"$sitename\"";

	$message = "Name: $name \nLast name: $lastname \nGender: $gender \nNationality: $nationality \nEmail: $email \nPassword: $password \nDate: $day $month, $year";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

	echo 'Thank you for registration!'

?>

