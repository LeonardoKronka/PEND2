const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");


contexto.lineWidth = 6;
contexto.lineCap = "round";
contexto.lineJoin = "round";

// CABEÇA
contexto.beginPath();

contexto.arc(65, 76, 15, 0, Math.PI * 2);

contexto.stroke();


// CORPO
contexto.beginPath();

contexto.moveTo(60, 90);
contexto.lineTo(60, 145);


// BRAÇO ESQUERDO
contexto.moveTo(60, 90);
contexto.lineTo(40, 110); 
contexto.lineTo(70, 125); 


// BRAÇO DIREITO
contexto.moveTo(60, 90);
contexto.lineTo(80, 110); 
contexto.lineTo(95, 95);  


// PERNA ESQUERDA
contexto.moveTo(60, 145);
contexto.lineTo(40, 180);
contexto.lineTo(40, 210);


// PERNA DIREITA
contexto.moveTo(60, 145);
contexto.lineTo(80, 180);
contexto.lineTo(80, 210);


contexto.stroke();