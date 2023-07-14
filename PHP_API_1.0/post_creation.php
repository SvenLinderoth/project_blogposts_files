<?php
//-------------------------------------------
// createPost
// 
// kalla sida för att skapa ett blogginlägg mot databas
// 
// KRAV:
// user_id, title, content
//
// RETURNS: 
// JSON
// success:boolean, message
//-------------------------------------------
function createPost() {
    require_once('index.php');

    $title = $_POST['title'];
    $content = $_POST['content'];
    $user_id = $_POST['user_id'];

   // Insert the new post into the database
    $sql = "INSERT INTO `posts` 
    (`id`, `user_id`, `title`, `content`, `date`) 
    VALUES (NULL, '$user_id', '$title', '$content', current_timestamp());";
    $result = $conn->query($sql);
    if ($result === true) {
        $response = [
            'success' => true,
            'message' => 'Post created successfully'
        ];
    } else {
        $response = [
            'success' => false,
            'message' => 'Error creating post'
        ];
    }

    echo json_encode($response);
    exit();
}
createPost();
?>