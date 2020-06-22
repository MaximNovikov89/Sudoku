/* function for onclick login button */
function sudokuLogin() {
    let resultUsername = validateUsername();
    let resultPassword = validatePassword();

    if(resultUsername && resultPassword) {
        window.location.href = "menu.html";
    }
}

/* function for validating user name 
if user name is incorrect, an error message appears */
function validateUsername() {
    let username = document.getElementById('username').value;

    if(username != 'abcd') {
        document.getElementById('usernameError').innerHTML = 'Incorrect username...';
        return false;
    }

    document.getElementById('usernameError').innerHTML = '';
    return true;
}

/* function for validating password
if password is incorrect, an error message appears */
function validatePassword() {
    let password = document.getElementById('password').value;

    if(password != '1234') {
        document.getElementById('passwordError').innerHTML = 'Incorrect password...';
        return false;
    }
    
    document.getElementById('passwordError').innerHTML = '';
    return true;
}
