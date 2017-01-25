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
    })
}
document.addEventListener('deviceready', pronto);