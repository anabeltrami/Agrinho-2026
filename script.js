// Variável global para controle do tamanho da fonte
let escalaFonteAtual = 100;

// Função para aumentar e diminuir letras de forma dinâmica no DOM
function mudarTamanhoTexto(direcao) {
    escalaFonteAtual += (direcao * 10);
    // Limites de segurança para manter o site visualmente agradável
    if (escalaFonteAtual < 80) escalaFonteAtual = 80;
    if (escalaFonteAtual > 140) escalaFonteAtual = 140;
    document.body.style.fontSize = escalaFonteAtual + '%';
}

// Função para resetar as fontes ao tamanho normal
function resetarTamanhoTexto() {
    escalaFonteAtual = 100;
    document.body.style.fontSize = '100%';
}

// Função do Chat Interativo (Sugere alternativas de métodos MIP)
function processarChat() {
    const seletor = document.getElementById('seletorPergunta');
    const containerChat = document.getElementById('boxMensagens');
    const valorSelecionado = seletor.value;
    
    // Impede o envio se o usuário não escolheu nenhuma opção válida
    if (!valorSelecionado) return;

    const textoDaPergunta = seletor.options[seletor.selectedIndex].text;

    // Criando e estruturando dinamicamente o balão de mensagem do usuário
    const containerUsuario = document.createElement('div');
    containerUsuario.className = 'chat-message user-side';
    containerUsuario.innerText = textoDaPergunta;
    containerChat.appendChild(containerUsuario);

    // Estruturação lógica das respostas alternativas focadas no MIP
    let respostaDoSistema = "";
    if (valorSelecionado === "opcao1") {
        respostaDoSistema = "⚠️ Atenção: Se o método Cultural aplicado não causou o sumiço dos organismos, isso faz parte! O MIP prega que o objetivo não é eliminar 100% e sim controlar. Como o primeiro método não bastou, a resposta certa é associar o CONTROLE BIOLÓGICO 🐞. Recomenda-se introduzir inimigos naturais no campo (como insetos predadores) para combater os organismos de forma eficiente e ecológica!";
    } else if (valorSelecionado === "opcao2") {
        respostaDoSistema = "📊 O monitoramento é a base! Antes de aplicar qualquer produto químico, verifique se a população atingiu o 'Nível de Controle' estabelecido. Se o custo do prejuízo for maior que o do controle, use o CONTROLE GENÉTICO 🧬 com sementes resistentes ou bioinsumos integrados.";
    } else if (valorSelecionado === "opcao3") {
        respostaDoSistema = "🪤 Perfeito! Para aplicar o Controle Comportamental de forma barata e eficaz, espalhe armadilhas com feromônios específicos pela lavoura. Isso confunde o acasalamento dos insetos e interrompe o ciclo de reprodução sem poluir o ambiente.";
    }

    // Delay simulado de resposta para melhorar a usabilidade humana
    setTimeout(() => {
        const containerBot = document.createElement('div');
        containerBot.className = 'chat-message bot-side';
        containerBot.innerText = respostaDoSistema;
        containerChat.appendChild(containerBot);
        
        // Mantém a rolagem sempre no final da caixa de conversa
        containerChat.scrollTop = containerChat.scrollHeight;
    }, 450);

    // Reseta o campo select para a posição neutra
    seletor.value = "";
    containerChat.scrollTop = containerChat.scrollHeight;
}
