<?php
//------------------------------------------------------------------------------------------------------------------
  // CORS configuration (Cross Origin Resource Sharing)
  // Definierar hurvida externa domäner får lov att hämta resurser från detta API
  //------------------------------------------------------------------------------------------------------------------
  // Origin
  // * specificerar att alla (*), når eller har access till resurserna via XMLHttpRequest eller fetch. 
  header("Access-Control-Allow-Origin: *");
  //------------------------------------------------------------------------------------------------------------------
  // Methods 
  // Definierar vilka metoder som är tillåtna när request mot server görs.
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  // Returnerar som JSON
  header("Content-Type: application/json");
//------------------------------------------------------------------------------------------------------------------
// set up databas connection
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'webbteknik6';
// skapa en databas connection
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
