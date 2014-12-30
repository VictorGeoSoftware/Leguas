var internet = 'false';

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('offline', onNoInternet, false);
        document.addEventListener('online', onInternet, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        //Pillar correo
    }
};

app.initialize();


//---------------------------------- METODOS
function onNoInternet() {
    internet = 'false';
}

function onInternet() {
    internet = 'true';
}

