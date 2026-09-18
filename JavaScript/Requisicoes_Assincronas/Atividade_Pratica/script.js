const botao = document.querySelector("#buscar");

const resultado = document.querySelector("#resultado");


botao.addEventListener("click", async () => {

    const cidade = document.querySelector("#cidade").value;


    resultado.innerHTML = "Buscando...";


    try {

        // Busca a cidade e suas coordenadas
        const respostaCidade = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`
        );


        if (!respostaCidade.ok) {

            throw new Error("Erro ao buscar a cidade");

        }


        const dadosCidade = await respostaCidade.json();


        if (!dadosCidade.results) {

            throw new Error("Cidade não encontrada");

        }


        const latitude = dadosCidade.results[0].latitude;

        const longitude = dadosCidade.results[0].longitude;

        const nomeCidade = dadosCidade.results[0].name;


        // Busca os dados do clima
        const respostaClima = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code`
        );


        if (!respostaClima.ok) {

            throw new Error("Erro ao buscar o clima");

        }


        const dadosClima = await respostaClima.json();


        const codigo = dadosClima.current.weather_code;

        const icone = escolherIcone(codigo);


        resultado.innerHTML = `
            <div class="clima">

                <h2>${nomeCidade}</h2>

                <div class="icone">
                    ${icone}
                </div>

                <div class="temperatura">
                    ${dadosClima.current.temperature_2m} °C
                </div>

                <p>
                    Sensação térmica:
                    ${dadosClima.current.apparent_temperature} °C
                </p>

                <div class="informacoes">

                    <div class="info">
                        <strong>💧 Umidade</strong>

                        <br><br>

                        ${dadosClima.current.relative_humidity_2m}%
                    </div>


                    <div class="info">
                        <strong>💨 Vento</strong>

                        <br><br>

                        ${dadosClima.current.wind_speed_10m} km/h
                    </div>

                </div>

            </div>
        `;


    } catch (erro) {

        resultado.innerHTML = `
            <p class="erro">
                ${erro.message}
            </p>
        `;

    }

});


function escolherIcone(codigo) {

    if (codigo === 0) {

        return "☀️";

    }

    else if (codigo === 1 || codigo === 2) {

        return "🌤️";

    }

    else if (codigo === 3) {

        return "☁️";

    }

    else if (codigo >= 45 && codigo <= 48) {

        return "🌫️";

    }

    else if (codigo >= 51 && codigo <= 67) {

        return "🌧️";

    }

    else if (codigo >= 71 && codigo <= 77) {

        return "❄️";

    }

    else if (codigo >= 80 && codigo <= 82) {

        return "🌦️";

    }

    else if (codigo >= 95) {

        return "⛈️";

    }

    else {

        return "🌤️";

    }

}