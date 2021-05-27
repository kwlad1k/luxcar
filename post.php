<?php

$userName = $_POST['user_name'];
$phoneNumber = $_POST['phone'];
$date = $_POST['date_form'];
$geo = $_POST['location_form'];
$car = $_POST['car'];


$servername = "localhost";
$username = "debian-sys-maint";
$password = "7SiStlpQq4t02sGy";
$dbname = "pathosscars";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// // Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";

$sql = "INSERT INTO rent_info (userName, phoneNumber, date_form, location_form, chooseCar)
VALUES ('" . $userName . "','" . $phoneNumber . "','" . $date . "','" . $geo . "','" . $car . "')";

if ($conn->query($sql) === TRUE) {
  echo "Автомобиль успешно заказан!\nКлиент: $userName;\nНомер телефона: $phoneNumber;\nАдрес подачи: $geo;\nДата подачи: $date\nЗабронирован автомобиль: $car";
  
} else {
  echo "Error: " . $sql . "\n" . $conn->error;
}

$conn->close();
?> 