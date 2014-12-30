var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        // Abrir pagina en iframe
        window.plugins.spinnerDialog.show(null, 'Cargando...');
        window.open("http://www.20000leguas.es", "iframe");
        document.getElementById("iframe").onload = function(){window.plugins.spinnerDialog.hide();};
    }
};

app.initialize();