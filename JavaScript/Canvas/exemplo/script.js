const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

//desenhando uma linha
contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(50, 200);
contexto.lineTo(100, 0);
contexto.stroke();

// desenhando um retangulo preenchido
contexto.fillRect(50, 50, 150, 100);

//desenhando um retangulo contornado
contexto.strokeRect(250, 50, 150, 100);

// desenhando um circulo
contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI, true);
contexto.fill();