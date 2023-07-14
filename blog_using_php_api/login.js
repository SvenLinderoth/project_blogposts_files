// welcomes
// Array som används för randomserad välkomst meddelande
var welcomes = [
    'Welcome back ',
    'Hello again ',
    'So we meet again ',
    'You made it back ',
    'Happy to see you ',
    'Its been too long '
];
// när window har laddats in så är vi redo att lägga på eventlystnare på formulär för login
window.onload = function() {
const loginForm = document.querySelector('#login-form');
// const message = document.querySelector('#message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);

    fetch('http://localhost/PHP_API_1.0/login.php', {
      method: 'POST',
      body: formData,
    })
    .then ((response) => {
        return response.json();
    })
    .then ((json) => {
    if(json.success) {
            //message.innerHTML = json.message;
            activateUser(json);
        }   else {
            alert(json.message);
        }
    })
    .catch((error) => {
        console.log(error);
    });
});
}
// Funktion: activateUser 
// kallas på när login ger true response och sparar en användare i localstorage
// samt välkommnar användare med random genererat meddelande från welcomes array
function activateUser(response) {
    // Store the user in localStorage
    // console.log(response.username)
    var welcome = welcomes[Math.floor(Math.random()*welcomes.length)];

    localStorage.setItem('userId', response.id);
    localStorage.setItem('userName', response.username);
    checkUser();
    location.href = ('index.html');
    alert(welcome + response.username + '!');
}
