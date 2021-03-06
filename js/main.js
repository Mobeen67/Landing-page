var emailField = document.getElementById("emailField");
var button = document.getElementById('gobtn');
var response = document.getElementById('response');

button.addEventListener('click', function() {
    var email = emailField.value;
    if (validateEmail(email)) {
        response.innerHTML = "Thanks for your subscription";
    } else {
        response.innerHTML = "Please insert a valid email";
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}