document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        alert ('login sucessful');
    } else {
        alert ('invalid username or password');
    }
});