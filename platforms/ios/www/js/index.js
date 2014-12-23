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
        dimensionarImagen();
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

function dimensionarImagen() {
    var image = document.getElementById("imagen_principal");
    // 640x 360
    image.style.width = (window.screen.width - 10) + 'px';
    image.style.height = (window.screen.height/2) + 'px';
    
}

