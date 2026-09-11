const statusLocalizacao = document.getElementById("status-localizacao");

const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");


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

    video.srcObject = stream;

})

.catch(function (erro) {

    console.log("Erro ao acessar a câmera:", erro);

});


// TIRAR FOTO

botao.addEventListener("click", function () {

    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    foto.src = canvas.toDataURL("image/png");

});