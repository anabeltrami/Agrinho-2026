// 1. Função para Aumentar / Diminuir Texto (Acessibilidade)
let tamanhoFonteAtual = 16;

function alterarFonte(direcao) {
    tamanhoFonteAtual += direcao * 2;
    // Define limites para a fonte não quebrar o layout
    if (tamanhoFonteAtual < 12) tamanhoFonteAtual = 12;
    if (tamanhoFonteAtual > 26) tamanhoFonteAtual = 26;
    document.body.style.fontSize = tamanhoFonteAtual + "px";
}

// 2. Função para o botão de clique rápido das sugestões
function usarSugestao(texto) {
    document.getElementById('chat-mensagem-input').value = texto;
    enviarMensagem();
}

// 3. Função principal do Chat Interativo
function enviarMensagem() {
    const input = document.getElementById('chat-mensagem-input');
    const textoMensagem = input.value.trim();
    
    if (textoMensagem === "") return;

    const historico = document.getElementById('chat-historico');

    // Cria a mensagem digitada pelo usuário e coloca na tela
    const divUsuario = document.createElement('div');
    divUsuario.className = 'mensagem msg-usuario';
    divUsuario.textContent = textoMensagem;
    historico.appendChild(divUsuario);

    // Limpa a barra de texto e foca o scroll no fim do chat
    input.value = "";
    historico.scrollTop = historico.scrollHeight;

    // Inteligência Artificial do Chat: Resposta automática inteligente após um pequeno atraso
    setTimeout(() => {
        const divBot = document.createElement('div');
        divBot.className = 'mensagem msg-bot';

        // Análise lógica do texto digitado para sugerir novas estratégias
        if (textoMensagem.toLowerCase().includes('não estão sumindo') || textoMensagem.toLowerCase().includes('não somem')) {
            divBot.innerHTML = "<strong>Sugestão MIP:</strong> Se os organismos não estão sumindo com o método atual, eles podem ter desenvolvido resistência! 💡 Recomendamos que você alterne a estratégia imediatamente e utilize o <strong>Controle Biológico</strong> (introduzindo inimigos naturais como joaninhas e microrganismos) ou o <strong>Controle Comportamental</strong> (usando armadilhas de feromônios). Isso vai quebrar o ciclo e salvar sua lavoura de forma equilibrada! 🐞🕸️";
        } else if (textoMensagem.toLowerCase().includes('biológico') || textoMensagem.toLowerCase().includes('biologico')) {
            divBot.innerHTML = "O <strong>Controle Biológico</strong> usa a força da própria natureza! 🌿 Você insere predadores naturais (como insetos benéficos ou fungos específicos) que atacam apenas as pragas alvo, mantendo o ecossistema protegido e sem usar venenos! 🐜✨";
        } else {
            divBot.innerHTML = "Entendi perfeitamente sua dúvida! Lembre-se que no MIP só iniciamos técnicas mais fortes se a população de pragas atingir o 'Nível de Controle'. Qual técnica você está utilizando hoje na plantação? 🚜🌾";
        }

        historico.appendChild(divBot);
        historico.scrollTop = historico.scrollHeight;
    }, 600);
}

// Escuta os cliques no botão Enviar da tela
document.getElementById('btn-enviar-msg').addEventListener('click', enviarMensagem);

// Permite enviar a mensagem também pressionando a tecla Enter
document.getElementById('chat-mensagem-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        enviarMensagem();
    }
});
