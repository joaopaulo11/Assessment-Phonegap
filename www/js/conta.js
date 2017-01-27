var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    /*Função para capturar foto do dispositivo*/

    capturePhoto: function () {

        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: true
        });

        function onSuccess(imageData) {
            var image = document.getElementById('minhaImagem');
            image.style.display = "block";
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }

};

//Armazenar texto na tela principal
function pronto() {

    var titulo = localStorage.getItem('printNome');

    if (titulo) {
        var $titulo = document.getElementById('printNome');
        $titulo.innerHTML = titulo;
    }

    var $btn = document.getElementById('btnNome');

    $btn.addEventListener('touchend', function (evt) {
        event.preventDefault();

        var $nome = document.getElementById('nome');
        var $titulo = document.getElementById('printNome');

        $titulo.innerHTML = $nome.value;

        localStorage.setItem('printNome', $nome.value);
    });

}
document.addEventListener('deviceready', pronto);
