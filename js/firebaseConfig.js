//var usersList = document.getElementById('usersList');
//var nomeInput = document.getElementById('nomeInput');
//var sobrenomeInput = document.getElementById('sobrenomeInput');
var emailInput = document.getElementById('emailInput');
//var matriculaInput = document.getElementById('matriculaInput');
var passwordInput = document.getElementById('passwordInput');
var submitButton = document.getElementById('submitButton');
var authGoogleButton = document.getElementById('authGoogleButton');

window.onload = function () {
    submitButton.addEventListener('click', function () {

        firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value).then(function (result) {
            alert("Usuário Conectado!");

            console.log("Success!");

        }).catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;

            alert(errorMessage);
        });
    });
}
