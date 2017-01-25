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
    onDeviceReady: function () {

        /*Informações do Dispositivo na tela do aparelho*/

        document.getElementById("cordova").innerHTML = device.cordova;
        document.getElementById("model").innerHTML = device.model;
        document.getElementById("platform").innerHTML = device.platform;
        document.getElementById("version").innerHTML = device.version;
        document.getElementById("manufacturer").innerHTML = device.manufacturer;
        document.getElementById("serial").innerHTML = device.serial;


        function onSuccess(acceleration) {

            alert('celeraX: ' + acceleration.x + '\n' +
                'celeraY: ' + acceleration.y + '\n' +
                'celeraZ: ' + acceleration.z + '\n' +
                'celeraTS: ' + acceleration.timestamp + '\n');
        }

        function onError() {
            alert('onError!');
        }

        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);


    }

};
