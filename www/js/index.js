var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    var usuario = [

        {"nome": "Teste"},
        {"senha": "123@teste"},
        {"email": "teste@gmail.com"},

        {"nome": "Joao"},
        {"senha": "jp123"},
        {"email": "joao@gmail.com"},

        {"nome": "Paulo"},
        {"senha": "123456"},
        {"email": "paulo@gmail.com"},

        {"nome": "Luana"},
        {"senha": "12345lu"},
        {"email": "luana@gmail.com"},

        {"nome": "Erica"},
        {"senha": "155eri"},
        {"email": "Erica@gmail.com"}

        ];

window.localStorage.setItem("usuario.nome", usuario.nome);
window.localStorage.setItem("usuario.senha", usuario.senha);
window.localStorage.setItem("usuario.email", usuario.email);

window.localStorage.removeItem("usuario.telefone");

var email = window.localStorage.getItem("usuario.email");

window.localStorage.clear()

}