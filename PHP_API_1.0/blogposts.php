<?php 
//-------------------------------------------
// getBlogsposts
// 
// kalla sida för att hämta alla blogposts
// 
// RETURNS: 
// JSON
// id, name, title, content, date, user_id
//-------------------------------------------
function getBlogsposts() {
  require_once('index.php');
  // Fetch all posts from the "posts" table
  $sql = "SELECT *, posts.id as postId
  FROM posts
  JOIN users ON posts.user_id = users.id
  ORDER BY posts.date DESC;";

  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
    // Convert results to an array of posts
    $posts = array();
    while ($row = mysqli_fetch_assoc($result)) {
      $post = array(
        'id' => $row['postId'],
        'name' => $row['name'],
        'title' => $row['title'],
        'content' => $row['content'],
        'date' => $row['date'],
        'user_id' => $row['user_id']
      );
      array_push($posts, $post);
    }
    echo json_encode($posts);
  } else {
    echo "No posts found.";
  }
  mysqli_close($conn);
}
getBlogsposts();
?>