<?php
//-------------------------------------------
// login
// 
// kalla sida för att hantera logins mot databas
// krav av inloggning = username, password
//
// RETURNS: 
// JSON
// success:boolean, message, id, username
//-------------------------------------------
function login() {
    require_once('index.php');
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE name='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = mysqli_fetch_assoc($result);
        $u_id = $row['id'];
        $u_name = $row['name'];

        $response = [
            'success' => true,
            'message' => 'Login successful',
            'id' => $u_id,
            'username' => $u_name
        ];
    } else {
        $response = [
            'success' => false,
            'message' => 'Invalid username or password'
        ];
    }

    echo json_encode($response);
    exit();
    // Close the database connection
    $conn->close();
}
login();

?>