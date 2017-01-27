function pronto() {

    // Incluir texto de boas vindas na home

    navigator.globalization.getPreferredLanguage(function (language) {

        if (language.value == 'pt-BR') {
            $('#bemvindo').text('Bem Vindo');
        }
        if (language.value == 'en') {
            $('#bemvindo').text('Wellcome');
        }
        if (language.value == 'es') {
            $('#bemvindo').text('Bienvenido');
        }
    });


    document.getElementById('doubleTouch').addEventListener('touchend', function (evt) {
        if (evt.touchesList.lenght == 2) {
            navigator.vibrate(200);
        }
    });

}
document.addEventListener('deviceready', pronto);