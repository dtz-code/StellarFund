
$(document).ready(function () {

    $('#LogInBtn').click(function (loggedIn) {

    var _email = "schulze.elias@yahoo.com";
    var _pw = "Dimitra9999!";

    var emailValue = document.getElementById("email").value;

    var passwordValue = document.getElementById("password").value;


            if (emailValue === _email) {
                loggedIn = true;

                if (passwordValue = _pw) {
                    window.location.href="home1.html"
                }
            } else {
                alert('Please type a valid Email and Password');
            }

    });


});