var usersList = document.getElementById('usersList');
var nomeInput = document.getElementById('nomeInput');
var sobrenomeInput = document.getElementById('sobrenomeInput');
var emailInput = document.getElementById('emailInput');
var matriculaInput = document.getElementById('matriculaInput');
var passwordInput = document.getElementById('passwordInput');
var submitButton = document.getElementById('submitButton');
var authGoogleButton = document.getElementById('authGoogleButton');

submitButton.addEventListener('click', function () {
    create(nomeInput.value, sobrenomeInput.value, emailInput.value, matriculaInput.value, passwordInput.value);
});

function create(nome, sobrenome, email, matricula, password) {
    var data = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        matricula: matricula,
        password: password
    };

    return firebase.database().ref().child('users').push(data);
}

firebase.database().ref('users').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nome + ': ' + item.val().sobrenome + ': ' + item.val().email + ': ' + item.val().matricula + ': ' + item.val().password));
        usersList.appendChild(li);

    });
});
