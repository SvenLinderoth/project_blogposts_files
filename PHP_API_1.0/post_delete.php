<?php
//-------------------------------------------
// deletePost
// 
// kalla sida för att ta bort en blogpost
// krav = aktuell posts id
//
// RETURNS: 
// JSON
// success:boolean, message
//-------------------------------------------
function deletePost() {
    require_once('index.php');
    $id = $_POST['id'];

    $sql = "DELETE FROM posts WHERE id=$id";
    $result = $conn->query($sql);

    if ($result === true) {
        $response = [
            'success' => true,
            'message' => 'Post deleted successfully'
        ];
    } else {
        $response = [
            'success' => false,
            'message' => 'Error deleting post'
        ];
    }

    echo json_encode($response);
    exit();

    // Close the database connection
    $conn->close();
}
deletePost();
?>