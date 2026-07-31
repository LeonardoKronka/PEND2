document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    // Limpar estados anteriores
    limparEstados();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    let valido = true;

    // Validação visual inline
    if (nome === '') {
        mostrarErro('nome', 'Por favor, digite seu nome.');
        valido = false;

    }

    if (email === '') {
        mostrarErro('email', 'Por favor, digite seu email.');
        valido = false;
    } else if (!validarEmail(email)) {
        mostrarErro('email', 'Por favor, digite um email válido.');
        valido = false;
    }

    if (mensagem === '') {
        mostrarErro('mensagem', 'Por favor, digite sua mensagem.');
        valido = false;
    }

    if (valido) {
        // Sucesso - feedback visual
        const form = document.getElementById("meuFormulario");
        const successDiv = document.createElement("div");
        successDiv.className = "success-message";
        successDiv.innerHTML = `<i class="fas fa-check-circle"></i> Show de bola, ${nome}! Sua mensagem foi enviada com sucesso. Logo entro em contato!`;

        // Limpar campos
        document.getElementById("nome").value = '';
        document.getElementById("email").value = '';
        document.getElementById("mensagem").value = '';

        // Marcar campos como sucesso
        document.querySelectorAll('.form-group').forEach(g => g.classList.add('success'));

        form.appendChild(successDiv);

        // Remover mensagem após 5 segundos
        setTimeout(() => {
            successDiv.remove();
            document.querySelectorAll('.form-group').forEach(g => g.classList.remove('success'));
        }, 5000);
    }
});

// Função para mostrar erro visual
function mostrarErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    const formGroup = campo.closest('.form-group');
    const errorSpan = document.getElementById(`erro-${campoId}`);

    formGroup.classList.add('error');
    errorSpan.textContent = mensagem;
    errorSpan.classList.add('visible');
}

// Função para limpar estados de erro
function limparEstados() {
    document.querySelectorAll('.form-group').forEach(g => {
        g.classList.remove('error');
    });
    document.querySelectorAll('.error-message').forEach(e => {
        e.textContent = '';
        e.classList.remove('visible');
    });
}

// Função para validar email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
