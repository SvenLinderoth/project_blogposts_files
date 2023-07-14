window.onload = function () {
    const form = document.getElementById("new-post-form");
    const submitButton = document.getElementById('submit-post');
//Submit post creation
submitButton.addEventListener('click', (event) => {
    //event.preventDefault();

    const userId = localStorage.getItem('userId');
    const formData = new FormData(form);
    formData.append('user_id', userId);

    console.log(formData);

    fetch('http://localhost/PHP_API_1.0//post_creation.php', {
      method: 'POST',
      body: formData,
    })

    .then ((response) => {
        return response.json();
    })
    .then ((json) => {
        if(json.success) {
                console.log(json.message);
            }   else {
                console.log(json.message);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    });
    // end of submit post
}