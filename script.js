// Aguarda o carregamento completo do DOM para evitar erros no celular e GitHub Pages
document.addEventListener("DOMContentLoaded", function() {

    // 1. Configuração de Acessibilidade (Aumentar/Diminuir Letra)
    let tamanhoFonte = 16;
    const btnMais = document.getElementById('btn-com-fonte-mais');
    const btnMenos = document.getElementById('btn-com-fonte-menos');

    if (btnMais && btnMenos) {
        btnMais.addEventListener('click', function() {
            if (tamanhoFonte < 24) {
                tamanhoFonte += 2;
                document.body.style.fontSize = tamanhoFonte + "px";
            }
        });

        btnMenos.addEventListener('click', function() {
            if (tamanhoFonte > 12) {
                tamanhoFonte -= 2;
                document.body.style.fontSize = tamanhoFonte + "px";
            }
        });
    }

    // 2. Eventos do Chat Interativo
    const inputChat = document.getElementById('chat-mensagem-input');
    const btnEnviar = document.getElementById('btn-enviar-msg');
    const historicoChat = document.getElementById('chat-historico');

    function processarEnvioMensagem(texto) {
        const mensagemTexto = texto || inputChat.value.trim();
        if (mensagemTexto === "") return;

        // Adiciona mensagem do Usuário
        const divUsuario = document.createElement('div');
        divUsuario.className = 'mensagem-chat msg-usuario-envio';
        divUsuario.textContent = mensagemTexto;
        historicoChat.appendChild(divUsuario);

        inputChat.value = "";
        historicoChat.scrollTop = historicoChat.scrollHeight;

        // Resposta automatizada com lógica de alternância de métodos
        setTimeout(() => {
            const divBot = document.createElement('div');
            divBot.className = 'mensagem-chat msg-sistema-bot';

            const textoMinusculo = mensagemTexto.toLowerCase();

            if (textoMinusculo.includes('não estão sumindo') || textoMinusculo.includes('não somem')) {
                divBot.innerHTML = "<strong>Sugestão MIP:</strong> Se os organismos não estão sumindo, eles podem ter criado resistência ao manejo atual! 💡 Sugerimos mudar a tática e aplicar o <strong>Controle Biológico</strong> introduzindo inimigos naturais, ou o <strong>Controle Comportamental</strong> usando armadilhas de feromônios. Isso quebrará o ciclo de reprodução deles sem agredir o meio ambiente! 🐞🕸️";
            } else if (textoMinusculo.includes('biológico') || textoMinusculo.includes('biologico')) {
                divBot.innerHTML = "O <strong>Controle Biológico</strong> combate as pragas usando a própria biodiversidade! 🌿 Você insere predadores benéficos (como microrganismos ou outros insetos) que eliminam os alvos naturalmente, preservando a saúde humana e a plantação! 🐜✨";
            } else {
                divBot.innerHTML = "Excelente pergunta! Lembre-se que no MIP nós monitoramos constantemente o campo e só agimos de forma agressiva se atingir o 'Nível de Controle'. Qual dos métodos você gostaria de detalhar mais? 🚜🌾";
            }

            historicoChat.appendChild(divBot);
            historicoChat.scrollTop = historicoChat.scrollHeight;
        }, 600);
    }

    // Ouvinte do botão enviar tradicional
    if (btnEnviar) {
        btnEnviar.addEventListener('click', function() {
            processarEnvioMensagem();
        });
    }

    // Ouvinte da tecla Enter
    if (inputChat) {
        inputChat.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                processarEnvioMensagem();
            }
        });
    }

    // Ouvinte para os botões de sugestão rápida (captura o clique em qualquer botão com a classe)
    document.querySelectorAll('.btn-opcao-sugestao').forEach(botao => {
        botao.addEventListener('click', function() {
            const textoSugestao = this.getAttribute('data-texto');
            processarEnvioMensagem(textoSugestao);
        });
    });

});
