const residuos = document.querySelectorAll(".residuo");
const lixeiras = document.querySelectorAll(".lixeira");
const mensagem = document.querySelector("#mensagem");

// O evento dragstart acontece quando começamos a arrastar um resíduo.
residuos.forEach(function (residuo) {
    residuo.addEventListener("dragstart", function (event) {
        // Guarda o ID do resíduo que está sendo arrastado.
        event.dataTransfer.setData("text", event.target.id);
    });
});

lixeiras.forEach(function (lixeira) {
    // O preventDefault permite que a lixeira receba o elemento.
    lixeira.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    // O evento drop acontece quando o resíduo é solto na lixeira.
    lixeira.addEventListener("drop", function (event) {
        event.preventDefault();

        // Recupera o ID e seleciona novamente o resíduo no HTML.
        const id = event.dataTransfer.getData("text");
        const residuo = document.querySelector("#" + id);

        // Compara o tipo do resíduo com o tipo da lixeira.
        if (residuo.dataset.tipo === lixeira.dataset.tipo) {
            lixeira.appendChild(residuo);
            residuo.setAttribute("draggable", "false");
            residuo.classList.add("separado");

            mensagem.textContent = "Muito bem! Resíduo separado corretamente.";
            mensagem.className = "mensagem-certa";
            lixeira.classList.add("acerto");

            setTimeout(function () {
                lixeira.classList.remove("acerto");
            }, 700);
        } else {
            mensagem.textContent = "Lixeira incorreta. Tente novamente!";
            mensagem.className = "mensagem-errada";
            lixeira.classList.add("erro");

            setTimeout(function () {
                lixeira.classList.remove("erro");
            }, 700);
        }
    });
});
