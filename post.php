 <?php

$servername = "localhosh";
$username = "debian-sys-maint";
$password = "7SiStlpQq4t02sGy";
$dbname = "pathosscars";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?> 