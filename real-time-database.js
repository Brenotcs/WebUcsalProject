var matricula = document.getElementById('matricula');
var password = document.getElementById('password');
var submit = document.getElementById('submit');

submit;addEventListener('click', function(){
    create(matricula.ariaValueMax, password.value)
})

function create (matri, senha) {
    var data = {
        matri: matri,
        senha: senha
    };

    return firebase.database().ref().child('users').push(data);
}
