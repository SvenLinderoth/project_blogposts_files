// när window är inladdat så kan vi hämta blogposts från API:et med fetch
// samt appenda dem till DOM:en
window.onload = function () {
// --------------------------------------------
console.log(localStorage.getItem('userName'));
// reference to blog post container element
const blogPostContainer = document.querySelector('#posts-container');
//--------------------------
// Make request to blog posts API
fetch('http://localhost/PHP_API_1.0/blogposts.php')
  .then(response => response.json())
  .then(posts => {
    // Iterate over each blog post returned from API
    posts.forEach(post => {
      // Create new div element to hold blog post
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');

      // Add post title to post element
      const titleElement = document.createElement('h2');
      titleElement.textContent = post.title;
      postElement.appendChild(titleElement);
      // Add post title to post element
      const authorElem = document.createElement('p');
      authorElem.textContent = post.name + ', ' + post.date;
      authorElem.classList.add('author');
      postElement.appendChild(authorElem);

      // Add post content to post element
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
      postElement.appendChild(contentElement);

      //if same as post fetched, create delete button
      if (localStorage.getItem('userId') === post.user_id) {
          // add button and append too postElement
        const btn = document.createElement('button');
        btn.textContent = 'delete';
        btn.classList.add('delete_post');
        postElement.appendChild(btn);
        //save post id as formData for api call
        const formData = new FormData();
        formData.append('id', post.id);

        btn.addEventListener('click', (event) => {
        //delete post with post.id
          fetch('http://localhost/PHP_API_1.0/post_delete.php', {
            method: 'POST',
            body: formData,
          })
          .then ((response) => {
              return response.json();
          })
          .then ((json) => {
          if(json.success) {
                  alert('post deleted');
                  location.href = 'index.html';
              }   else {
                  alert('failed to delete post');
              }
          })
          .catch((error) => {
              console.log(error);
          });
        });
        
          // Add post content to post element
          const edit_btn = document.createElement('button');
          edit_btn.textContent = 'edit';
          edit_btn.classList.add('edit_post');
          postElement.appendChild(edit_btn);
          edit_btn.addEventListener('click', (event) => {
            alert('edit post here, not functional');
          });
      }
      // Add post element to blog post container
      blogPostContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error(error));    
}
