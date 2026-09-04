const statusLocalizacao = document.getElementById("status-localizacao");


// GEOLOCALIZAÇÃO

navigator.geolocation.getCurrentPosition(

    function (position) {

        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
        console.log("Precisão: " + position.coords.accuracy);

        statusLocalizacao.textContent = "Localização confirmada!";
    },

    function (erro) {

        console.log("Não foi possível obter a localização.", erro);

        statusLocalizacao.textContent = "Localização não permitida.";
    }

);


// CÂMERA

navigator.mediaDevices.getUserMedia({

    video: true

})

.then(function (stream) {

    const video = document.querySelector("#camera");

    video.srcObject = stream;

})

.catch(function (erro) {

    console.log("Erro ao acessar a câmera:", erro);

});