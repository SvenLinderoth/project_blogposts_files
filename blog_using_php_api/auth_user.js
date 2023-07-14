function checkUser() {
    // When the user navigates to a page that requires authentication:
    if (!localStorage.getItem('userId')) {
        // Redirect the user to the login page
        alert('please log in or sign up to continue');
        location.href = 'login.html';
    } else {
        // Allow the user to view the page
        console.log('logged in');
    }
}
//localStorage.clear();
function clearUser() {
    localStorage.clear();
    sessionStorage.clear();
    alert('logged out');
    location.href = 'login.html';
}